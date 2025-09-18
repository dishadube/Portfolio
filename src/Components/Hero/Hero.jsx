import React from "react";
import "./Hero.css";
import hero_image from "../../assets/hero_image.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={hero_image} alt="" />
      <h1>
        <span>I'm Disha Dubey</span> ,
        <span className="full-stack-developer">Full Stack Developer</span>
      </h1>
      <p>
        I am a skilled Full Stack Developer with expertise in designing and
        developing scalable, high-performance web applications. Passionate about
        problem-solving and innovation, I strive to create seamless,
        user-centric digital solutions that enhance functionality and user
        experience.
      </p>

      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <a className="hero-resume" href="\Disha_Dubey_Resume.pdf">
          My Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;