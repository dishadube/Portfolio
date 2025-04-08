import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import user_icon from "../../assets/user_icon.svg";

const Footer = () => {
  return (
    <div  className="footer">
      <div className="footer-top">
        <div className="footer-left">
          <img src={logo} alt="" />
          <p>I'm a Full Stack Devoloper</p>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          © 2025 Disha Dubey. All rights reserved.
        </p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
