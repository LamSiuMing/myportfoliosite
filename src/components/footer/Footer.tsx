import React from "react";
import "./Footer.css";

const Footer = () => {
  var d = new Date(); 
  let year = d.getFullYear(); 

  return(
    <div className="bg-footer">
      <p className="footer-text">&copy; Copyright {year}, Lam Siu Ming</p>
    </div>
  )
}

export default Footer;