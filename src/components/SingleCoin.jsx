import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Image1 from "../assets/img/btc.png";




const SingleCoin = () => {

  const { id } = useParams();
  
  const [coin, setCoin] = useState([])
  
  useEffect(() => {
    fetch(`http://localhost:5173/coin/${id}`)
      .then((res) => res.json())
      .then((data)=>setCoin(data))

  },[])

  console.log(id)
  return (
    <div className="container mx-auto">
      <Navbar />
      <div className="card lg:card-side bg-base-100 mt-8 text-center">
        <figure><img src={Image1} alt="Album" className="w-52"/></figure>
        <div className="card-body">
          <h2 className="card-title">New album is released!</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          
        </div>
      </div>
    </div>
  );
};

export default SingleCoin;