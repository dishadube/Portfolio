import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-left">
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          © 2025 Disha Dubey. All rights reserved.
        </p>
        <div className="footer-social-icons">
          <a href="https://github.com/dishadube" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} />
          </a>
          <a href="https://www.linkedin.com/in/disha-dubey-203316332?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
          <a href="https://wa.me/918446368201" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={30} />
          </a>
          <a href="https://instagram.com/disha_dubey_1203" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;