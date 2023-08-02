import React from 'react';
import { Link } from 'react-router-dom';

function BlogDOM() {
    return (
        <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine"  className='lg:w-[1000px] lg:mx-auto mx-6 my-16'>
            <h2 className='text-5xl font-bold text-center mb-6'><span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-violet-600'>The Document Object Model (DOM) is a hierarchical, tree-like structure</span> <span className='bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-pink-600'>that represents the HTML elements of a web page and their attributes.</span> </h2>
            <p className='text-xl text-justify mb-6'>The Document Object Model (DOM) is a hierarchical, tree-like structure that represents the HTML elements of a web page and their attributes. It provides a programming interface for web developers to access and manipulate the content, structure, and style of a web page in real-time. When a web page is loaded, the browser creates the DOM tree by parsing the HTML code and then uses it to render the web page.</p>
            <p className='text-xl text-justify mb-6'>The DOM is made up of nodes that represent the HTML elements of a web page, such as <code>&lt;html&gt;</code>,  <code>&lt;body&gt;</code>, <code>&lt;div&gt;</code>, <code>&lt;p&gt;</code>, and so on. Each node has properties and methods that can be used to interact with it. For example, you can use JavaScript to manipulate the text content of a <code>&lt;p&gt;</code> element, add a new element to the DOM, or change the style of an element.</p>
            <div className='flex justify-center'><img className=' mb-6' src="https://i.ibb.co/3fzZtS0/1683625432849.jpg" alt="" /></div>
            <p className='text-xl text-justify mb-6'>The Virtual DOM, on the other hand, is an abstraction of the real DOM. It's a lightweight copy of the DOM that is created and managed by JavaScript frameworks like React. When you write a React component, you define its structure and behavior using JSX, which is a syntax extension of JavaScript. React then uses this information to create a Virtual DOM tree that represents the component's structure.</p>
            <p className='text-xl text-justify mb-6'>The Virtual DOM is used to optimize the updating of the real DOM. When a component's state changes, React creates a new Virtual DOM tree that reflects the new state and then compares it to the previous version of the Virtual DOM to calculate the minimum number of changes needed to update the real DOM. This process is known as "reconciliation." Once the minimum number of changes has been determined, React updates the real DOM accordingly</p>
            <p className='text-xl text-justify mb-6'>The advantage of using the Virtual DOM is that it can significantly improve the performance of web applications. Updating the real DOM can be a slow and expensive process, especially for large and complex web pages. By using the Virtual DOM and reconciling changes, React minimizes the number of updates needed and can update the real DOM more efficiently.</p>
            <p className='text-xl text-justify mb-6'>In summary, the DOM is the actual representation of a web page in memory, while the Virtual DOM is a lightweight copy of the DOM that is used for optimization purposes. The Virtual DOM helps to improve the performance of web applications by minimizing the number of updates needed to the real DOM.</p>
            <p className='text-end mb-6 text-slate-300 font-bold'>March 3, 2023</p>



            <div className='flex justify-between '>
            <Link to={`/blog/react_js`}>
            <button  className=" btn btn-outline text-xl px-8 bgColor rounded-full">
                Previous
              </button>
            </Link>
            <Link to={`/blog/react_redux`}>
            <button className=" btn  btn-outline text-xl px-8 bgColor rounded-full">
                Next
              </button>
            </Link>
            </div>
        </div>
    );
}

export default BlogDOM;