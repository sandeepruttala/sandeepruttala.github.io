import React from 'react'
import "../../Global.css";
import "./Education.css";
import Timeline from "../Timeline/Timeline";

function Education() {
  return (
    <div className="education">
      <h2>{"<Education />"}</h2>
        <Timeline events={[
            {
            date: "2021-2025",
            title: "B.Tech. in Computer Science",
            description: "Vignan University, Vadlamudi"
            },
            {
            date: "2019 - 2021",
            title: "Intermediate, MPC",
            description: "Sri Chaitanya Junior College, Vijayawada"
            },
            {
            date: "2019",
            title: "High School, SSC",
            description: "Dr. KKR Gowtham, Gudivada"
            }
        ]} />
    </div>
  )
}

export default Education
