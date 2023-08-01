import React from 'react';
import { Link } from 'react-router-dom';





const SingleCard = ({singleData}) => {
    const{Img,title, desc, router} = singleData;
    return (
        <div title={desc}  className="card border cursor-default">
        <figure>
          <img  src={Img} className='' alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl">{title.slice(0, 60)} </h2>
          <p className='text-xl flex justify-around'>{desc.slice(0, 100)}</p>
          <div className="card-actions justify-end">

            <Link to={`/${router}`}>
            <button className=" btn  btn-outline text-xl px-8 bgColor rounded-full">
                Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default SingleCard;