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
        {Services_Data.map((service, index) => {
          return (
            <div key={index} className="services-format">
              <h3>{service.s_no}</h3>
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <img
                  src={service.s_icon}
                  alt={service.s_name}
                  style={{ width: "30px", height: "30px" }}
                   className={`skill-icon icon-${service.s_name.toLowerCase()}`}
                />
                <h2>{service.s_name}</h2>
              </div>
              <p>{service.s_desc}</p>
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
