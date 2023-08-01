import React from 'react';
import SingleCard from '../SingleCard/SingleCard';


const blogData = [
    {
      _id: '1',
      Img:'https://i.ibb.co/DRDPk7m/Next-js-Tutorial-for-Beginners.png',
      desc:'Next.js is a powerful open-source React framework made by Vercel (formerly Zeit) that allows developers to easily create server-rendered React applications.',
      title:'The Future of Next.js: Accelerating Web Development to New Heights',
      router:'blog/next_js'
    },
    {
      _id: '2',
      Img:'https://i.ibb.co/3CmXTXM/1687790916132.jpg',
      desc:'Thanks to technology, people who work remotely like us can effectively collaborate with teams located in various regions across the globe. We utilize different instruments and systems to link, converse, and create outstanding website solutions.',
      title:'Working remotely gives you the freedom to work from anywhere, not just in a regular office.',
      router:'blog/remote_jobs'
    },
    {
      _id: '3',
      Img:'https://i.ibb.co/j4M46sP/1683981559184.jpg',
      desc:'JavaScript can be used in a variety of different contexts, but it is primarily used for web development. Here are some examples of where and how JavaScript can be used',
      title:'JavaScript is a high-level, dynamic, and interpreted programming language used primarily for creating interactive and dynamic websites.',
      router:'blog/javaScript'
    },
    {
      _id: '4',
      Img:'https://i.ibb.co/3M9Dv8y/1683718857481.jpg',
      desc:'React allows developers to use JSX, a syntax extension that allows them to write HTML-like code within their JavaScript code. This makes it easier to create and manage UI components.',
      title:'React is an open-source JavaScript library for building user interfaces (UIs) or UI components.',
      router:'blog/react_js'
    },
    {
      _id: '5',
      Img:'https://i.ibb.co/fNXXBh3/dom.png',
      desc:"The Virtual DOM, on the other hand, is an abstraction of the real DOM. It's a lightweight copy of the DOM that is created and managed by JavaScript frameworks like React.",
      title:'The Document Object Model (DOM) is a hierarchical, tree-like structure that represents the HTML elements of a web page and their attributes. ',
      router:'blog/Virtual_DOM'
    },
    {
      _id: '6',
      Img:'https://i.ibb.co/7WR0T2N/1674635976378.jpg',
      desc:' This powerful toolkit is designed to make it easy for developers to build and manage state in their React applications, and it offers a wide range of features that can help you streamline your development process and save you time and effort.',
      title:'One of the main benefits of using Redux Toolkit is that it makes it easy to create and manage state in your React applications',
      router:'blog/react_redux'
    },
  ]
const Blogs = () => {
    return (
      <div className="grid lg:grid-cols-3 my-10 mx-9 gap-4"
      data-aos-duration="3000"
     data-aos="flip-right">
       {
            blogData.map(singleData=><SingleCard
            key={singleData.id}
            singleData={singleData}
            ></SingleCard>)
          }

     </div>
    );
};

export default Blogs;