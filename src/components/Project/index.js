import { useState, useEffect } from "react";
import Loader from "react-loaders";
import AnimatedLetter from "../AnimatedLetters";
import "./index.scss";
import data from "../../data";
import ShapesProfile from "../../assets/images/SHAPESPROFILE.png";

const Project = () => {
  const projText = [
    "P",
    "e",
    "r",
    "s",
    "o",
    "n",
    "a",
    "l",
    " ",
    "P",
    "r",
    "o",
    "j",
    "e",
    "c",
    "t",
    "s",
  ];
  const [letterClass, setLetterClass] = useState("text-animate");
  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  });
  return (
    <>
      <div className="container project-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetter
              letterClass={letterClass}
              strArray={projText}
              idx={15}
            />
          </h1>
          <div className="gd-bar" />
          <p>
            Hello, this is my personal projects that I made while I'm practicing
            and teaching my self to create a project or an appliaction using
            ReactJS. I also use AngularJS back then when I got an Internship on
            Toro Cloud Company
          </p>
          <div className="gd-bar" />
          <p align="LEFT">
            Be productive everyday person everyday and let coding be your
            comfort zone. I'm still practicing my skills on coding because
            Technology is fast on growing everyday. You can view my project
            files and get some knowledge to it.
          </p>
        </div>
        <div className="projects-container">
          <div className="project-banner">
            <div className="project-banner_left">
              <div className="project-banner_container">
                <div className="project-banner_col">
                  <h1>Let's explore my personal projects</h1>
                  <h2>Let's build ReactJS Application / Website together</h2>
                </div>
                <div className="project-banner_row">
                  <div>
                    <h3>
                      Highly skilled at progressive enhancement, design website
                      & User Interfaces
                    </h3>
                  </div>
                  <div>
                    <h3>
                      Over a decade of experience building products for clients
                      across several countries.
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="project-banner_right"></div>
            <img src={ShapesProfile} alt="" />
          </div>
          {data.map((cards) => (
            <div key={cards.id} className="cards">
              <div className="img-container">
                <img src={cards.img} alt="" />
              </div>
              <div className="text-container">
                <h1>{cards.tittle}</h1>
                <p>{cards.desc}</p>
              </div>
              <div className="button-container">
                <button className="flat-button-project">
                  Code
                  <i className="fa fa-github-square" aria-hidden="true"></i>
                </button>
                <button className="flat-button-project">
                  Visit <i className="fa fa-eye" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};
export default Project;
