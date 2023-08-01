import React from 'react';


const blogData = [
    {
      _id: '1',
      Img:'https://i.ibb.co/4FZzFK2/FreeMium.png',
      desc:'It is an article publishing site. It contains articles of various categories. There are more such articles especially for programmers to get help.',
      title:'Freemium Articles',
      router:'/Blog/React JS'
    },
    {
      _id: '2',
      Img:'https://i.ibb.co/kmTRZfm/phone-resale.png',
      desc:'It is an e-commerce site. Here any seller can sell his used old phone if he wants. And he can advertise his phone.',
      title:'Phone Reseller',
      router:'Phone_Reseller'
    },
    {
      _id: '3',
      Img:'https://i.ibb.co/F3BDRcq/crash-courses.png',
      desc:'It is an online education platform. Here students can take courses on different subjects.',
      title:'Crash Course',
      router:'Crash_Course'
    },
  ]
const Blogs = () => {
    return (
        <div className='min-h-screen'>
            <h1>Comming soon </h1>
        </div>
    );
};

export default Blogs;