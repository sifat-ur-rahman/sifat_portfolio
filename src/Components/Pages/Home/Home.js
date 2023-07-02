import React from "react";
import AboutMe from "../About/AboutMe";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import Skill from "../Skill/Skill";
import Banner from "./Banner";


const Home = () => {
  return (
    <div>
      <Banner />
      <AboutMe />
      <Skill/>
      <Projects/>
      
      <Contact/>
    </div>
  );
};

export default Home;
