import React from "react";
import "./Avatar.css";

const Avatar = props => (
  <div
    tabIndex="0"
    onClick={props.onClick}
    onKeyDown={props.onKeyDown}
    className={`avatar-container ${props.className || ""}`}
  >
    <img src={props.avatar.src} alt={props.avatar.label} />
    <div className="overlay" />
  </div>
);

export default Avatar;
