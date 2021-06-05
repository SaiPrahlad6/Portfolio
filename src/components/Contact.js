import React from "react";
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
import Icon2 from '../images/prahlad_icon.jpg'
const Contact = () => { 
  return (
    <div id="contact" className="contact">
      <div className="container">
        <div className="contactSection">
          <div className="row justifyConter">
            <div className="col-6">
              <div className="contactSection-logo">
                <img src={Icon2} alt="" />
              </div>
              <p>
                I,Majoju Krishna Sai Prahlad hereby declare that the above mentioned information expresses my behavioural qualities as well as my loyalty towards my organisation and work ethics.
              </p>
              <ul className="contactCircles">
                <li>
                                  <a style={{ color: "#fff" }} href="https://drive.google.com/file/d/179iHT7C2sQrTFYK6C2lUPlQsI_4WNNX8/view?usp=sharing"><ImGithub className="contactIcon" /></a>
                </li>
                 <li>
                    <a href="https://developers.google.com/profile/u/102490932243287693949"><FcGoogle className="headerIcon" /></a>
                  </li>
                <li>
                  <a style={{ color: "#fff" }} href="https://www.linkedin.com/in/majoju-krishna-prahlad-0808901b2/"><GrLinkedin className="contactIcon" /></a>
                </li>
                <li>
                   <a style={{ color: "#fff" }} href="https://twitter.com/Prahlad92036659"><FiTwitter className="contactIcon" /></a>
                </li>
                <li>
                  <a style={{ color: "#fff" }} href="https://www.instagram.com/prahladkrish/"><FaInstagram className="contactIcon" /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
