import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Tips from "./components/Tips";
import {
  Html,
  Cascading,
  JavaScript,
  Bootstrap,
  Angular,
  React,
} from "./components/Tips/Languages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/about" element={<About />} />
          <Route path="/tips" element={<Tips />}>
            <Route path="tips/html" element={<Html />}></Route>
            <Route path="tips/css" element={<Cascading />}></Route>
            <Route path="tips/javascript" element={<JavaScript />}></Route>
            <Route path="tips/bootstrap" element={<Bootstrap />}></Route>
            <Route path="tips/reactjs" element={<React />}></Route>
            <Route path="tips/angularjs" element={<Angular />}></Route>
          </Route>
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
