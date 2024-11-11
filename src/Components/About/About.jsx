import React from "react";
import "../../Global.css";
import "./About.css";
import Education from "./Education";
import Interests from "./Interests";
import Hobbies from "./Hobbies";

function About() {
  return (
    <div className="about">
      <h1>{"<About />"}</h1>
      <div className="about-description">
        <Education />
        <Interests interests={["Web Development", "Cloud Computing", "Database Management", "Artificial Intelligence", "Machine Learning", "Cyber Security"]} />
        <Hobbies hobbies={["Designing", "Photography", "Editing", "Gaming", "Reading", "Listening to Music"]} />
    </div>
    </div>
  );
}

export default About;
