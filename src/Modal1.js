import React from "react";
import "./Modal1.css";

function Modal1({ children, open, onClose }) {
  if (!open) return null;
  return (
    <>
      <div className="overlay" />
      <div className="modal">
        <div className="hea">
          <h1>Add StyleMaster</h1>
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
            <label htmlFor="">StyleCode</label>
            <input type="text" />
          </div>

          <div className="detail">
            <label htmlFor="">Name</label>
            <input type="text" />
          </div>

          <div className="detail">
            <label htmlFor="">Type</label>
            <input type="text" />
          </div>

          <div className="detail">
            <label htmlFor="">hasSize</label>
            <input type="text" />
          </div>

          <div className="detail">
            <label htmlFor="">Color</label>
            <input type="text" />
          </div>
        </div>
        {children}
      </div>
    </>
  );
}

export default Modal1;
