import { Link } from "react-router-dom";



const CoinCard = ({ item }) => {
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        
        <div className="card-body">
          <div className="flex justify-center">
            <img src={item.image} alt="img" className="w-48" />
          </div>

          <div>
            <h3 className="text-xl font-semibold">{item.name}</h3>
            <p className="badge badge-info">{item.symbol}</p>
          </div>

          <div className="card-actions flex justify-center">
            
            <Link to={`/${item.id}`}>
              <button className="btn btn-primary text-white">Details</button>
            </Link>
            
              
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinCard;
