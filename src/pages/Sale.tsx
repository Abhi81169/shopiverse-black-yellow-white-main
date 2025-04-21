// src/pages/Sale.tsx
import ProductList from "../components/ProductList";


const saleProducts = [
  {
    name: "Striped Polo Shirt",
    imageUrl: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcScVUdlCJA-fX2BZznQn0nKrM30wu3SgP_AnhTjAZbLmfHu3E6HkekKuoTjxwXdXifASQaLuEwt0fDh-wTLWob92v53WY52TCPqSacCZunhLxpdr6v3dG74",
    price: "$199",
    discountPercentage: 25,
  },
  {
    name: "Slim Fit Pants",
    imageUrl: "https://via.placeholder.com/300x400?text=Pants",
    price: "$199",
    discountPercentage: 30,
  },
  {
    name: "Summer Hat",
    imageUrl: "https://via.placeholder.com/300x400?text=Hat",
    price: "$999",
    discountPercentage: 15,
  },
  {
    name: "Canvas Backpack",
    imageUrl: "https://via.placeholder.com/300x400?text=Backpack",
    price: "$249",
    discountPercentage: 20,
  },
];

const Sale = () => {
return <ProductList title="Sale Items" products={saleProducts} />;
};

export default Sale;
