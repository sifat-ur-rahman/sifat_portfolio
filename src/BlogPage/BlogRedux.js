import React from 'react';
import { Link } from 'react-router-dom';

function BlogRedux() {
    return (
        <div className='lg:w-[1000px] lg:mx-auto mx-6 my-16'>
            BlogRedux
            <div className='flex justify-between '>
            <Link to={`/blog/Virtual_DOM`}>
            <button  className=" btn btn-outline text-xl px-8 bgColor rounded-full">
                Previous
              </button>
            </Link>
            <Link >
            <button className=" btn  btn-outline text-xl px-8 bgColor rounded-full">
                Next
              </button>
            </Link>
            </div>
        </div>
    );
}

export default BlogRedux;