

import React from 'react';

const BuySaleCard = ({item}) => {
  return (
    <div>
        <div className="card w-96 bg-base-200 border-8 border-transparent p-5 hover:border-8 hover:border-orange-400 transition">
          <div>
          
            <figure className="px-10 ">
              <img src={item.image} alt="img" className="w-28" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="font-bold text-xl">{item.title}</h2>
              <p>{item.subTitle}.</p>
          </div>
          
              
            </div>
        </div>
    </div>
  );
};

export default BuySaleCard;