import React from "react";
import { useLoaderData } from "react-router-dom";

function BlogDetails() {
  const detailsData = useLoaderData();
  const { title, content, img } = detailsData?.data;
  //console.log("title", title);

  //const BlogContent = content?.replace(/<[^>]+>/g, "");
  return (
    <div
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      className="lg:w-[1000px] lg:mx-auto mx-6 my-16 flex flex-col items-center "
    >
      <h2 className="text-5xl font-bold text-center mb-6">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-violet-600">
          {title}
        </span>
      </h2>
      <img className="my-6" src={img} alt="" />
      <div
        className="text-xl text-justify mb-6"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}

export default BlogDetails;
