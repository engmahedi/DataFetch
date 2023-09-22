

import React from 'react';
import SectionHeading from './SectionHeading';
import SingleConsultent from './SingleConsultent';
import Profile1 from '../assets/img/profile1.jpg';
import Profile2 from '../assets/img/profile2.jpg';
import Profile3 from '../assets/img/profile3.jpg';

const Consultent = () => {

  const consultent = [
    {
      id: 1,
      image:Profile1,
      name:"Richard Wagner",
      title:"Consultant"
    },
    {
      id: 2,
      image:Profile2,
      name:"Lisa Anderson",
      title:"Ceo & Founder"
    },
    {
      id: 3,
      image:Profile3,
      name:"Tommy Atkins",
      title:"Manager"
    }
  ]

  return (
    <div className='py-10'>
      <div className='container mx-auto'>
        <div className='text-center'>
          <SectionHeading item={{subtitle:"Work With Us", title:"OUR CONSULTANTS"}} />
        </div>
        <div className='flex gap-5 justify-center py-10'>

          {
            consultent.map((u) => <SingleConsultent key={u.id} item={ u} />)
          }

          
        </div>


      </div>
      

      
    </div>
  );
};

export default Consultent;