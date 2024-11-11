import React from 'react'
import '../../Global.css'
import './Projects.css'
import ProjectContainer from './ProjectContainer'
import blend from '../../Assets/Blend.png'
import amuse from '../../Assets/amuse.png'
import easyBill from '../../Assets/easybill.png'
import surveysystem from '../../Assets/surveysystem.png'
import recipeshare from '../../Assets/recipe.png'



function Projects(
    {
        projects = [
        {
            title: "BLEND",
            description: "A Blockchain based platform for the Educational Intitiutions.",
            technologies: ["Solidity", "Django", "IPFS", "HTML", "CSS", "JavaScript"],
            link: "https://github.com/andrew2719/blend_nft",
            image: blend
        },
        {
            title: "Amuse",
            description: "An Entertainment-Blog Website for the users to read and write blogs.",
            technologies: ["React", "Node.js", "Express", "MongoDB"],
            link: "https://github.com/sandeepruttala/entertainment-blog",
            image: amuse
        },
        {
            title: "Easy-Bill",
            description: "A Restaurant Management System for the owners to manage their restaurant.",
            technologies: ["Django", "Channels", "SQLite", "HTML", "CSS", "JavaScript"],
            link: "https://github.com",
            image: easyBill
        },
        {
          title: "Survey System",
          description: "A Survey System for the users to create and take surveys.",
          technologies: ["Spring Boot", "MySQL", "HTML", "CSS", "JavaScript"],
          link: "https://github.com/sandeepruttala/survey-system-springboot",
          image: surveysystem
      },
      {
        title: "Recipe Share",
        description: "A Recipe Sharing Website for the users to share their recipes.",
        technologies: ["Django", "SQLite", "HTML", "CSS", "JavaScript"],
        link: "https://github.com",
        image: recipeshare
    }
      ]
    }){
  return (
    <div className="projects">
      <h1>{"< Projects />"}</h1>
        <div className="projects-description">
            {projects.map((project, index) => (
            <ProjectContainer key={index} project={project} />
            ))}
        </div>
    </div>
  )
}

export default Projects
