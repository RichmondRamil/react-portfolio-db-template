import { useState, useEffect } from "react";
import AnimatedLetter from "../AnimatedLetters";
import "./index.scss";
import Loader from "react-loaders";
import TagCloud from "TagCloud";

const Tags = [
  "HTML5",
  "CSS3",
  "ANGULARJS",
  "REACT JS",
  "BOOTSTRAP",
  "TAILWIND",
  "MATERIAL UI",
  "JSON",
  "APIs",
  "GIT",
  "FIGMA",
  "UI/UX",
  "GSAP",
  "PHP",
  "MYSQL",
  "NODE",
  "JAVA",
  "SASS",
  "AXD",
];
const skillsArr = [
  "S",
  "k",
  "i",
  "l",
  "l",
  "s",
  " ",
  "&",
  " ",
  "E",
  "x",
  "p",
  "e",
  "r",
  "i",
  "e",
  "n",
  "c",
  "e",
  "s",
];
const Skills = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  TagCloud(".content", Tags, {
    radius: 300,
    maxSpeed: "fast",
    initSpeed: "fast",
    direction: 135,
    keep: true,
  });

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  });
  return (
    <>
      <div className="container skill-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetter
              idx={13}
              letterClass={letterClass}
              strArray={skillsArr}
            />
          </h1>
          <div className="gd-bar" />
          <p>
            I am using the technology of{" "}
            <span className="word-orange">
              HTML5, CSS3, JAVASCRIPT, ANGULARJS, REACT JS, SASS, BOOTSTRAP,
              TAILWAIND, MATERIAL UI and GIT
            </span>
          </p>
          <div className="gd-bar" />
          <p>
            I got an Internship at Toro Cloud company at Mabalacat City
            Pamapanga with the position of Frontend Developer, we used AngularJS
            to create User Interfaces of Dashboards and other business sites.
            Luckily, I got a job offer after we finished our Internship program
            on Toro Cloud. I got a position of Frontend ReactJS Developer to
            build User Interfaces.
          </p>
          <div className="gd-bar" />
          <p>
            Visit my LinkedIn profile for more details. You can also checkout my
            cv on this or feel free to use my contact page to ask questions.
          </p>
        </div>
        <div className="tag-cloud-container">
          <h1 className="content">{}</h1>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Skills;
