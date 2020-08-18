import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer className="footer">
      <span>&#169;Copyright Joe Davis { new Date().getFullYear() }</span>
    </footer>
  );
}

export default Footer;