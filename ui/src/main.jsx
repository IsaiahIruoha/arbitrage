import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createHashRouter, RouterProvider} from 'react-router-dom'
import KrakenAPI from './KrakenAPI.jsx'

const router = createHashRouter([
  {
    path: "/kraken-api",
    element: <KrakenAPI />,
  },
  {
    path: "/",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
