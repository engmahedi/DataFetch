import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";




const SingleNews = () => {

  const { id } = useParams();

  const [oneNews, setOneNews] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data)=>setOneNews(data))
    },[])
  

  return (
    <div className="">
      <Navbar />
      <div className="container mx-auto p-10 bg-slate-100 w-[60%]">
        
      <h2 className="text-2xl font-semibold py-3">{oneNews.title }</h2>
      <p>{oneNews.body }</p>
      </div>
      
      
      
    </div>
  );
};

export default SingleNews;