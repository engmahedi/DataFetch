

import React from 'react';


const WorkCard = ({item}) => {
  return (
    <>
      <div>
        <div className="card w-96 bg-base-200 shadow-xl p-10 hover:bg-blue-300 hover:text-white transition">
          <div>
          <div className=" flex justify-end">
              <span className='w-16 h-16 bg-primary rounded-full flex items-center justify-center font-bold text-slate-600 text-4xl'>{item.id }</span>
          </div>
            <figure className="px-10 ">
              <img src={item.image} alt="img" className="w-28" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{item.title}</h2>
              <p>{item.subTitle}.</p>
          </div>
          
              
            </div>
        </div>
      </div>
      
    </>
  );
};

export default WorkCard;