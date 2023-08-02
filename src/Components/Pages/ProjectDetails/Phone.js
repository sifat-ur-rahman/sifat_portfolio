import React from 'react';
import Slider from '../Slider/Slider';
import { Link } from 'react-router-dom';

const data={
    img1:'https://i.ibb.co/kmTRZfm/phone-resale.png',
    img2:'https://i.ibb.co/Vmwjjcd/pr4.png',
    img3:'https://i.ibb.co/ky45v1s/pr2.png',
    img4:'https://i.ibb.co/m9msg3z/pr3.png'
}
const Phone = () => {
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
        Phone Reseller
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
           Phone Reseller of My <span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-violet-600'> Personal Project </span>
          </h2>
       <p className="lg:text-xl text-justify">It is an e-commerce site. Here any seller can sell his used old phone if he wants. And he can advertise his 
phone. A user can purchase the phone of his choice. <br /> A full-stack website where you have the Admin, Buyer, Seller dashboard. <br />To place buy and sell with email login.
 </p>
       <p className="lg:text-xl mt-4"> <span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-violet-600 font-bold'>Technology:</span>  React JS, Tailwind CSS, daisyUI, Firebase, Mongo DB, Express JS, Node JS.</p>
        </div>
      </div>
      <div className="my-5">
        <a target="_blank" href='https://phone-reseller-1a73e.web.app/'>
          <button className=" btn btn-outline bgColor px-8  rounded-full text-xl mr-3 mb-4 ">
            preview
          </button>
        </a>
        <a target="_blank" href='https://github.com/sifat-ur-rahman/phone_reseller-client_side'>
          <button className=" btn btn-outline bgColor px-8  rounded-full text-xl mr-3 mb-4 ">
            client side code
          </button>
        </a>
        
          <a target="_blank" href='https://github.com/sifat-ur-rahman/phone_reseller-server_side'>
            <button className=" btn btn-outline bgColor px-8  rounded-full text-xl mr-3 mb-4 ">
              sever side code
            </button>
          </a>
       
      </div>
      <div className='flex justify-between mb-6'>
            <Link to={`/project/Freemium_Articles`}>
            <button  className=" btn btn-outline text-xl px-8 bgColor rounded-full">
                Previous
              </button>
            </Link>
            <Link to={`/project/Crash_Course`}>
            <button className=" btn  btn-outline text-xl px-8 bgColor rounded-full">
                Next
              </button>
            </Link>
            </div>
    </div>
    );
};

export default Phone;