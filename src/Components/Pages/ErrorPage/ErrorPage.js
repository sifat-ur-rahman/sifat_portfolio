import React from 'react';

const ErrorPage = () => {
    return (
        <div className=' flex flex-col items-center '>
             <p className='lg:text-9xl mt-40 mb-5 font-bold text-red-500'>404</p>
            <h1 className='lg:text-6xl mb-52 font-bold text-red-500'>Page Not found </h1>
        </div>
    );
};

export default ErrorPage;