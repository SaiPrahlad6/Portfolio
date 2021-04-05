import React from 'react';
import Icon2 from '../images/prahlad_icon.jpg';

import { FaAlignJustify } from "react-icons/fa";

const Nav = () => {
  const [state, setState] = React.useState(true);
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__container">
          <ul className="navbar__left">
            <div className="navbar__left-logo">
              <img src={Icon2} alt="logo" />
            </div>
          </ul>
          {state ? (
            <ul className="navbar__right">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="https://drive.google.com/file/d/179iHT7C2sQrTFYK6C2lUPlQsI_4WNNX8/view?usp=sharing">Resume</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="toggle" onClick={() => setState(!state)}>
        <FaAlignJustify />
      </div>
    </nav>
  );
};

export default Nav;
