import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/about_profile_img.png";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me </h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am a passionate full stack developer with a strong foundation in
              both front-end and back-end technologies.{" "}
            </p>
            <p>
              With expertise in React, Node.js, and various databases, I have
              successfully built and maintained dynamic web applications.
            </p>
            <p>
              I am dedicated to creating seamless user experiences and is always
              eager to learn new technologies to enhance her skill set.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p> <hr style={{ width: "50%" }} />{" "}
            </div>
            <div className="about-skill">
              <p>React JS</p> <hr style={{ width: "70%" }} />{" "}
            </div>
            <div className="about-skill">
              <p>JavaScript</p> <hr style={{ width: "60%" }} />{" "}
            </div>
            <div className="about-skill">
              <p>BootStrap</p> <hr style={{ width: "70%" }} />{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
