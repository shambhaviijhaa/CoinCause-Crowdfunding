// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter as Router } from 'react-router-dom';
// import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';

// import { StateContextProvider } from './context';
// import App from './App';
// import './index.css';

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//   <ThirdwebProvider activeChain={{chainId:80001,rpc: ["https://rpc.ankr.com/polygon_mumbai"]}}> 
//     <Router>
//       <StateContextProvider>
//         <App />
//       </StateContextProvider>
//     </Router>
//   </ThirdwebProvider> 
// )

import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import './index.css'

import { StateContextProvider } from "./context";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <ThirdwebProvider
      activeChain={{chainId:11155111,rpc: ["https://rpc.sepolia.org"]}}
    >
      <StateContextProvider>
        <App />
      </StateContextProvider>
    </ThirdwebProvider>
  </React.StrictMode>
);
