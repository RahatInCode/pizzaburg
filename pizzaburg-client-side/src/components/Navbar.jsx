import React, { useState } from "react";
import { NavLink } from "react-router";
import '../../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import "../index.css"; 

const Navbar = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const cartItems = [
    { name: "Pepperoni Pizza", price: 12 },
    { name: "Fries", price: 5 },
  ];

  const toggleCart = () => setCartOpen(!cartOpen);

  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <header>
      {/* Top Bar */}
      <div className="bg-[#be1c2c] text-white flex flex-col md:flex-row md:items-center justify-between px-6 py-4 space-y-3 md:space-y-0">
        {/* Logo */}
        <h1 className="text-3xl pizzaro-font">Pizzaro</h1>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center md:space-x-6 font-semibold">
          <NavLink to="/order" className={({ isActive }) => isActive ? "text-yellow-300" : "hover:underline"}>Order Online</NavLink>
          <NavLink to="/pages" className={({ isActive }) => isActive ? "text-yellow-300" : "hover:underline"}>Pages</NavLink>
          <NavLink to="/news" className={({ isActive }) => isActive ? "text-yellow-300" : "hover:underline"}>News</NavLink>
          <NavLink to="/stores" className={({ isActive }) => isActive ? "text-yellow-300" : "hover:underline"}>Store Locator</NavLink>
        </nav>

        {/* Contact & Cart */}
        <div className="flex items-center space-x-6 relative">
          <div className="text-right text-sm">
            <p className="text-yellow-300 font-semibold">Call and Order in</p>
            <p className="text-xl font-bold">54 548 779 654</p>
          </div>
          <button
            onMouseEnter={toggleCart}
            onMouseLeave={toggleCart}
            className="bg-[#8dc63f] text-white px-4 py-2 rounded-full font-semibold text-sm flex items-center gap-2 relative z-10">
            <i className="fa-solid fa-motorcycle"></i>
            Your Cart ({cartItems.length})
          </button>
          {/* Hover Cart Dropdown */}
          {cartOpen && (
            <div
              onMouseEnter={() => setCartOpen(true)}
              onMouseLeave={() => setCartOpen(false)}
              className="absolute top-14 right-0 bg-white text-black shadow-lg p-4 rounded-md w-64 z-20 animate-fadeIn">
              <h3 className="font-bold mb-2">Cart Summary</h3>
              <ul>
                {cartItems.map((item, index) => (
                  <li key={index} className="flex justify-between border-b py-1">
                    <span>{item.name}</span>
                    <span>${item.price}</span>
                  </li>
                ))}
              </ul>
              <div className="font-bold mt-2 flex justify-between">
                <span>Total:</span>
                <span>${total}</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Category Icons */}
      <div className="bg-[#be1c2c] text-white flex flex-wrap justify-center gap-6 py-4 text-sm font-medium">
        {[
          { icon: "fa-pizza-slice", label: "Pizza" },
          { icon: "fa-burger", label: "Burgers" },
          { icon: "fa-bowl-food", label: "Salads" },
          { icon: "fa-utensils", label: "Wraps" },
          { icon: "fa-fire", label: "Fries" },
          { icon: "fa-mug-hot", label: "Drinks" },
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center">
            <i className={`fa-solid ${item.icon} text-xl mb-1`}></i>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </header>
  );
};

export default Navbar;



