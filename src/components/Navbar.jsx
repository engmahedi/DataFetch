import Menu from "./Menu";




const Navbar = () => {
  return (
    <div className="bg-base-200 py-5 sticky top-0 z-10">

      <div className="container mx-auto  ">
            
                <div className=" navbar bg-base-200 ">
                  <div className="navbar-start">
                    <a href="/" className=" text-3xl font-bold">CoinShop</a>
                  </div>
                  <div className="navbar-center">
                  <Menu />
                  </div>
                  <div className="navbar-end"> 
                  <a className="btn bg-teal-400">Buy Now</a>
                  </div>
                </div>
            
          </div>

    </div>
    
  );
};

export default Navbar;