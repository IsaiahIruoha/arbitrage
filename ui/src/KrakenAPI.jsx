import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayGraph from './DisplayGraph.jsx'
import './KrakenAPIStyles.css';
import { Link } from 'react-router-dom';

const KrakenAPI = () => {
  const [tickerData, setTickerData] = useState([]);
  const [pairData, setPairData] = useState([]);
  const [linksObject, setLinksObject] = useState([]);
  const [nodesObject, setNodesObject] = useState([]);
  const [path, setPath] = useState([]);
  const [showPath, setShowPath] = useState(false);
  const [nodeIdMap, setNodeIdMap] = useState({});
  const [animationRunning, setAnimationRunning] = useState(false);

  const toggleShowPath = () => {
    setShowPath(!showPath);
  }

  const fetchTickerData = async () => {
    try{
      const response = await axios.get('https://api.kraken.com/0/public/Ticker?');
      return response.data.result;

    } catch (error) {
      console.error("error fetching ticker data from Kraken", error)
      return null
    }
  }

  const fetchPairData = async () => {
    try{
      const response = await axios.get('https://api.kraken.com/0/public/AssetPairs?');
      return response.data.result;

    } catch (error) {
      console.error("error fetching ticker data from Kraken", error)
      return null
    }
  }

  const postCombinedData = async () => {

    const linkData = linksObject.map(link => {
      const newLink = {...link};
      newLink.source = {id: link.source.id, label: link.source.label, index: link.source.index};
      newLink.target = {id: link.target.id, label: link.target.label, index: link.target.index};
      
      return newLink;
    })

    const nodeData = nodesObject.map(node => {
      const newNode = {...node};

      delete newNode.x;
      delete newNode.y;
      delete newNode.vx;
      delete newNode.vy;

      return newNode;
    })

    const postData = [linkData, nodeData]
    try{
      // **UPDATE ENDPOINT WHEN USING/TESTING** 
      const response = await axios.post('https://arbitrage-backend-utji.onrender.com/process-graph', postData, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      const responsePath = response.data;
      const newPath = [];
      if (!responsePath){
        postCombinedData();
        return;
      } else {
          responsePath.forEach(val => {
          const toPush = Object.keys(nodeIdMap).find(key => nodeIdMap[key] === val);
          newPath.push(toPush)

        }); 
      }
        setPath(newPath);

     } catch(error) {
      console.error("error posting to backend", error);
    }
  }


  const createGraphData = () => {
    let nodes = [];
    let links = [];
    const nodesMap = {};
    let nodeID = 1;

    pairData.forEach(pair => {
      const node = pair.pairName[0];
      const destination = pair.pairName[1];
      
      //Won't add USD or EUR as a node
      if(node != "USD" && node != "EUR" && destination != "USD" && destination != "EUR"){
        if(!nodesMap[node]){
          nodesMap[node] = nodeID;
          nodes.push({id: nodeID, label: node})
          nodeID++;
        }
  
        if(!nodesMap[destination]){
          nodesMap[destination] = nodeID;
          nodes.push({id: nodeID, label: destination})
          nodeID++;
        }

      }
    });
    setNodeIdMap(nodesMap);

    pairData.forEach(pair => {
      //Won't add any links of nodes that weren't added to the nodeMap (i.e. won't add any links containing USD or EUR)
      if(nodesMap[pair.pairName[0]] && nodesMap[pair.pairName[1]]){
        const sourceId = nodesMap[pair.pairName[0]];
        const targetId = nodesMap[pair.pairName[1]];
        const jointName = pair.name;
        const edgeWeight = tickerData.find(ticker => ticker.name === jointName)?.lastPrice;
  
        // if it doesn't find the edgeweight it will return undefined, and this will not run
        if(edgeWeight){
          links.push({source: sourceId, target: targetId, weight: edgeWeight});
        }
      }
      
    });
    
    setLinksObject(links);
    setNodesObject(nodes);
  }

  const processData = async () => {
    try {
      // Will wait until both fetches are complete
      const [tickerJson, pairJson] = await Promise.all([fetchTickerData(), fetchPairData()]);

      const tickersArray = Object.entries(tickerJson).map(([name, info]) => ({
        name,
        lastPrice: info.c[0],
      }));
      setTickerData(tickersArray);

      const pairsArray = Object.entries(pairJson).map(([name, info]) => ({
        name,
        pairName: info.wsname.split('/'),
        //Removed reading of the base, pairName[0] will give base
      }));
      setPairData(pairsArray);
      

    } catch (error) {
      console.error("error processing data", error);
      return null;
    }
  }

  // Since processData() calls both fetches, recieves them, processes them, and calls the post function, it's the only function
  // we need to call in the useEffect. Empty dependency array => will run on render, if we want it to wait until a button is pressed or something
  // like that we'll need to update this.
  useEffect(() => {
    processData();
  }, []);

  useEffect(() => {
    if(tickerData.length > 0 && pairData.length > 0){
      createGraphData();
    }
  }, [tickerData, pairData]);

  useEffect(() => {
    console.log('animnation running: ', animationRunning);
    const postData = () => {
      if (linksObject.length > 0) {
        postCombinedData();
        // You can use the response here if needed
      }
    };
    if (showPath){
      postData();
    }
  }, [showPath]);

  return (
    <div className='page'>
      <div className='graph-container'>
            {(linksObject.length > 0 && nodesObject.length > 0) ? (
              
              <DisplayGraph nodes={nodesObject} links={linksObject} path={path} showPath={showPath} animationRunning={animationRunning} setAnimationRunning={setAnimationRunning}></DisplayGraph>

            ) : (
              <p>Loading...</p>
            )}

      </div>
      <br></br>
      <div>
        <button disabled={animationRunning} onClick={() => toggleShowPath()}>
          Find Optimal Path
        </button>
        {(showPath) ? (
          <button disabled={animationRunning} onClick={() => toggleShowPath()}>Reset</button>
        ) : (
          <></>
        )}
        {/* Return to Homepage button */}
        <Link to="/">
          <button>
            Return to Homepage
          </button>
        </Link>
      </div>
      <br></br>
      <div className='description'>
        The above graph data is pulled in real time from the Kraken API. Paths are generated in the backend by the model, using
        this graph instance as input. <br></br><br></br><b>Note 1:</b> Due to financial restraints the backend model is hosted on a free service that requires a spin-up time of around 10-30 seconds upon first use. Afterwards, the service will remain active until 15-minutes of inactivity. 
        <br></br><br></br><b>Note 2:</b> The model response and path-showing animation has been significantly slowed down to allow 
        you to visually see it being layed out. As mentioned in our results, the model is finding these paths in an average time of &lt;0.1 seconds. 
        <br></br><br></br><b>Note 3:</b> Not every path generated by the model will result in profitable arbitrage. However, due to the high speeds of our model, 
        unprofitable paths can be rejected, and a new path generated, without losing a time advantage.
      </div>
    </div>
  );
};

export default KrakenAPI;
