import React from "react";
import { DiCodeBadge } from "react-icons/di";
import { SiGooglescholar } from "react-icons/si";
import { GrGroup } from "react-icons/gr";
const Prices = () => {
  const [header] = React.useState({
    mainHeader: "SKILLS",
    subHeading: "KNOW MORE ABOUT ME",
  });
  const [state] = React.useState([
    {
      id: 1,
      icon:<DiCodeBadge className="commonIcons"/>,
      heading: "AREAS OF EXPERTISE",
      msg1: "Programming:C,C++,Java,Python3,Kotlin,Dart",
      msg2: "Databases:SQL,Firebase,MongoDB,MySQL",
      msg3: "Tools:Android Studio,VS Code,Docker,Git,Jupyter",
      msg4: "Web:HTML5,CSS3,JS,REST API,MERN",
      msg5: "Frameworks:Tensorflow 2.0,OpenCv,Flutter,Springboot,Dialogflow,AWS Cloud9,Google Cloud Platform",
    },
    {
        id: 2,
        icon:<SiGooglescholar className="commonIcons"/>,
      heading: "EDUCATIONAL HISTORY",
      msg1: "B.Tech CSE,CVRCE",
      msg2: "3rd year UG, 8.55 CGPA",
      msg3: "Certified in C, Python3 From NPTEL",
      msg4: "Certified in DL, Tensroflow from Coursera",
        msg5: "Achieved 92% in Python Quiz in SNIST,Succesfully completed Cloud Engineering Track in 30 Days of Google CLoud Contest",
    },
    {
        id: 3,
        icon:<GrGroup className="commonIcons"/>,
      heading: "RESPONSIBILITIES HELD",
      msg1: "Member of Android Development Team,DSC CVR",
      msg2: "Succesfully worked as Android Facilitator for Google Android Study jams",
      msg3: "Student Lead at NewGen-IEDC Project",
      msg4: "Hostel Network-Co-ordinator at CVRCE",
      msg5: "Worked hand-in-hand for every program conducted by DSC CVR 2020",
    },
  ]);
  return (
    <div id="skills" className="prices">
      <div className="container">
        <div className="common">
          <h3 className="heading">{header.mainHeader}</h3>
          <h1 className="mainHeader">{header.subHeading}</h1>
          <div className="commonBorder"></div>
        </div>
        <div className="row">
          {state.map((prices) => (
            <div className="col-4" key={prices.id}>
              <div className="price">
                      <div className="priceHeading">{prices.heading}     
                      </div>
                    
                <ul>
                  <li><p>{prices.msg1}</p></li>
                  <li><p>{prices.msg2}</p></li>
                  <li><p>{prices.msg3}</p></li>
                  <li><p>{prices.msg4}</p></li>
                  <li><p>{prices.msg5}</p></li>
                </ul>
                <div className="price__btn">
                  <a href="https://saiprahlad6.github.io/" className="btn btn-outline">
                    Live Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Prices;
