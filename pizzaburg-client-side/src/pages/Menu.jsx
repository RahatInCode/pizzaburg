import React, { useEffect } from 'react';
import useTabTitleChanger from '../components/useTabTitleChanger';

const Menu = () => {
       useTabTitleChanger();
  useEffect(() => {
    document.title = "Home | Pizzaburg 🍕";
  }, []);
    useEffect(() => {
    document.title = "Menu | Pizzaburg 🍕";
  }, []);
    return (
       <>
      <div className='bg-base-300 min-h-screen pt-8'>
          <div className=' bg-white rounded shadow-lg p-8 w-full mt-10'>
            <h1 className='text-4xl font-bold'>🍕Pizzaburg</h1>
            <p>Discover our delicious selection of pizzas, burgers, and more!</p>
        </div>

         <div className="flex flex-col lg:flex-row gap-6 mt-10 p-4">
        {/* Sidebar */}
        <div className="bg-white shadow-lg rounded-lg p-6 w-full lg:w-64">
          <h2 className="text-xl font-semibold mb-4">Filter</h2>

          {/* 🔍 Search */}
          <input
            type="text"
            placeholder="Search..."
            className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
          />

          {/* 🧭 Categories */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Categories</h3>
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input type="checkbox" />
                <span>🍕Pizza</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" />
                <span>🍔Burger</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" />
                <span>🍟Sides</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" />
                <span>🥂Drinks</span>
              </label>
            </div>
          </div>

          {/* 🔀 Sort By */}
          <div>
            <h3 className="font-semibold mb-2">Sort By</h3>
            <select className="w-full px-3 py-2 border rounded">
              <option>Relevance</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Popular</option>
            </select>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-bold mb-4">Our Menu</h1>
          {/* Here you’d map menu items */}
          <p>Menu items go here...</p>
        </div>
      </div>
      </div>
       
       
       </>
    );
};

export default Menu;