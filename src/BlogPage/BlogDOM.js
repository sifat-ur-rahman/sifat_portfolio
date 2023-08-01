import React from 'react';
import { Link } from 'react-router-dom';

function BlogDOM() {
    return (
        <div className='lg:w-[1000px] lg:mx-auto mx-6 my-16'>
            Blog DOM 
            <div className='flex justify-between '>
            <Link to={`/blog/react_js`}>
            <button  className=" btn btn-outline text-xl px-8 bgColor rounded-full">
                Previous
              </button>
            </Link>
            <Link to={`/blog/react_redux`}>
            <button className=" btn  btn-outline text-xl px-8 bgColor rounded-full">
                Next
              </button>
            </Link>
            </div>
        </div>
    );
}

export default BlogDOM;