import React from "react";
import "../../Global.css";
import "./Skills.css";
import SkillContainer from "./SkillContainer";

function Skills({
  programming_languages = ["Java", "Python", "C", "C++"],
  databases = ["MySQL", "MongoDB", "SQLite"],
  web_technologies = ["HTML", "CSS", "React", "Node.js", "Express"],
  frameworks = ["Django", "Spring Boot", "Hibernate"],
  tools = ["Git", "VS Code", "Postman"],
  cloud = ["AWS"]
}) {
  return (
    <div className="skills">
      <h1>{`<Skills />`}</h1>
      <div className="skills-description">
      <SkillContainer
        title="Programming Languages"
        skills={programming_languages}
      />
        <SkillContainer title="Databases" skills={databases} />
        <SkillContainer title="Web Technologies" skills={web_technologies} />
        <SkillContainer title="Frameworks" skills={frameworks} />
        <SkillContainer title="Tools" skills={tools} />
        <SkillContainer title="Cloud" skills={cloud} />
    </div>
    </div>
  );
}

export default Skills;
