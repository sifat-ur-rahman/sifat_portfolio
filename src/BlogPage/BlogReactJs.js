import React from 'react';
import { Link } from 'react-router-dom';

const BlogReactJs = (props) => {
    return (
        <div className='lg:w-[1000px] lg:mx-auto mx-6 my-16'>
            <h2 className='text-5xl font-bold text-center mb-6'><span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-violet-600'>React is an open-source JavaScript library for </span> <span className='bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-pink-600'>building user interfaces (UIs) or UI components.</span> </h2>
            <p className='text-xl text-justify mb-6'>React is an open-source JavaScript library for building user interfaces (UIs) or UI components. Developed by Facebook, React was initially released in 2013 and has since become one of the most popular libraries for building modern web applications.</p>
            <p className='text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-violet-600'>The way React JS works</p>
            <p className='text-xl text-justify mb-6'>React works by creating and managing a virtual representation of the user interface, known as the virtual DOM (Document Object Model), which is a lightweight copy of the actual DOM. The virtual DOM is a JavaScript object that React uses to keep track of the current state of the UI.When the state of the UI changes, React compares the current virtual DOM with the previous one and calculates the minimum set of changes required to update the actual DOM to reflect the new state. This process is known as reconciliation and is what makes React highly performant, as it minimizes the number of actual changes that need to be made to the UI</p>
            <div className='flex justify-center'><img className=' mb-6' src="https://i.ibb.co/3M9Dv8y/1683718857481.jpg" alt="" /></div>
            <p className='text-2xl font-bold mb-5 bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-violet-600'>Advantages of using React JS</p>
            <p className='text-xl text-justify mb-04'>There are several benefits of using React JS to build web applications, including:</p>
            <p className='text-xl text-justify mb-02'>👉 React follows a component-based architecture, which means that UI elements can be broken down into smaller, reusable components. This helps in reducing development time and effort, as well as improving the maintainability of the code.</p>
            <p className='text-xl text-justify mb-02'>👉 React uses a virtual representation of the DOM, which allows for efficient updates and rendering of changes. It calculates the minimum changes required to update the actual DOM, which makes React highly performant.</p>
            <p className='text-xl text-justify mb-02'>👉 React allows developers to use JSX, a syntax extension that allows them to write HTML-like code within their JavaScript code. This makes it easier to create and manage UI components.</p>
            <p className='text-xl text-justify mb-02'>👉 React has a large and active community of developers, which means that there are plenty of resources available for learning, support, and development.</p>
            <p className='text-xl text-justify mb-8'>👉 React is scalable and can be used to build large-scale web applications. It is suitable for building applications with complex user interfaces and can handle high traffic and heavy workloads</p>
            <p className='text-xl text-justify mb-6'>Overall, React provides a flexible and powerful way to build web applications, with benefits such as reusability, performance, compatibility, and scalability.</p>
            <p className='text-2xl font-bold text-justify mb-3'>Other than React JS, there are other JavaScript libraries</p>
            <p className='text-xl text-justify mb-6'>1. Angular<br/> 2. Vue.js<br/> 3. Ember.js<br/> 4. Backbone.js<br/> 5. Knockout.js</p>
            <p className='text-xl text-justify mb-6'>Many JavaScript libraries and frameworks are available for building web applications. The choice of which library or framework to use depends on the specific needs and requirements of the project.</p>
            <p className='text-end mb-6 text-slate-300 font-bold'>May 3, 2023</p>

            <div className='flex justify-between '>
            <Link to={`/blog/javaScript`}>
            <button  className=" btn btn-outline text-xl px-8 bgColor rounded-full">
                Previous
              </button>
            </Link>
            <Link to={`/blog/Virtual_DOM`}>
            <button className=" btn  btn-outline text-xl px-8 bgColor rounded-full">
                Next
              </button>
            </Link>
            </div>
        </div>
    );
};

export default BlogReactJs;