
import React from 'react';
import BgRequest from '../assets/img/bg2.jpg';
import PersonImg from '../assets/img/st-1.png';
import SectionHeading from './SectionHeading';

const Request = () => {
  return (
    <div>
      <div className='h-[550px] mb-10 bg-center bg-cover bg-no-repeat  relative' style={{ backgroundImage: `url(${BgRequest})` }}>

        <div className='w-[100%] h-[550px] bg-slate-900 opacity-70  '>
          
          
        </div>
        <div className='  text-white p-40 w-[60%] absolute top-1 left-60 '>
                <div className='w-[60%] absolute top-3 mb-0 z-10 text-center'>
                <SectionHeading className="text-white " item={{title:"REQUEST A CALL BACK"}} />
                </div>
          <div  className=''>
                <div className='flex gap-5 '>
                  <input type="text" placeholder="Name" className="input rounded-none w-full max-w-xs" />
                  <input type="email" placeholder="Email" className="input rounded-none w-full max-w-xs" />
                
                </div>
                <div className='flex gap-5 py-4'>
                  <input type="text" placeholder="Phone" className="input rounded-none w-full max-w-xs" />
                  <input type="email" placeholder="Subject" className="input rounded-none w-full max-w-xs" />
                
                </div>
                <div className='flex gap-5 py-4'>
              <textarea className="textarea rounded-none w-[80%] h-28" placeholder="Bio"></textarea>
            </div>
            <div className='text-center mr-40 py-5'>
            <button className='bg-primary w-[100%] py-3 text-xl font-semibold'>SUBMIT</button>
            </div>
            
          </div>
                
            
            </div>
        
        <div className='w-[40%]  '>
            <img src={PersonImg} alt="img" className='absolute bottom-0 right-96'/>

          </div>
        

      </div>
      
    </div>
  );
};

export default Request;