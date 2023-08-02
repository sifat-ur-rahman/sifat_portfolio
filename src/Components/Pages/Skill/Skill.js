import React from "react";
import Marquee from "react-fast-marquee";
import html from "../../../images/html.png";
import css from "../../../images/css.png";
import js from "../../../images/javascript.png";

import node from "../../../images/node.png";
import express from "../../../images/express.png";
import mongodb from "../../../images/mongodb.png";
import tailwind from "../../../images/tailwind.png";
import next from "../../../images/next.png";
import github from "../../../images/github.png";
import vercel from "../../../images/vercel.png";
import Typescript from "../../../images/Typescript.png";
import reactjs from "../../../images/reactjs1.png";
import firebase from "../../../images/firebase.png";
import '../../Styles/Style.css'



const image = [
  {
    id:"1",
    img:html,
    name:'HTML'
  },
  {
    id:"2",
    img:css,
    name:'CSS'
  },
  {
    id:"3",
    img:js,
    name:'JavaScript'
  },
  {
    id:"4",
    img:reactjs,
    name:'React JS'
  },
  {
    id:"5",
    img:github,
    name:'GitHub'
  },
  {
    id:"6",
    img:mongodb,
    name:'MongoDB'
  },
  {
    id:"7",
    img:node,
    name:'Node JS'
  },
  {
    id:"8",
    img:express,
    name:'Express JS'
  },
  {
    id:"9",
    img:tailwind,
    name:'Tailwind CSS'
  },
  {
    id:"10",
    img:firebase,
    name:'Firebase'
  },
  {
    id:"11",
    img:next,
    name:'Next JS'
  },
  {
    id:"12",
    img:Typescript,
    name:'Typescript '
  },
  {
    id:"13",
    img:vercel,
    name:'Vercel '
  },
]


const Skill = () => {

  return (
    <div>
       <h2
        className="lg:text-5xl text-3xl
        uppercase bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-violet-600 font-bold text-center my-10 "
      >
        SKILL
        <hr className="w-2/12 mx-auto mb-4" />
      </h2>

    <div className="Body">
    <div className="circle">
      <div className="logo">
   
      </div>

      <Marquee gradient={false}>
      <div  className="text flex gap-5 ">
     
   {
    image.map((char, i)=>
    <div key={i} className="hover:bg-purple-900 rounded-xl hover:text-[#CCD6F6] grid justify-center py-2 px-2 justify-items-center items-center content-between">
    <img src={char.img} alt="" className='w-24 self-end'/>
    <p className="text-center hover:font-extrabold font-bold text-xl">{char.name}</p>
    </div>
    


  )
   }
      </div>
    </Marquee>

    </div>
    </div>

    </div>
  );
};

export default Skill;
