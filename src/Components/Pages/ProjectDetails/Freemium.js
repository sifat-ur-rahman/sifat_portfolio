import React from 'react';
import Slider from '../Slider/Slider';
const data={
    img1:'https://i.ibb.co/4FZzFK2/FreeMium.png',
    img2:'https://i.ibb.co/x3nPbWD/FM02.png',
    img3:'https://i.ibb.co/crvv1BF/FM03.png',
    img4:'https://i.ibb.co/MZmVn8M/FM04.png'
}
const Freemium = () => {
    return (
        <div
      className="lg:px-14 px-4"
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
    >
      <h2
        className="lg:text-4xl text-3xl
         text-white font-bold my-14 "
      >
        Freemium Articles
      </h2>

      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-4 my-5 items-center ">
        <div className=" ">
          <Slider data={data} />
        </div>
        <div className='px-5'>
          <h2
            className="lg:text-3xl text-3xl
         text-white font-bold my-14 "
          >
            Freemium Articles of My <span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-violet-600'> Team Project </span>
          </h2>
       <p className="lg:text-xl">It is an article publishing site. It contains articles of various categories. There are more such articles 
especially for programmers to get help. If there is no help for any issue they can take solution from Open 
API. I worked as a full-stack developer on this project.</p>
       <p className="lg:text-xl mt-4"> <span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-violet-600 font-bold'>Technology:</span> React JS, Tailwind CSS, daisyUI, Redux, Mongo DB, Node JS, Express JS.</p>
        </div>
      </div>
      <div className="my-5">
        <a target="_blank" href='https://freemiumarticles.web.app/'>
          <button className=" btn btn-outline bgColor px-8  rounded-full text-xl mr-3 mb-4 ">
            preview
          </button>
        </a>
        <a target="_blank" href='https://github.com/MahamudaM/FreeMium-Articles-Client'>
          <button className=" btn btn-outline bgColor px-8  rounded-full text-xl mr-3 mb-4 ">
            client side code
          </button>
        </a>
        
          <a target="_blank" href='https://github.com/MahamudaM/FreeMium-Articles-Server'>
            <button className=" btn btn-outline bgColor px-8  rounded-full text-xl mr-3 mb-4 ">
              sever side code
            </button>
          </a>
       
      </div>
    </div>
    );
};

export default Freemium;