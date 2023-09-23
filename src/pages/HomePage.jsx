import BlogPost from "../components/BlogPost";
import BuyandSale from "../components/BuyandSale";
import Consultent from "../components/Consultent";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
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
      <BlogPost />
      <Footer />
      
    </div>
  );
};

export default HomePage;