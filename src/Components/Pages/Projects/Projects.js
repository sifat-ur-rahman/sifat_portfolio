import React, { useEffect, useState } from "react";
import SingleCard from "../SingleCard/SingleCard";

const Projects = () => {
  const [projectData, setProjectData] = useState([]);
  console.log(projectData);
  useEffect(() => {
    fetch("https://sifat-portfolio-server.vercel.app/api/projects")
      .then((response) => response.json())
      .then((data) => setProjectData(data.data))
      .catch((error) => console.error("Error fetching project data:", error));
  }, []);

  return (
    <div id="projects" className="lg:px-14 px-4 mb-10">
      <div>
        <h2
          className="lg:text-5xl text-3xl
        uppercase bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-violet-600 font-bold text-center my-14 "
        >
          Projects
          <hr className="w-3/12 mx-auto mb-4" />
        </h2>

        <div className="flex lg:flex-row flex-col lg:gap-10 gap-4">
          {projectData.length > 0 ? (
            projectData
              ?.slice(0, 3)
              ?.map((singleData) => (
                <SingleCard
                  key={singleData._id}
                  singleData={singleData}
                ></SingleCard>
              ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
