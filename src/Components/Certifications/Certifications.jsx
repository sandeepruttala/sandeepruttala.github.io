import React from 'react'
import '../../Global.css'
import './Certifications.css'
import Certificate from './Certificate'
function Certifications({certifications = [
    {
        certificate: "AWS Certified Cloud Practitioner",
        from: "AWS",
        link: "https://www.credly.com/badges/21895fbe-e1af-4865-96d5-3812c27fb4a4/public_url"
    },
    {
        certificate: "Preliminary English Test (PET)",
        from: "Cambridge",
        link: "https://drive.google.com/file/d/1IpB3Q4ysVOA8gr-cmcIfxppUBr7-S2AH/view?usp=drive_link"
    },
    {
        certificate: "Business English Certificate (BEC)",
        from: "Cambridge",
        link: "https://drive.google.com/file/d/1hpVJ9Jqjp32ANwGqIH-jqo2UqFYzyUlt/view?usp=drive_link"
    },
    {
        certificate: "Introduction to Internet of Things",
        from: "NPTEL",
        link: "https://archive.nptel.ac.in/content/noc/NOC23/SEM1/Ecertificates/106/noc23-cs51/Course/NPTEL23CS51S5317027104253773.jpg"
    },
    {
        certificate: "Leadership & Team Effectiveness",
        from: "NPTEL",
        link: "https://archive.nptel.ac.in/content/noc/NOC24/SEM1/Ecertificates/110/noc24-mg35/Course/NPTEL24MG35S95630343330691033.pdf"
    },
    {
        certificate: "E-Business",
        from: "NPTEL",
        link: "https://archive.nptel.ac.in/content/noc/NOC24/SEM1/Ecertificates/110/noc24-mg16/Course/NPTEL24MG16S15630082030691033.pdf"
    },
    
]}) {
  return (
    <div className="certifications">
        <h1>{"<Certifications />"}</h1>
        <div className="certificates">
            {certifications.map((certificate, index) => (
                <Certificate key={index} certificate={certificate} />
            ))}
        </div>
    </div>
  )
}

export default Certifications
