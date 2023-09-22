import { NavLink } from "react-router-dom";




const Menu = () => {
  return (
    <div>
      <ul className=" flex gap-5">
        <li><NavLink className={({ isActive }) => isActive ? "text-primary text-xl font-bold border-b-2 border-slate-600" : "text-lg font-semibold"} to="/">Home</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? "text-primary text-xl font-bold border-b-2 border-slate-600" : "text-lg font-semibold"} to="/coin">Coins</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? "text-primary text-xl font-bold border-b-2 border-slate-600" : "text-lg font-semibold"} to="/news">News</NavLink></li>
        
      </ul>
    </div>
  );
};

export default Menu;