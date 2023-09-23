import { useEffect, useState } from "react";
import BackgroundImage from "../components/BackgroundImage";
import Navbar from "../components/Navbar";
import NewsCard from "../components/NewsCard";
import Footer from "../components/Footer";




const News = () => {

  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data)=>setNews(data))
  })

  return (
    <div >
      <Navbar />
      <BackgroundImage />
      <div className="container mx-auto mt-10">
        <div className="flex gap-5 flex-wrap justify-center">
        {
          news.map((u) => <NewsCard key={u.id} item={ u} />)
        }
        </div>
        

      </div>
      <Footer />
      
      
    </div>
  );
};

export default News;