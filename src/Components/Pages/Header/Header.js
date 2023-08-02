import React from "react";
import { Link, } from "react-router-dom";
import "../../Styles/Style.css";
import logo from "../../../images/R_logo.svg.png";

const Header = () => {
  const menuItems = (
    <>
      <li>
      <Link
          to="/"
          className="mr-4 lg:text-xl font-semibold text-[#CCD6F6] hover:text-white"
        >Home</Link>
        <a
          href="/#projects"
          className="mr-4 lg:text-xl font-semibold text-[#CCD6F6] hover:text-white"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="mr-4 lg:text-xl font-semibold text-[#CCD6F6] hover:text-white"
        >
          Contact Me
        </a>
        <a
          href="#about"
          className="mr-4 lg:text-xl font-semibold text-[#CCD6F6] hover:text-white"
        >
          About Me
        </a>
        <Link
          to="/blogs"
          className="mr-4 lg:text-xl font-semibold text-[#CCD6F6] hover:text-white"
        >Blogs</Link>
        
      </li>
    </>
  );
  return (
    <div className="">
      
      <div className="navbar lg:flex   bgColor lg:px-14">

        <div className="navbar-start ">
          <div className="dropdown lg:hidden  ">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu bgColor menu-compact dropdown-content mt-3 p-2 border rounded-box w-52"
            >
         {menuItems}
            </ul>
          </div>
        <ul className="hidden  lg:block">
        { menuItems}
        </ul>
        </div>

        <div className="navbar-end   ">
        <Link className="flex items-end" to='/'>
          <img src={logo} className='w-14' alt="logo"/>
          <span className="text-2xl text-sky-400">ifat</span>
          </Link>
        </div>
     
      </div>
      <hr />
    </div>
  );
};

export default Header;
