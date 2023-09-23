import BuyandSale from "../components/BuyandSale";
import Consultent from "../components/Consultent";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import HowWork from "../components/HowWork";
import Navbar from "../components/Navbar";
import NewCurrency from "../components/NewCurrency";
import Request from "../components/Request";





const HomePage = () => {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <HowWork />
      <Consultent />
      <Contact />
      <BuyandSale />
      <NewCurrency />
      <Request />
      
    </div>
  );
};

export default HomePage;