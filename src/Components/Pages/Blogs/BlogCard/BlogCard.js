import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ singleData }) => {
  const { img, title, content, _id } = singleData;

  const BlogContent = content?.replace(/<[^>]+>/g, "");
  return (
    <div
      data-aos="fade-down"
      title={title.slice(0, 60)}
      className="card border cursor-default"
    >
      <figure>
        <img src={img} className="" alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl text-justify">
          {title?.slice(0, 60)}
        </h2>
        <p className="text-xl flex justify-around text-justify">
          {BlogContent?.slice(0, 100)}
        </p>
        <div className="card-actions justify-end">
          <Link to={`/blog/${_id}`}>
            <button className=" btn  btn-outline text-xl px-8 bgColor rounded-full">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
