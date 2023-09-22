

import React from 'react';
import SocialIcon from './SocialIcon';



const SingleConsultent = ({item}) => {

  return (
    <div>
      <div>
        
          
          <div className="card w-96 bg-base-100 rounded-none">
          <figure><img src={item.image} alt="img" /></figure>
          <div className="card-body">
            <h2 className="text-center text-2xl font-semibold hover:text-orange-400 transition cursor-pointer">{item.name}</h2>
            <p className='text-center py-3'>{item.title}</p>
            <div className="">
              <SocialIcon />
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default SingleConsultent;