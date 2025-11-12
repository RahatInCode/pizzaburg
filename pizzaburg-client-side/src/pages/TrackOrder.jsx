import React, { useEffect } from 'react';
import useTabTitleChanger from '../components/useTabTitleChanger';

const TrackOrder = () => {
       useTabTitleChanger();
  useEffect(() => {
    document.title = "Home | Pizzaburg 🍕";
  }, []);
    useEffect(() => {
    document.title = "Track Your Order | Pizzaburg 🍕";
  }, []);
    return (
        <div>
            <h1>where is my order??</h1>
        </div>
    );
};

export default TrackOrder;