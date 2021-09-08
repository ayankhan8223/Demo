import React from "react";
import "./Modal3.css";

function Modal3({ children, open, onClose }) {
  if (!open) return null;
  return (
    <>
      <div className="overlay" />
      <div className="modal">
        <div className="hea">
          <h1>Add SKUmaster</h1>
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
            <label htmlFor="">SKU</label>
            <input type="text" />
          </div>

          <div className="detail">
            <label htmlFor="">Sales</label>
            <input type="text" />
          </div>

          <div className="detail">
            <label htmlFor="">Inventory</label>
            <input type="text" />
          </div>

          <div className="detail">
            <label htmlFor="">virtual_inventory</label>
            <input type="text" />
          </div>

          <div className="detail">
            <label htmlFor="">OPT</label>
            <input type="text" />
          </div>
        </div>
        {children}
      </div>
    </>
  );
}

export default Modal3;
