

import React from 'react';


const SinglePost = ({item}) => {
  return (
    <div>
      <div className="card w-96 bg-white rounded-none border-b-8 border-orange-400 hover:border-primary transition">
        <figure><img src={item.image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="text-2xl font-semibold cursor-pointer hover:text-orange-400 transition">{item.title}</h2>
          <p>{item.text}</p>
          
        </div>
</div>
      
    </div>
  );
};

export default SinglePost;