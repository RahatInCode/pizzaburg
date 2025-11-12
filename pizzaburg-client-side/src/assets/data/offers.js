// src/assets/data/offers.js
const offers = [
  {
    id: 1,
    title: "Weekend Family Deal",
    description: "Get 2 Large Pizzas + 1 Garlic Bread + 2L Coke",
    originalPrice: 55.99,
    offerPrice: 39.99,
    discount: 29,
    validUntil: "2024-02-29",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600",
    code: "WEEKEND29",
    popular: true
  },
  {
    id: 2,
    title: "Buy 1 Get 1 Free",
    description: "Order any Large Pizza and get another one absolutely FREE!",
    originalPrice: 32.99,
    offerPrice: 16.50,
    discount: 50,
    validUntil: "2024-02-15",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600",
    code: "BOGO50",
    popular: true
  },
  {
    id: 3,
    title: "Student Special",
    description: "Show your student ID and get 25% off on all pizzas",
    originalPrice: 28.99,
    offerPrice: 21.74,
    discount: 25,
    validUntil: "2024-03-31",
    image: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=600",
    code: "STUDENT25",
    popular: false
  },
  {
    id: 4,
    title: "Lunch Time Combo",
    description: "Medium Pizza + Fries + Drink at unbeatable price",
    originalPrice: 24.99,
    offerPrice: 17.99,
    validUntil: "2024-02-20",
    discount: 28,
    image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=600",
    code: "LUNCH28",
    popular: false
  },
  {
    id: 5,
    title: "Late Night Cravings",
    description: "Order after 10 PM and get 30% off on all orders",
    originalPrice: 45.99,
    offerPrice: 32.19,
    discount: 30,
    validUntil: "2024-02-28",
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=600",
    code: "NIGHT30",
    popular: true
  },
  {
    id: 6,
    title: "First Order Special",
    description: "New customer? Get 40% off on your first order!",
    originalPrice: 35.99,
    offerPrice: 21.59,
    discount: 40,
    validUntil: "2024-03-15",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600",
    code: "FIRST40",
    popular: true
  }
];

export default offers;