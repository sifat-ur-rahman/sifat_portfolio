import React from 'react';
import { Outlet } from 'react-router-dom';
import Foonter from '../Pages/Footer/Foonter';
import Header from '../Pages/Header/Header';

const Main = () => {
    return (
        <div>
           <div className=''>
           <Header />
           </div>
         <div className=''>
         <Outlet/>
         </div>
         <Foonter/>
        </div>
    );
};

export default Main;