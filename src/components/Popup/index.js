import React from "react";
import "./styles.css";

const Popup = ({ title, body, onClose }) => {
  return (
    <div className="popup">
      <button className="popup__close" onClick={onClose}>
        X
      </button>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
};
export default Popup;
