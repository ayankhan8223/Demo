import React from "react";
import "./Modal2.css";

function Modal2({ children, open, onClose }) {
  if (!open) return null;
  return (
    <>
      <div className="overlay" />
      <div className="modal">
        <div className="hea">
          <h1>SizeMaster</h1>
          <button onClick={onClose} className="closing">
            X
          </button>
        </div>
        <div className="container">
          <div className="detail">
            <label htmlFor="">ClientID</label>
            <input type="text" />
          </div>

          <div className="detail">
            <label htmlFor="">SizeName</label>
            <input type="text" />
          </div>

          <div className="detail">
            <label htmlFor="">ClientSizeCode</label>
            <input type="text" />
          </div>

          <div className="detail">
            <label htmlFor="">Order</label>
            <input type="text" />
          </div>

          <div className="detail">
            <label htmlFor="">Created</label>
            <input type="text" />
          </div>

          <div className="detail">
            <label htmlFor="">Updated</label>
            <input type="text" />
          </div>
        </div>
        {children}
      </div>
    </>
  );
}

export default Modal2;
