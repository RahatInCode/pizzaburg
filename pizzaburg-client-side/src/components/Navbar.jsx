import React from 'react';
import { NavLink } from 'react-router';
import { FaShoppingCart } from 'react-icons/fa';


const Navbar = () => {
 const links = (
    <>
      <li><NavLink to="/" className={({ isActive }) => isActive ? "text-orange-600 font-bold" : ""}>Home</NavLink></li>
      <li><NavLink to="/Menu" className={({ isActive }) => isActive ? "text-orange-600 font-bold " : ""}>Menu</NavLink></li>
      <li><NavLink to="/Offers" className={({ isActive }) => isActive ? "text-orange-600 font-bold " : ""}>Offers</NavLink></li>
      <li><NavLink to="/TrackOrder" className={({ isActive }) => isActive ? "text-orange-600 font-bold" : ""}>Track Order</NavLink></li>
      

     
    </>
  );
    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Pizzaburg</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {links}
    </ul>
  </div>
  <div className="navbar-end flex items-center gap-4">
 <button className="relative group">
    <FaShoppingCart className="text-lg text-gray-600 group-hover:text-orange-500 transition" />
    <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-[10px] px-[6px] rounded-full leading-none">
      3
    </span>
  </button>
  <NavLink to="/Dashboard" className={({ isActive }) => isActive ? "text-orange-600 font-bold" : ""}>Dashboard</NavLink>
  <a className="btn">Register</a>
</div>

</div>
    );
};

export default Navbar;