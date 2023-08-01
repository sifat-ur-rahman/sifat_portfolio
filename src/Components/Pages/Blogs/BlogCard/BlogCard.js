import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({blogData}) => {
    const{Img,title, desc, router} = blogData;
    return (
        
        <div className="card card-side ">
  
  <div className="card-body w-3/4">
    <h2 className="card-title">{title}</h2>
    <p>{desc}</p>
    <Link to={`/blog/${router}`}> hello</Link>
  </div>
  <figure><img className=' ' src={Img} alt="Movie"/></figure>
</div>

    );
};

export default BlogCard;