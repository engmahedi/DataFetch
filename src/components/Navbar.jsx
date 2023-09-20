import Menu from "./Menu";




const Navbar = () => {
  return (
    <div className="container mx-auto py-5">
      
          <div className="navbar bg-base-100">
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
  );
};

export default Navbar;