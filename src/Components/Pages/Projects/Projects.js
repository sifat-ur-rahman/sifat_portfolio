import React from "react";
import SingleCard from "../SingleCard/SingleCard";

const projectData = [
  {
    _id: "1",
    Img: "https://i.ibb.co/4FZzFK2/FreeMium.png",
    desc: "It is an article publishing site. It contains articles of various categories. There are more such articles especially for programmers to get help.",
    title: "Freemium Articles",
    router: "project/Freemium_Articles",
  },
  {
    _id: "2",
    Img: "https://i.ibb.co/kmTRZfm/phone-resale.png",
    desc: "It is an e-commerce site. Here any seller can sell his used old phone if he wants. And he can advertise his phone.",
    title: "Phone Reseller",
    router: "project/Phone_Reseller",
  },
  {
    _id: "3",
    Img: "https://i.ibb.co/F3BDRcq/crash-courses.png",
    desc: "It is an online education platform. Here students can take courses on different subjects.",
    title: "Crash Course",
    router: "project/Crash_Course",
  },
];

const Projects = () => {
  return (
    <div id="projects" className="lg:px-14 px-4 mb-10">
      <div>
        <h2
          className="lg:text-5xl text-3xl
        uppercase bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-violet-600 font-bold text-center my-14 "
        >
          Projects
          <hr className="w-3/12  mx-auto mb-4" />
        </h2>

        <div className="flex lg:flex-row  flex-col lg:gap-10 gap-4">
          {projectData.map((singleData) => (
            <SingleCard
              key={singleData.id}
              singleData={singleData}
            ></SingleCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
