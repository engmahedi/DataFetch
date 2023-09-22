

import React from 'react';
import BuySaleCard from './BuySaleCard';
import Image1 from '../assets/img/trading.png';
import Image2 from '../assets/img/buying.png';
import Image3 from '../assets/img/secure.png';
import Image4 from '../assets/img/planning.png';
import Image5 from '../assets/img/insurance.png';
import Image6 from '../assets/img/transaction.png';
import SectionHeading from './SectionHeading';

const BuyandSale = () => {
  const buySale = [
    {
      id: 1,
      image:Image1,
      title:"INSTANT TRADING",
      subTitle:"Lorem Ipsum is simply dummy text of the printing and typesg indtrysum has been the Ipsum dummy of the printing indus .",
    },
    {
      id: 2,
      image:Image2,
      title:"RECURRING BUYING",
      subTitle:"Lorem Ipsum is simply dummy text of the printing and typesg indtrysum has been the Ipsum dummy of the printing indus .",
    },
    {
      id: 3,
      image:Image3,
      title:"SAFE AND SECURE",
      subTitle:"Lorem Ipsum is simply dummy text of the printing and typesg indtrysum has been the Ipsum dummy of the printing indus .",
    },
    {
      id: 4,
      image:Image4,
      title:"INVESTMENT PLANNING",
      subTitle:"Lorem Ipsum is simply dummy text of the printing and typesg indtrysum has been the Ipsum dummy of the printing indus .",
    },
    {
      id: 5,
      image:Image5,
      title:"COVERED BY INSURANCE",
      subTitle:"Lorem Ipsum is simply dummy text of the printing and typesg indtrysum has been the Ipsum dummy of the printing indus .",
    },
    {
      id: 6,
      image:Image6,
      title:"BITCOIN TRANSACTION",
      subTitle:"Lorem Ipsum is simply dummy text of the printing and typesg indtrysum has been the Ipsum dummy of the printing indus .",
    }
  ];

  return (
    <>
      <div className='container mx-auto py-20'>
        <div className='text-center'>
            <SectionHeading item={{subtitle:'Buy and Sell Bitcoin', title:'WHY CHOOSE BITCOIN'}} />
            
        </div>

        

        <div className='flex justify-center gap-3 flex-wrap mt-10'>
          {
            buySale.map((u) => <BuySaleCard key={u.id} item={ u} />)
          }
        </div>
       
          
      </div>
      
    </>
  );
};

export default BuyandSale;