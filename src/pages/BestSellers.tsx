// src/pages/BestSellers.tsx
import ProductList from "../components/ProductList";

const bestSellers = [
  { name: "Graphic T-Shirt", imageUrl: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRNR62penoO5e9BwuM5I4ORGqnlhJHu7Xob38rsw2nRF4klzwUdVZ7wDMLy4uGnmolZg0pdezxEeaucRHhIH9tTn_N1t73desaK4djjtfFHxuMnq9Hay3WaYA", price: "₹199" },
  { name: "Running Shoes", imageUrl: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT6znYCbUOCHaxR-vaJIc34ThnP36WFG7b4iNff534Ms_yh34xmKq2ptaTQpixZVEhmjWKnAgC7QGOD7kHk9w2bxlOTfysagLEy06wddvaRnpOV5IBw7rBj", price: "₹699" },
  { name: "Leather Wallet", imageUrl: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTh-b1uS9A7g7nTCDL1CoEDJErbeJ4L-g1JjQposVCv3HIXR8E-xJx405y7bbhW4ah3YldyPndzFETIt3i2OVcKrnUxIHsuC9UTvJwXWgPpe6Ihrw16XPvU6w", price: "₹299" },
  { name: "Hooded Sweatshirt", imageUrl: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR2QqGQFZr50UquzcSSK2cVngMDBINuaYk3dqEWG5rWG9aAU3XXd09oQ7UbqY3Fb4hFKoMv6mf4Cp4gMptqvf_eOy2mOmpqP2ZSR7FUGwKFfo9ypKBZtivjpA", price: "₹449" },
];

const BestSellers = () => {
  return <ProductList title="Best Sellers" products={bestSellers} />;
};

export default BestSellers;
