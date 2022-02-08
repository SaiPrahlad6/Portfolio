import React from 'react'
import Prahlad from '../images/port_size.png'
import {
  FaInstagram,
 
} from "react-icons/fa";
import {
ImGithub
} from "react-icons/im";
import {
  GrLinkedin
} from "react-icons/gr";
import {
  FiTwitter
} from "react-icons/fi";
import {
  FcGoogle
} from "react-icons/fc";
const Banner = () => {
     const [state] = React.useState({
    title: "I am  Majoju Krishna Sai Prahlad",
    text:
      "I am an aspiring Data Scientist with experience in SQL, Statistics and Algorithms​",
    image: {Prahlad},
  });
    return (
        <header id="home" className="header">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="header__content">
                            <div className="header__section">
                            <ul className="header__ul">
                                <li>
                    <a href="https://drive.google.com/file/d/179iHT7C2sQrTFYK6C2lUPlQsI_4WNNX8/view?usp=sharing"><ImGithub className="headerIcon" /></a>
                  </li>
                 <li>
                    <a href="https://developers.google.com/profile/u/102490932243287693949"><FcGoogle className="headerIcon" /></a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/majoju-krishna-prahlad-0808901b2/"><GrLinkedin className="headerIcon" /></a>
                  </li>
                  <li>
                    <a href="https://twitter.com/Prahlad92036659"><FiTwitter className="headerIcon" /></a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/prahladkrish/"><FaInstagram className="headerIcon" /></a>
                  </li>
                </ul>
                <h1>{state.title}</h1>
                <p>{state.text}</p>
                <div className="header__buttons">
                  <a href="https://drive.google.com/file/d/150UH6KeR5jp7O6XWhsAtFML7kXGn6jsw/view?usp=sharing" className="btn btn-outline">
                    Resume
                  </a>
                  &nbsp;&nbsp;&nbsp;
                  
                
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="banner__img">
              <img src={Prahlad} alt="man" />
            </div>
                    </div>
                </div>
           </div>
        </header>
    )
}

export default Banner
