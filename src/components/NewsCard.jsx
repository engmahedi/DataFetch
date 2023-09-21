import { Link } from "react-router-dom";




const NewsCard = ({item}) => {
  return (
    <div>
      <div className="">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{item.title }</h2>
          <p>{item.body }</p>
            <div className="card-actions justify-end">
              <Link to={`/${item.id}`}>
              <button className="btn btn-primary">Read More</button>
              </Link>
            
          </div>
          </div>
        </div>

        <h2></h2>
        <p></p>
      </div>
      
    </div>
  );
};

export default NewsCard;