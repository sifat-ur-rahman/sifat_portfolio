import React from 'react';
import Slider from '../Slider/Slider';

const data={
    img1:'https://i.ibb.co/F3BDRcq/crash-courses.png',
    img2:'https://i.ibb.co/k8YyNTB/CC2.png',
    img3:'https://i.ibb.co/WcHgy6n/CC3.png',
    img4:'https://i.ibb.co/pX2z8vT/CC4.png'
}
const Course = () => {
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
          Crash Course
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
             Crash Course of My <span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-violet-600'>Personal Project </span>
            </h2>
         <p className="lg:text-xl text-justify">It is an online education platform. Here students can take courses on different subjects. <br /> 
         This Course site. Here is many Courses.<br />
         Before place Course Details, user have login with a Google account and email.
   </p>
         <p className="lg:text-xl mt-4 text-justify"> <span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-violet-600 font-bold'>Technology: </span>  React JS, Firebase, React-Bootstrap, Express JS, Node JS.</p>
          </div>
        </div>
        <div className="my-5">
          <a target="_blank" href='https://crash-course-eae91.web.app/'>
            <button className=" btn btn-outline bgColor px-8  rounded-full text-xl mr-3 mb-4 ">
              preview
            </button>
          </a>
          <a target="_blank" href='https://github.com/sifat-ur-rahman/crash_course-client_side'>
            <button className=" btn btn-outline bgColor px-8  rounded-full text-xl mr-3 mb-4 ">
              client side code
            </button>
          </a>
          
            <a target="_blank" href='https://github.com/sifat-ur-rahman/crash_course-server'>
              <button className=" btn btn-outline bgColor px-8  rounded-full text-xl mr-3 mb-4 ">
                sever side code
              </button>
            </a>
         
        </div>
      </div>
    );
};

export default Course;