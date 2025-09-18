import React from "react";
import "./Skills.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import Skills_Data from "../../assets/skills_data";
import arrow_icon from "../../assets/arrow_icon.svg";

const Skills = () => {
  return (
    <div id="services" className="services">
      <div className="services-title">
        <h1>Skills</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="services-container">
        {Skills_Data.map((skills, index) => {
          return (
            <div key={index} className="services-format">
              <h3>{skills.s_no}</h3>
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <img
                  src={skills.s_icon}
                  alt={skills.s_name}
                  style={{ width: "30px", height: "30px" }}
                   className={`skill-icon icon-${skills.s_name.toLowerCase()}`}
                />
                <h2>{skills.s_name}</h2>
              </div>
              <p>{skills.s_desc}</p>
              <div className="services-readmore">
                <p>Read More</p>
                <img src={arrow_icon} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
