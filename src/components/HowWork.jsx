

import React from 'react';
import SectionHeading from './SectionHeading';
import WorkCard from './WorkCard';
import Image1 from '../assets/img/wallet.png';
import Image2 from '../assets/img/payment.png';
import Image3 from '../assets/img/order.png';

const HowWork = () => {

  const cardData = [
    {
      id: 1,
      image: Image1,
      title:"CREATE YOUR WALLET",
      subTitle:"Lorem Ipsum is simply dummy text of the printing and typesg indtrysum has been the Ipsum dummy of the printing indus ",
    },
    {
      id: 2,
      image: Image2,
      title:"MAKE PAYMENTS",
      subTitle:"Lorem Ipsum is simply dummy text of the printing and typesg indtrysum has been the Ipsum dummy of the printing indus ",
    },
    {
      id: 3,
      image: Image3,
      title:"BUY OR SELL ORDERS",
      subTitle:"Lorem Ipsum is simply dummy text of the printing and typesg indtrysum has been the Ipsum dummy of the printing indus ",
    }
  ]


  return (
    <div className='bg-slate-100'>
      <div className='container mx-auto py-20 '>
          <div className='text-center'>
            <SectionHeading  item={{subtitle:"Three steps bticoin", title:"HOW IT WORK"}} />
        </div>
        <div className='flex gap-5 justify-center py-10'>
          {
            cardData.map((u) => <WorkCard key={u.id } item={u} />)
          }
        </div>
        

      </div>
    </div>

    
  );
};

export default HowWork;