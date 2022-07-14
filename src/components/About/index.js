import "./index.scss";
import AnimatedLetter from "../AnimatedLetters";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import Loader from "react-loaders";
import Profile from ".././../assets/images/Profile.png";

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const [classHidden, setClassHidden] = useState("cubespinner");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  });
  useEffect(() => {
    setTimeout(() => {
      setClassHidden("cubespinner-hidden");
    }, 6000);
  });

  const [classList, setClassList] = useState("menu-hidden");
  // const [isToggle, setIsToggle] = useState(false);

  setTimeout(() => {
    setClassList("menu");
  }, 6500);

  const circularButton = () => {
    // setIsToggle(!isToggle);
    // console.log(isToggle);
    classList === "menu" ? setClassList("menu active") : setClassList("menu");
  };
  const iZero =
    '<li style="--i: 0"><i style="color:#333;" class="fa fa-github-square" aria-hidden="true"></i></li>';
  const iOne =
    '<li style="--i: 1"><i style="color:#1A74ED;" class="fa fa-bitbucket" aria-hidden="true"></i></li>';
  const iTwo =
    '<li style="--i: 2"><i style="color:#0072b1 ;" class="fa fa-linkedin-square" aria-hidden="true"></i></li>';
  const iThree =
    '<li style="--i: 3"><i style="color:#F1502F;" class="fa fa-git" aria-hidden="true"></i></li>';
  const iFour =
    '<li style="--i: 4"><i style="color:#FF5700;"class="fa fa-reddit" aria-hidden="true"></i></li>';
  const iFive =
    '<li style="--i: 5"><i style="color:#80c660;" class="fa fa-android" aria-hidden="true"></i></li>';
  const iSix =
    '<li style="--i: 6"><i style="color:#ea4c89;" class="fa fa-dribbble" aria-hidden="true"></i></li>';
  const iSeven =
    '<li style="--i: 7"><i style="color:#66c0f4;" class="fa fa-steam-square" aria-hidden="true"></i></li>';

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetter
              letterClass={letterClass}
              strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
              idx={15}
            />
          </h1>
          <div className="gd-bar" />
          <p>
            I'm very ambitious front-end developer looking for a role in
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <div className="gd-bar" />
          <p align="LEFT">
            I'm quietly confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
          <div className="gd-bar" />
          <p>
            If I need to define myself in one sentence that would be a family
            person, friendly neighborhood,a sports fanatic, photography
            enthusiast, and tech-obsessed!
          </p>
        </div>
        <div className="stage-cube-cont">
          <div className={classHidden}>
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
          <div className={classList}>
            <div className="toggle" onClick={circularButton}>
              <img src={Profile} alt="" />
            </div>
            <div
              className="div"
              dangerouslySetInnerHTML={{ __html: iZero }}
            ></div>
            <div
              className="div"
              dangerouslySetInnerHTML={{ __html: iOne }}
            ></div>
            <div
              className="div"
              dangerouslySetInnerHTML={{ __html: iTwo }}
            ></div>
            <div
              className="div"
              dangerouslySetInnerHTML={{ __html: iThree }}
            ></div>
            <div
              className="div"
              dangerouslySetInnerHTML={{ __html: iFour }}
            ></div>
            <div
              className="div"
              dangerouslySetInnerHTML={{ __html: iFive }}
            ></div>
            <div
              className="div"
              dangerouslySetInnerHTML={{ __html: iSix }}
            ></div>
            <div
              className="div"
              dangerouslySetInnerHTML={{ __html: iSeven }}
            ></div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default About;
