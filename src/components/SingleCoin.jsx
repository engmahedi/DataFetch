
import React from 'react';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";


const SingleCoin = () => {
  const { id } = useParams();

  const [coin, setCoin] = useState([]); 

  useEffect(() => {
    fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
      .then((res) => res.json())
      .then((data) => setCoin(data));
  }, []); 

  return (
    <div className="container mx-auto">
      <Navbar />
      <div className=''>
        <div className="w-[60%] mx-auto bg-base-100 mt-8 flex justify-center items-center gap-10 py-10 shadow-lg">
          
          <div>
          <img src={coin.image} alt={coin.name} className="w-48" />
          {/* <img src={coin.image} alt={coin.name} className="w-80" /> */}
        </div>
        <div>
          <h2 className="text-xl font-bold">{coin.name}</h2>
          <p className='text-lg'>{coin.current_price}</p>
        </div> 
      </div>
        
      </div>
    </div>
  );
};

export default SingleCoin;
