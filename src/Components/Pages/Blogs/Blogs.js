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
      Img:'https://i.ibb.co/3M9Dv8y/1683718857481.jpg',
      desc:' React allows developers to use JSX, a syntax extension that allows them to write HTML-like code within their JavaScript code. This makes it easier to create and manage UI components.',
      title:'React is an open-source JavaScript library for building user interfaces (UIs) or UI components.',
      router:'blog/react_js'
    },
    {
      _id: '4',
      Img:'https://i.ibb.co/DRDPk7m/Next-js-Tutorial-for-Beginners.png',
      desc:'Next.js is a powerful open-source React framework made by Vercel (formerly Zeit) that allows developers to easily create server-rendered React applications.',
      title:'The Future of Next.js: Accelerating Web Development to New Heights',
      router:'blog/next_js'
    },
    {
      _id: '5',
      Img:'https://i.ibb.co/3CmXTXM/1687790916132.jpg',
      desc:'Thanks to technology, people who work remotely like us can effectively collaborate with teams located in various regions across the globe. We utilize different instruments and systems to link, converse, and create outstanding website solutions.',
      title:'Working remotely gives you the freedom to work from anywhere, not just in a regular office.',
      router:'blog/remote_jobs'
    },
    {
      _id: '6',
      Img:'https://i.ibb.co/3M9Dv8y/1683718857481.jpg',
      desc:' React allows developers to use JSX, a syntax extension that allows them to write HTML-like code within their JavaScript code. This makes it easier to create and manage UI components.',
      title:'React is an open-source JavaScript library for building user interfaces (UIs) or UI components.',
      router:'blog/react_js'
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