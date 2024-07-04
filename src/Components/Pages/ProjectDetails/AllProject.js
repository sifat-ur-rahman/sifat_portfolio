import React, { useEffect, useState } from "react";
import SingleCard from "../SingleCard/SingleCard";

const AllProjects = () => {
  const [projectData, setProjectData] = useState([]);
  console.log(projectData);
  useEffect(() => {
    fetch("https://sifat-portfolio-server.vercel.app/api/projects")
      .then((response) => response.json())
      .then((data) => setProjectData(data.data))
      .catch((error) => console.error("Error fetching project data:", error));
  }, []);

  return (
    <div id="projects" className="lg:px-14 px-4 mb-10 min-h-screen">
      <div>
        <h2
          className="lg:text-5xl text-3xl
        uppercase bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-violet-600 font-bold text-center my-14 "
        >
          All Projects
          <hr className="w-3/12 mx-auto mb-4 font-bold " />
        </h2>

        <div className="flex lg:flex-row flex-col lg:gap-10 gap-4">
          {projectData.length > 0 ? (
            projectData?.map((singleData) => (
              <SingleCard
                key={singleData._id}
                singleData={singleData}
              ></SingleCard>
            ))
          ) : (
            <span className="loading loading-bars loading-lg"></span>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
