import Footer from "../components/Footer";
import Navbar from "../components/Navbar";




const NotFoundPage = () => {
  return (
    <div >
      <Navbar />
      <div className="container mx-auto">
      <div className="flex justify-center items-center h-[73vh] py-52">
      <h2 className="text-5xl font-semibold">Page Not Found</h2>
      </div>
      </div>
      
      <Footer />
      
    </div>
  );
};

export default NotFoundPage;