import React, { useState } from "react";
import "./App.css";
import Modal1 from "./Modal1";
import Modal2 from "./Modal2";
import Modal3 from "./Modal3";

function App() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  return (
    <div className="App">
      <div className="header">
        <div className="item1">
          <button
            onClick={() => {
              setIsOpen1(true);
            }}
          >
            + StyleMaster{" "}
          </button>
        </div>
        <div className="item1">
          <button
            onClick={() => {
              setIsOpen2(true);
            }}
          >
            + SizeMaster{" "}
          </button>
        </div>
        <div className="item1">
          <button
            onClick={() => {
              setIsOpen3(true);
            }}
          >
            + SKUmaster{" "}
          </button>
        </div>
      </div>
      <Modal1 open={isOpen1} onClose={() => setIsOpen1(false)}></Modal1>
      <Modal2 open={isOpen2} onClose={() => setIsOpen2(false)}></Modal2>
      <Modal3 open={isOpen3} onClose={() => setIsOpen3(false)}></Modal3>

      <div className="container1">
        <div className="row">
          <div className="product">product</div>
          <div className="product">product</div>
          <div className="product">product</div>
          <div className="product">product</div>
        </div>
        <div className="row">
          <div className="product">product</div>
          <div className="product">product</div>
          <div className="product">product</div>
          <div className="product">product</div>
        </div>
        <div className="row">
          <div className="product">product</div>
          <div className="product">product</div>
          <div className="product">product</div>
          <div className="product">product</div>
        </div>
      </div>
    </div>
  );
}

export default App;
