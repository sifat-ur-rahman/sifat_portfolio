import React, { useEffect, useState } from "react";

import BlogCard from "../Blogs/BlogCard/BlogCard";

const Blogs = () => {
  const [blogData, setBlogData] = useState([]);
  console.log(blogData);
  useEffect(() => {
    fetch("https://sifat-portfolio-server.vercel.app/api/blogs")
      .then((response) => response.json())
      .then((data) => setBlogData(data.data))
      .catch((error) => console.error("Error fetching blog data:", error));
  }, []);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 my-10 mx-9 gap-4 min-h-screen">
      {blogData.length > 0 ? (
        blogData.map((singleData) => (
          <BlogCard key={singleData.id} singleData={singleData}></BlogCard>
        ))
      ) : (
        <span className="loading loading-bars loading-lg"></span>
      )}
    </div>
  );
};

export default Blogs;
