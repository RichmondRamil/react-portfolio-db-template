import AnimatedLetter from "../AnimatedLetters";
import { useState, useEffect } from "react";
import "./index.scss";

import HTML from "../../assets/images/html.png";
import CSS from "../../assets/images/css-3.png";
import JS from "../../assets/images/java-script.png";
import BStrap from "../../assets/images/bootstrap.png";
import AngularJS from "../../assets/images/logo4.png";
import ReactJS from "../../assets/images/physics.png";
import { Link, Outlet } from "react-router-dom";

const tech = [
  "T",
  "e",
  "c",
  "h",
  "n",
  "o",
  "l",
  "o",
  "g",
  "y",
  " ",
  "t",
  "h",
  "a",
  "t",
  " ",
  "I",
  " ",
  "u",
  "s",
  "e",
];
const Tips = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  });
  return (
    <div className="container tips-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetter letterClass={letterClass} strArray={tech} idx={15} />
        </h1>
        <div className="languages-container">
          <div className="language-container_box">
            <Link to="/tips/tips/html">
              <img src={HTML} alt="html-logo" />
            </Link>
          </div>
          <div className="language-container_box">
            <Link to="/tips/tips/css">
              <img src={CSS} alt="css-logo" />
            </Link>
          </div>
          <div className="language-container_box">
            <Link to="/tips/tips/javascript">
              <img src={JS} alt="js-logo" />
            </Link>
          </div>
          <div className="language-container_box">
            <Link to="/tips/tips/bootstrap">
              <img src={BStrap} alt="bootstrap-logo" />
            </Link>
          </div>
          <div className="language-container_box">
            <Link to="/tips/tips/reactjs">
              <img src={ReactJS} alt="react-logo" />
            </Link>
          </div>
          <div className="language-container_box">
            <Link to="/tips/tips/angularjs">
              <img src={AngularJS} alt="angular-logo" />
            </Link>
          </div>
        </div>
      </div>
      <div className="container-outlet">
        <Outlet />
      </div>
    </div>
  );
};
export default Tips;
