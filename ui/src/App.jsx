import React, { useState } from 'react';
import './App.css';

function App() {
  const [isPopupVisible, setIsPopupVisible] = useState(false); // State to track popup visibility

  // Function to toggle popup visibility
  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  return (
    <div className="container">

      <nav>
        <ul className="nav-links">
          <li className="upward"><a href="#">Home</a></li>
          <li className="upward"><a href="#implementation">Implementation</a></li>
          <li className="upward"><a href="#arbitrage">Arbitrage</a></li>
          <li className="upward"><a href="#methods">Methods</a></li>
        </ul>
      </nav>

      <div className="content-box">

        <div className="content">
          <div className="text">
            <h2>A Reinforcement Learning Approach to Finding Cryptocurrency Arbitrage Paths</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius turpis ante, nec varius nisi vehicula a. Suspendisse congue bibendum turpis, eget malesuada risus posuere quis. Nam condimentum libero vestibulum lacus cursus condimentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius turpis ante, nec varius nisi vehicula a. Suspendisse congue bibendum turpis, eget malesuada risus posuere quis. Nam condimentum libero vestibulum lacus cursus condimentum.</p>
            <div className="card">
                <button>
                  <a href="/kraken-test">Generate Optimal Path</a>
                </button>
            </div>
          </div>
          <div className="image">
            <img src="/assets/cryptorobot.jpg" alt="Your Image" className={`image ${isPopupVisible ? 'spin' : ''}`} />
          </div>
        </div>
      </div>

      <div className="about" id="implementation">
        <h2>Implementation</h2>
        <hr />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet purus bibendum, auctor lacus in, euismod dolor. Vivamus a consequat odio, vitae dictum nisl. Etiam ullamcorper mollis lacus eu dictum. Quisque eleifend, est a porttitor congue, lectus lorem imperdiet dui, vitae iaculis orci arcu quis leo. Sed at cursus ante. Ut arcu massa, finibus quis odio ut, dignissim cursus enim. Nulla tempor id lectus sed venenatis. Fusce semper neque suscipit nunc volutpat, vel vehicula ligula hendrerit. Pellentesque commodo justo odio, vel ultrices augue maximus ac. Duis eget orci at lorem mollis finibus. Donec vel enim arcu. Sed a neque nulla. Praesent congue quam non faucibus lacinia. Cras tristique sem risus, non laoreet arcu aliquam non. Morbi dictum maximus massa.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget justo lorem. Vivamus id aliquam risus. Integer et risus ligula. Nunc ac leo risus. Duis scelerisque erat sit amet rutrum posuere. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque eget porta ante. Nullam tempor consequat ex, ac auctor eros luctus viverra. Curabitur dui dui, volutpat quis tempus non, finibus sed nulla. Morbi pretium dolor lectus. Mauris bibendum laoreet dui, ac pulvinar dui cursus at. Maecenas quis ex elit. Ut ac dictum sem. Cras lacinia tempor est sollicitudin ullamcorper. Mauris sed nisi ut justo porta iaculis.

Nulla facilisi. Ut blandit scelerisque pellentesque. Nullam id egestas lectus. Curabitur tristique magna sapien, eget dictum risus dictum varius. Nulla faucibus urna ut nibh fermentum mattis. Phasellus molestie imperdiet nunc, id pellentesque nisl cursus sit amet. Nulla vitae hendrerit nibh. Proin faucibus lacus non porttitor lacinia. Sed sagittis laoreet felis, a posuere risus sollicitudin quis. Sed auctor vitae quam ac feugiat. Pellentesque sapien lacus, luctus id dolor at, malesuada molestie sapien. Mauris quis malesuada massa, ut sollicitudin erat.</p>
      </div>

      <div className="about" id="arbitrage">
        <h2>Arbitrage</h2>
        <hr />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet purus bibendum, auctor lacus in, euismod dolor. Vivamus a consequat odio, vitae dictum nisl. Etiam ullamcorper mollis lacus eu dictum. Quisque eleifend, est a porttitor congue, lectus lorem imperdiet dui, vitae iaculis orci arcu quis leo. Sed at cursus ante. Ut arcu massa, finibus quis odio ut, dignissim cursus enim. Nulla tempor id lectus sed venenatis. Fusce semper neque suscipit nunc volutpat, vel vehicula ligula hendrerit. Pellentesque commodo justo odio, vel ultrices augue maximus ac. Duis eget orci at lorem mollis finibus. Donec vel enim arcu. Sed a neque nulla. Praesent congue quam non faucibus lacinia. Cras tristique sem risus, non laoreet arcu aliquam non. Morbi dictum maximus massa.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget justo lorem. Vivamus id aliquam risus. Integer et risus ligula. Nunc ac leo risus. Duis scelerisque erat sit amet rutrum posuere. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque eget porta ante. Nullam tempor consequat ex, ac auctor eros luctus viverra. Curabitur dui dui, volutpat quis tempus non, finibus sed nulla. Morbi pretium dolor lectus. Mauris bibendum laoreet dui, ac pulvinar dui cursus at. Maecenas quis ex elit. Ut ac dictum sem. Cras lacinia tempor est sollicitudin ullamcorper. Mauris sed nisi ut justo porta iaculis.

Nulla facilisi. Ut blandit scelerisque pellentesque. Nullam id egestas lectus. Curabitur tristique magna sapien, eget dictum risus dictum varius. Nulla faucibus urna ut nibh fermentum mattis. Phasellus molestie imperdiet nunc, id pellentesque nisl cursus sit amet. Nulla vitae hendrerit nibh. Proin faucibus lacus non porttitor lacinia. Sed sagittis laoreet felis, a posuere risus sollicitudin quis. Sed auctor vitae quam ac feugiat. Pellentesque sapien lacus, luctus id dolor at, malesuada molestie sapien. Mauris quis malesuada massa, ut sollicitudin erat.</p>
      </div>

      <div className="about" id="methods">
        <h2>Methods</h2>
        <hr />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet purus bibendum, auctor lacus in, euismod dolor. Vivamus a consequat odio, vitae dictum nisl. Etiam ullamcorper mollis lacus eu dictum. Quisque eleifend, est a porttitor congue, lectus lorem imperdiet dui, vitae iaculis orci arcu quis leo. Sed at cursus ante. Ut arcu massa, finibus quis odio ut, dignissim cursus enim. Nulla tempor id lectus sed venenatis. Fusce semper neque suscipit nunc volutpat, vel vehicula ligula hendrerit. Pellentesque commodo justo odio, vel ultrices augue maximus ac. Duis eget orci at lorem mollis finibus. Donec vel enim arcu. Sed a neque nulla. Praesent congue quam non faucibus lacinia. Cras tristique sem risus, non laoreet arcu aliquam non. Morbi dictum maximus massa.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget justo lorem. Vivamus id aliquam risus. Integer et risus ligula. Nunc ac leo risus. Duis scelerisque erat sit amet rutrum posuere. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque eget porta ante. Nullam tempor consequat ex, ac auctor eros luctus viverra. Curabitur dui dui, volutpat quis tempus non, finibus sed nulla. Morbi pretium dolor lectus. Mauris bibendum laoreet dui, ac pulvinar dui cursus at. Maecenas quis ex elit. Ut ac dictum sem. Cras lacinia tempor est sollicitudin ullamcorper. Mauris sed nisi ut justo porta iaculis.

Nulla facilisi. Ut blandit scelerisque pellentesque. Nullam id egestas lectus. Curabitur tristique magna sapien, eget dictum risus dictum varius. Nulla faucibus urna ut nibh fermentum mattis. Phasellus molestie imperdiet nunc, id pellentesque nisl cursus sit amet. Nulla vitae hendrerit nibh. Proin faucibus lacus non porttitor lacinia. Sed sagittis laoreet felis, a posuere risus sollicitudin quis. Sed auctor vitae quam ac feugiat. Pellentesque sapien lacus, luctus id dolor at, malesuada molestie sapien. Mauris quis malesuada massa, ut sollicitudin erat.</p>
      </div>

      <div>
        <a
          href="https://www.overleaf.com/project/65c2dc3d38eab49cd8ba2af9"
          className="btn btn-more"
          target="_blank"
          >Learn More <i class="fas fa-chevron-right"></i></a>
      </div>

      {isPopupVisible && (
        <div className="popup visible">
        <h3>Authors</h3>
        <hr />
        <a href="https://www.linkedin.com/in/mitchell-sabbadini/">Mitchell Sabbadini</a>
        <a href="https://www.linkedin.com/in/armin-heirani-871141217/">Armin Heirani</a>
        <a href="https://www.linkedin.com/in/colin-gould15/">Colin Gould</a>
        <a href="https://www.linkedin.com/in/elliotthoburn/">Elliot Thoburn</a>
        <a href="https://www.linkedin.com/in/isaiahiruoha/">Isaiah Iruoha</a>
        <a href="https://www.linkedin.com/in/daryanfadavi/">Daryan Fadavi</a>
        <a href="https://www.linkedin.com/in/john-liu-1720b2266/">John Liu</a>
      </div>
      )}

      <div className="icon-background" onClick={togglePopup}>
        <svg className={`authors ${isPopupVisible ? 'rotate' : ''}`} fill="#000000" height="800px" width="800px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
        viewBox="0 0 964.07 964.07" xml:space="preserve">
      <g>
        <path d="M850.662,877.56c-0.77,0.137-4.372,0.782-10.226,1.831c-230.868,41.379-273.337,48.484-278.103,49.037
          c-11.37,1.319-19.864,0.651-25.976-2.042c-3.818-1.682-5.886-3.724-6.438-4.623c0.268-1.597,2.299-5.405,3.539-7.73
          c1.207-2.263,2.574-4.826,3.772-7.558c7.945-18.13,2.386-36.521-14.51-47.999c-12.599-8.557-29.304-12.03-49.666-10.325
          c-12.155,1.019-225.218,36.738-342.253,56.437l-57.445,45.175c133.968-22.612,389.193-65.433,402.622-66.735
          c11.996-1.007,21.355,0.517,27.074,4.4c3.321,2.257,2.994,3.003,2.12,4.997c-0.656,1.497-1.599,3.264-2.596,5.135
          c-3.835,7.189-9.087,17.034-7.348,29.229c1.907,13.374,11.753,24.901,27.014,31.626c8.58,3.78,18.427,5.654,29.846,5.654
          c4.508,0,9.261-0.292,14.276-0.874c9.183-1.065,103.471-17.67,280.244-49.354c5.821-1.043,9.403-1.686,10.169-1.821
          c9.516-1.688,15.861-10.772,14.172-20.289S860.183,875.87,850.662,877.56z"/>
        <path d="M231.14,707.501L82.479,863.005c-16.373,17.127-27.906,38.294-33.419,61.338l211.087-166.001
          c66.081,29.303,118.866,38.637,159.32,38.637c71.073,0,104.065-28.826,104.065-28.826c-66.164-34.43-75.592-98.686-75.592-98.686
          c50.675,21.424,156.235,46.678,156.235,46.678c140.186-93.563,213.45-296.138,213.45-296.138
          c-14.515,3.99-28.395,5.652-41.475,5.652c-65.795,0-111-42.13-111-42.13l183.144-39.885C909.186,218.71,915.01,0,915.01,0
          L358.176,495.258C295.116,551.344,250.776,625.424,231.14,707.501z"/>
        </g>
        </svg>
      </div>
      
    </div>
  );
}

export default App;
