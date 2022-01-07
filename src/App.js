import React, { useEffect, useState } from "react";
import { ASSET_URL } from "./constants";
import logo from "./static/images/logo.png";
import "./static/styles/App.css";
import { iframeResizer } from "iframe-resizer";


const initialStateCollectionName = "realtok-drop-1";

export function App() {
  const [collectionName, setCollectionName] = useState(
    initialStateCollectionName
  );
  useEffect(() => {
    iframeResizer({ log: false }, "#opensea-iframe");
  }, []);

  const onClick = (collectionName) => {
    setCollectionName(collectionName);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h4>Realtok</h4>
        </div>
        <div className="App-header__drops">
          <a onClick={() => onClick("realtok-drop-1")}>
            Drop 1: Buildings
          </a>
          <a onClick={() => onClick("realtok-drop-2")}>
            Drop 2: Buildings
          </a>
        </div>
      </header>

      <iframe
        id="opensea-iframe"
        title="Embedded OpenSea Marketplace"
        src={ASSET_URL(collectionName)}
        width="100%"
        height="100%"
        frameBorder="0"
      ></iframe>
    </div>
  );
}
