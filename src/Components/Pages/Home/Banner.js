import React from "react";
import Typewriter from "typewriter-effect";
import AOS from "aos";
import "aos/dist/aos.css";

import "../../Styles/Style.css";
AOS.init();

const Banner = () => {
  return (
    <div>
      <div className="hero bgColor  lg:px-14">
        <div className="hero-content  flex-col lg:flex-row-reverse p-0">
          {/* <div
            className="lg:w-1/2"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            <img src='https://i.ibb.co/rvjqPy1/0-Eit-UXT-pqba-QSCTt.gif' className="" alt="" />
          </div> */}
          <div
            className=" p-4"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <h1 className=" text-3xl lg:text-5xl  font-bold">
              <Typewriter
                options={{
                  strings: [
                    ` Hi !  I AM <br />
                     Md Sifat Ur Rahman <br />
                    MERN Stack Developer`,
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p className="py-6 font-sans lg:text-4xl">
              I build easy & accessible website.
            </p>
            <p className="mb-4 font-sans lg:text-xl">
              I'm a developer specializing in React JS The main focus is
              front-end, <br />
              but at the same time, I try to new technology also, Currently.{" "}
              <br />
              I'm focused on learning MERN stack development.
            </p>
            <a
              target="_blank"
              download="https://drive.google.com/file/d/18BwhoPPsf8OWI8GNHyybAJYvyevXQtsE/view?usp=drive_link"
              href="https://drive.google.com/file/d/18BwhoPPsf8OWI8GNHyybAJYvyevXQtsE/view?usp=drive_link"
            >
              <button className=" btn btn-outline bgColor px-8 text-xl rounded-full">
                Resume
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
