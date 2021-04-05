import React from "react";
import {
  RiHospitalFill,
  RiShoppingCartFill,
  RiRunFill,
  
} from "react-icons/ri";
import {
    FcPlus
} from "react-icons/fc";
import {
    HiChatAlt
} from "react-icons/hi";
import {
    MdTraffic
} from "react-icons/md";
const Services = () => {
  const [header] = React.useState({
    mainHeader: "PROJECTS",
    subHeading: "My PROJECTS",
    text:
      "I am a tech-savvy and enthusiastic to explore new technologies which are the main key role players of solving critical issues with technology in the society",
  });
  const [state] = React.useState([
    {
      id: 1,
      icon: <RiHospitalFill className="commonIcons" />,
      heading: "VIRTUAL-DR-KIT",
      text:
        "Created a flutter medical application as part of NewGen-IEDC Department with best accuracy in ML.",
    },
    {
      id: 2,
      icon: <RiShoppingCartFill className="commonIcons" />,
      heading: "EDIBLE-STORE",
      text:
        "Created an Android Application with springboot,My-SQL,JWT security as back-end.",
    },
    {
      id: 3,
      icon: <RiRunFill className="commonIcons" />,
      heading: "GYM",
      text:
        "Created an interesting game using Pygame module, with attractive UI window as part of BootCamp.",
    },
    {
      id: 4,
      icon: <FcPlus className="commonIcons" />,
      heading: "KIDNEY DISEASE DETECTION",
      text:
        "Created AI Models which deals with CSV data, obtained different accuracy values with respect to each algorithm.",
    },
    {
      id: 5,
      icon: <MdTraffic className="commonIcons" />,
      heading: "LANE-LINE DETECTION",
      text:
        "Detection of lanes in a video using OpenCv cascade Classifier with highlighting.",
    },
    {
      id: 6,
      icon: <HiChatAlt className="commonIcons" />,
      heading: "CHATBOT",
      text:
        "Created chatbot using Tkinter module in python, an interactive chat window with predefined questions.",
    },
  ]);
  return (
    <div className="services" id="projects">
      <div className="container">
        <div className="services__header">
          <div className="common">
            <h3 className="heading">{header.mainHeader}</h3>
            <h1 className="mainHeader">{header.subHeading}</h1>
            <p className="mainContent">{header.text}</p>
            <div className="commonBorder"></div>
          </div>

          <div className="row bgMain">
            {state.map((info) => (
              <div className="col-4 bgMain">
                <div className="services__box">
                  {info.icon}
                  <div className="services__box-header">{info.heading}</div>
                  <div className="services__box-p">{info.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
