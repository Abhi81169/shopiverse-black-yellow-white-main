// src/pages/NewArrivals.tsx
import ProductList from "../components/ProductList";

const newArrivalProducts = [
  { name: "Stylish Jacket", imageUrl: "https://via.placeholder.com/300x400?text=Jacket", price: "$49.99" },
  { name: "Classic Sneakers", imageUrl: "https://via.placeholder.com/300x400?text=Sneakers", price: "$59.99" },
  { name: "Denim Jeans", imageUrl: "https://via.placeholder.com/300x400?text=Jeans", price: "$39.99" },
  { name: "Tote Bag", imageUrl: "https://via.placeholder.com/300x400?text=Bag", price: "$29.99" },
];

const NewArrivals = () => {
  return <ProductList title="New Arrivals" products={newArrivalProducts} />;
};

export default NewArrivals;
