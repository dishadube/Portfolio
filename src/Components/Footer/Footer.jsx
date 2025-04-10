import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import user_icon from "../../assets/user_icon.svg";

const Footer = () => {
  return (
    <div  className="footer">
      <div className="footer-top">
        <div className="footer-left">
          <div className="footer-brand">
          <img src={logo} alt="" />
          <p>I'm a Full Stack Devoloper</p>
        </div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          © 2025 Disha Dubey. All rights reserved.
        </p>
       
      </div>
    </div>
  );
};

export default Footer;
