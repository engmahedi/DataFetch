

import React from 'react';
import BgImage from "../assets/img/Bg1.jpg";


const Hero = () => {
  return (
    <>
      <div className="h-[90vh] bg-cover bg-no-repeat" style={{backgroundImage:`url(${BgImage})`}}>
          <div className='w-[100%] h-[90vh] bg-gradient-to-t from-slate-600 z-10>'>
            <div className='text-center text-white p-52 w-[60%] mx-auto'>
            <h1 className='text-5xl font-bold'>Invest In The Future Of Currency</h1>
            <p className='px-20 py-5 text-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti similique odit, nostrum culpa repellendus ea architecto nihil quas. Quos beatae explicabo ipsum, rem ea quod est iure voluptates maiores consequatur!</p>
              <div className=" flex justify-center"> 
                  <a className="btn bg-teal-400 px-8">Details</a>
              </div>
            </div>
          </div>
      </div>
 
      
    </>
  );
};

export default Hero;