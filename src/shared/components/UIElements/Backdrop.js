import React from "react";
import ReactDOM from "react-dom";
import "./BackDrop.css"

const Backdrop = ({ handleClick }) => {
  return ReactDOM.createPortal(
    <div className="backdrop" onClick={handleClick}></div>,
    document.getElementById("backdrop-hook")
  );
};

export default Backdrop;
