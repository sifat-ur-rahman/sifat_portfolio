import React from 'react';
import { Link } from 'react-router-dom';

const BlogReactJs = (props) => {
    return (
        <div className='lg:w-[1000px] lg:mx-auto mx-6 my-16'>
            BlogReactJs
            <div className='flex justify-between '>
            <Link to={`/blog/javaScript`}>
            <button  className=" btn btn-outline text-xl px-8 bgColor rounded-full">
                Previous
              </button>
            </Link>
            <Link to={`/blog/Virtual_DOM`}>
            <button className=" btn  btn-outline text-xl px-8 bgColor rounded-full">
                Next
              </button>
            </Link>
            </div>
        </div>
    );
};

export default BlogReactJs;