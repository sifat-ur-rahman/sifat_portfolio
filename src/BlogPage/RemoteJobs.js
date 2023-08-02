import React from 'react';
import { Link } from 'react-router-dom';

const RemoteJobs = (props) => {
    return (
        <div className='lg:w-[1000px] lg:mx-auto mx-6 my-16'>
            <h2 className='text-5xl font-bold text-center mb-6'><span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-violet-600'>Working remotely gives you the freedom to </span> <span className='bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-pink-600'>work from anywhere, not just in a regular office. </span> </h2>
            <p className='text-xl text-justify mb-6'>Think of a world where you can work from wherever you like. Working remotely gives you the freedom to work from anywhere, not just in a regular office. Thanks to technology, people who work remotely like us can effectively collaborate with teams located in various regions across the globe. We utilize different instruments and systems to link, converse, and create outstanding website solutions.</p>
            <p className='text-2xl font-bold mb-3 '>How to assign a task in a remote job?</p>
            <p className='text-xl text-justify mb-6'>While I carry out my study, I'm discovering the complexities of giving out duties in jobs that can be done from a distance. Good communication and organized project management are very important. Businesses frequently use tools to manage their tasks, such as Trello, Asana, or Jira. These tools help them divide up tasks, choose the date they are due, and give them to specific people on their team. To make sure tasks get done easily and everything runs smoothly, it's important to have easy-to-understand directions, check in regularly, and create an environment where people feel comfortable discussing what's going on</p>
            <p className='text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-violet-600'>The future of remote jobs</p>
            <p className='text-xl text-justify mb-6'>As I check out the future of working from home, I'm finding a lot of opportunities. Working from home has become very popular and has grown quickly, especially because of recent world situations. With the progress of technology, jobs that can be done from a distance are becoming more common in different types of work. There are many advantages: having different kinds of workers to choose from, getting more work done, saving money for companies, and finding a good balance between work and personal life. Remote work has a promising future and has many possibilities for web developers who are driven to succeed.Pros and cons of remote jobs</p>
           <div className='flex justify-center'>
            <img className=' mb-6' src="https://i.ibb.co/3CmXTXM/1687790916132.jpg" alt="" /></div>
            <p className='text-xl text-justify mb-6'>I'm studying the good and bad aspects of working from home to learn more about this different way of working.</p>
            <p className='text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-violet-600'>Pros:</p>
            <p className='text-xl text-justify mb-6'>👉 Being able to work from anywhere, creating an atmosphere that helps to improve personal efficiency and originality.</p>
            <p className='text-xl text-justify mb-6'>👉Possibility for a better harmony between work and personal life, allowing us to make time for hobbies and family responsibilities</p>
            <p className='text-xl text-justify mb-6'>👉Chances to collaborate with international groups, broadening our outlook and knowledge of diverse cultures.</p>
            <p className='text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-violet-600'>Cons:</p>
            <p className='text-xl text-justify mb-6'>👉If you only use technology to talk, it can cause problems like not understanding each other or taking too long to reply.</p>
            <p className='text-xl text-justify mb-6'>👉To stay on task and get things done while working from home, it's important to be in control of your schedule and have good self-control.</p>
            <p className='text-xl text-justify mb-6'>👉 Restricted face-to-face gatherings, which might need different approaches to encourage team unity and cooperation.</p>
            <p className='text-end mb-6 text-slate-300 font-bold'>June 20, 2023</p>
            <div className='flex justify-between '>
            <Link to={`/blog/next_js`}>
            <button  className=" btn btn-outline text-xl px-8 bgColor rounded-full">
                Previous
              </button>
            </Link>
            <Link to={`/blog/javaScript`}>
            <button className=" btn  btn-outline text-xl px-8 bgColor rounded-full">
                Next
              </button>
            </Link>
            </div>
        </div>
    );
};

export default RemoteJobs;