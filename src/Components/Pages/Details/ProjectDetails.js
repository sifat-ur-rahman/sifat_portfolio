import { useLoaderData } from "react-router-dom";
import DetailsPage from "./DetailsPage";
import { Routes, Route, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Slider from "../Slider/Slider";

const ProjectDetails = () => {
  const data = useLoaderData();
  console.log(data);
  const { title, liveSide, clientSide, serverSide, desc, technoloy } = data;

  return (
    <div
      className="lg:px-14 px-4"
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
    >
      <h2
        className="lg:text-4xl text-3xl
        uppercase text-white font-bold my-14 "
      >
        {title}
      </h2>

      <div className=" flex lg:flex-row flex-col gap-4 my-5 ">
        <div className=" lg:w-1/2">
          <Slider data={data} />
        </div>
        <div>
          <h2
            className="lg:text-3xl text-3xl
        uppercase text-white font-bold my-14 "
          >
            Feature of My Project
          </h2>
       <p className="lg:text-xl">{desc}</p>
       <p className="lg:text-xl mt-4">Technology: {technoloy}</p>
        </div>
      </div>
      <div className="my-5">
        <a target="_blank" href={liveSide}>
          <button className=" btn btn-outline bgColor mr-2 mb-4 ">
            preview
          </button>
        </a>
        <a target="_blank" href={clientSide}>
          <button className=" btn btn-outline bgColor mr-2 mb-4 ">
            client side code{" "}
          </button>
        </a>
        {serverSide ? (
          <a target="_blank" href={serverSide}>
            <button className=" btn btn-outline bgColor mr-2 mb-4 ">
              sever side code
            </button>
          </a>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;
