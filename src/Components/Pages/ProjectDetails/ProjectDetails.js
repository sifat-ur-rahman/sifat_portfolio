import React from "react";
import Slider from "../Slider/Slider";
import { useLoaderData } from "react-router-dom";

const ProjectDetails = () => {
  const detailsData = useLoaderData();
  const {
    projectName,
    img01,
    img02,
    img03,
    img04,
    type,
    details,
    technology,
    liveUrl,
    clientCode,
    serverCode,
  } = detailsData?.data;
  //console.log("details=>", projectName);

  const data = {
    img1: img01,
    img2: img02,
    img3: img03,
    img4: img04,
  };
  return (
    <div
      className="lg:px-14 px-4"
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
    >
      <h2
        className="lg:text-4xl text-3xl
         text-white font-bold my-14 "
      >
        {projectName}
      </h2>

      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-4 my-5 items-center ">
        <div className=" ">
          <Slider data={data} />
        </div>
        <div className="px-5">
          <h2
            className="lg:text-3xl text-3xl
         text-white font-bold my-14 "
          >
            {projectName} of My{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-violet-600">
              {type}
            </span>
          </h2>
          <p className="lg:text-xl text-justify">{details}</p>
          <p className="lg:text-xl mt-4">
            {" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-violet-600 font-bold">
              Technology:
            </span>{" "}
            {technology}
          </p>
        </div>
      </div>
      <div className="my-5">
        <a target="_blank" href={liveUrl}>
          <button className=" btn btn-outline bgColor px-8  rounded-full text-xl mr-3 mb-4 ">
            preview
          </button>
        </a>
        <a target="_blank" href={clientCode}>
          <button className=" btn btn-outline bgColor px-8  rounded-full text-xl mr-3 mb-4 ">
            client side code
          </button>
        </a>

        <a target="_blank" href={serverCode}>
          <button className=" btn btn-outline bgColor px-8  rounded-full text-xl mr-3 mb-4 ">
            sever side code
          </button>
        </a>
      </div>
      {/* <div className="flex justify-between mb-6">
        <Link to={`/project/Freemium_Articles`}>
          <button className=" btn btn-outline text-xl px-8 bgColor rounded-full">
            Previous
          </button>
        </Link>
        <Link to={`/project/Crash_Course`}>
          <button className=" btn  btn-outline text-xl px-8 bgColor rounded-full">
            Next
          </button>
        </Link>
      </div> */}
    </div>
  );
};

export default ProjectDetails;
