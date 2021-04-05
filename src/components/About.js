import React from "react";
import about from "../images/Ofc_pic.png";
const About = () => {
  const [header] = React.useState({
    subHeader: "About Me",
    text:
      "I am the one who always motivate and tend to extend my boundaries, which impacts in greater results towards my goal.",
  });
  const [state] = React.useState([
    { id: 1, title: "Name:", text: "Majoju Krishna Sai Prahlad" },
    { id: 2, title: "Email:", text: "krishnprahladm@gmail.com" },
    { id: 3, title: "Phone:", text: "9676125128" },
    { id: 4, title: "Linkedin", text: "Majoju Krishna Prahlad" },
  ]);
  return (
    <div id="about" className="about">
      <div className="container">
        <div className="common">
          <h1 className="mainHeader">{header.subHeader}</h1>
          <p className="mainContent">{header.text}</p>
          <div className="commonBorder"></div>
        </div>
        <div className="row  h-650 alignCenter">
          <div className="col-6">
            <div className="about__img">
              <img src={about} alt="man" />
            </div>
          </div>
          <div className="col-6">
            <div className="about__info">
              <h1>Hi There</h1>
              <div className="about__info-p1">
               I am a 20-year-old tech enthusiast and tend to take risks which may challenge my ability of problem solving. I recognize myself as a role-play leader/ team member. Aiming to work with a reputed organization to enhance my application development skills. 
              </div>
              <div className="about__info-p2">
                I am currently pursuing my undergrad degree in CVR College Of Engineering in the stream of Computer Science and Technology.
              </div>
              <div className="info__contacts">
                <div className="row">
                  {state.map((info) => (
                    <div className="col-6">
                      <strong>{info.title}</strong>
                      <p>{info.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
