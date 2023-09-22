import BuyandSale from "../components/BuyandSale";
import Consultent from "../components/Consultent";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import HowWork from "../components/HowWork";
import Navbar from "../components/Navbar";





const HomePage = () => {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <HowWork />
      <Consultent />
      <Contact />
      <BuyandSale />
      
    </div>
  );
};

export default HomePage;