import React from "react";
import logo from "../../../images/R_logo.svg.png";
import facebook from "../../../images/facebook.png";
import github from "../../../images/github.png";
import likedin from "../../../images/linkedin.png";


const Foonter = () => {
  return (
    <div>
      <hr />
      <footer className="footer p-10  text-white">
        <div >
          <div className="flex items-end cursor-pointer">
          <img src={logo} className="w-16 " alt="logo" />
          <span className="text-2xl text-sky-400 ">ifat</span>
          </div>
          <p className="text-3xl ">
            MERN Stack Developer
          </p>
        </div>
        <div>
          <span className="lg:text-xl font-semibold text-[#CCD6F6] ">Social</span>
          <div className="grid grid-flow-col gap-4">
            <a 
              target="_blank"
              href="https://www.linkedin.com/in/sifat-ur-rahman/"
            >
              <img src={likedin} className="w-8" alt="logo" />
            </a>
            <a target="_blank" href="https://github.com/sifat-ur-rahman">
              <img src={github} className="w-8 rounded-lg bg-indigo-400" alt="logo" />
            </a>
            <a
              target="_blank"
              href="https://web.facebook.com/profile.php?id=100025870695070"
            >
              <img src={facebook} className="w-8 rounded-lg" alt="logo" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Foonter;
