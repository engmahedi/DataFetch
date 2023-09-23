



import React from 'react';
import Bgcoin from "../assets/img/bg-coin.png";
import BgLaptop from "../assets/img/bg-laptop.png";
import SectionHeading from './SectionHeading';


const NewCurrency = () => {
  return (
    <>
      <div className='w-[100%] bg-cover bg-no-repeat mt-20 ' style={{backgroundPositionX:'right',backgroundPositionY:'bottom',backgroundSize:'600px',backgroundImage:`url(${Bgcoin})`}}>

        <div className='flex'>
          <div className='w-[50%]'>
            <img src={BgLaptop} alt="" className='pl-40' />
          </div>
          <div className=' w-[50%] text-center px-10'>
            <SectionHeading item={{ subtitle: "What is bitcoin", title: "NEW CURRENCY BITCOIN" }} />
            <div className='text-left'>
              <p className='text-left block py-5 font-bold text-slate-500'>Lorem Ipsum has been the industry's standard dummy text ever since the when. it to make a tyLorem Ipsum is simply dummy text of the printing and typesetting indust</p>
              <p className='text-slate-500'>when an unknown printer took a galley of type and scrambled it to make a tyLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.</p>
            </div>
            <div className='mt-10 flex justify-center gap-3'>
              <button className='px-7 py-2 text-white font-semibold bg-orange-500'>READ MORE</button>
              <button className='px-7 py-2 text-white font-semibold bg-slate-600'>CONTACT US</button>
            </div>
          </div>
        </div>

      </div>
      
    </>
  );
};

export default NewCurrency;