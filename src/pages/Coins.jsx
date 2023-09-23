import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import CoinCard from "../components/CoinCard";
import BackgroundImage from "../components/BackgroundImage";
import SectionHeading from "../components/SectionHeading";
import Footer from "../components/Footer";




const Coins = () => {

  const [coins, setCoins] = useState([]);
  
  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false')
      .then((res) => res.json())
      .then((data)=>setCoins(data))
  },[])



  return (
    <div >
      <Navbar />
      <BackgroundImage />
      

      <div className="container mx-auto mt-10">
      <div className="flex gap-3 flex-wrap justify-center">
        {

          
          
          coins.map((u)=> <CoinCard key={u.id} item={u} />)
        }
      </div>
      </div>
      <Footer />

      
    </div>
  );
};

export default Coins;