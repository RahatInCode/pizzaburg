import React, { useEffect } from 'react';
import useTabTitleChanger from '../components/useTabTitleChanger';

const Offers = () => {
       useTabTitleChanger();
  useEffect(() => {
    document.title = "Home | Pizzaburg 🍕";
  }, []);
    useEffect(() => {
    document.title = "Offers | Pizzaburg 🍕";
  }, []);
    return (
        <div>
            <h1>offers nei</h1>
        </div>
    );
};

export default Offers;