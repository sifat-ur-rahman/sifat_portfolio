import React from "react";
import logo from "../../../images/R_logo.svg.png";
import facebook from "../../../images/facebook.png";
import github from "../../../images/github.png";
import likedin from "../../../images/linkedin.png";
import gmail from "../../../images/gmail.png";
import phone from "../../../images/phone.png";

const Foonter = () => {
  return (
    <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
      <hr />
      <footer className="footer p-6 lg:grid-cols-3 grid-cols-1 text-white">
        <div>
          <div className="flex items-end cursor-pointer">
            <img src={logo} className="w-16 " alt="logo" />
            <span className="text-2xl text-sky-400 ">ifat</span>
          </div>
          <p className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-violet-600">
            MERN Stack Developer
          </p>
        </div>
        <div>
          <span className="lg:text-xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            Social
          </span>
          <div className="grid grid-flow-col gap-4">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/sifat-ur-rahman/"
            >
              <img src={likedin} className="w-8" alt="logo" />
            </a>
            <a target="_blank" href="https://github.com/sifat-ur-rahman">
              <img
                src={github}
                className="w-8 rounded-lg bg-indigo-400"
                alt="logo"
              />
            </a>
            <a
              target="_blank"
              href="https://web.facebook.com/profile.php?id=100025870695070"
            >
              <img src={facebook} className="w-8 rounded-lg" alt="logo" />
            </a>
          </div>
        </div>
        <div>
          <span className="lg:text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            CONTACT
          </span>
          <p className="flex">
            {" "}
            <img src={gmail} alt="gmail" className="w-8 rounded-lg" />
            <a
              className="ml-3 text-lg"
              href="mailto:md.sifat.ur.rahman2702@gmail.com"
            >
              md.sifat.ur.rahman2702@gmail.com
            </a>
          </p>
          <p className="flex">
            <img
              src={phone}
              alt="gmail"
              className="w-8 rounded-full bg-indigo-400"
            />
            <a
              className=" ml-3 text-lg font-semibold"
              href="tel:+8801740625770"
            >
              {" "}
              +880 174 062 5770
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Foonter;
