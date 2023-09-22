
import React from 'react';

const SectionHeading = ({ item }) => (
  <div>
    <h4 className='text-2xl text-slate-400'>{item.subtitle}</h4>
    <h2 className='text-5xl py-3 mb-5'>{item.title}</h2>
    <div className='w-20 h-1 bg-orange-400 mx-auto'></div>
  </div>
);

export default SectionHeading;
