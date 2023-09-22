
import React from 'react';
import SingleContac from './SingleContact';

const Contact = () => {
  return (
    <>
      <div className='flex items-center'>
        <div className='w-[50%] h-60 bg-slate-500 py-14'>
          <div className='text-center text-white'>
            <h2 className='text-2xl font-bold'>ANY QUERY?</h2>
            <p className='px-60 py-3 '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</p>
            <p className='font-semibold text-orange-400 text-xl'>0 321 576 444</p>
          </div>
        </div>
        <div className='w-[50%] h-60 bg-orange-500 py-10'>
        <div className='text-center text-white'>
            <h2 className='text-2xl font-bold'>CONTACT US</h2>
            <p className='px-60 py-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</p>
            <p className='font-semibold text-slate-500 text-xl'>support@bitinvest.com</p>
          </div>
        </div>
          
      </div>
      
    </>
  );
};

export default Contact;