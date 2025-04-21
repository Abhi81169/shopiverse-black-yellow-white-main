// src/components/ProductList.tsx
import React from "react";

interface Product {
  name: string;
  imageUrl: string;
  price: string;
  discountPercentage?: number;
}

interface ProductListProps {
  products: Product[];
  title: string;
}

const ProductList: React.FC<ProductListProps> = ({ products, title }) => {
  const formatCurrency = (value: number) => `$${value.toFixed(2)}`;
  const parsePrice = (price: string) => parseFloat(price.replace("$", ""));

  return (
    <div className="px-4 py-6">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product, index) => {
          const originalPrice = parsePrice(product.price);
          const hasDiscount = !!product.discountPercentage;
          const discountedPrice = hasDiscount
            ? originalPrice - (originalPrice * product.discountPercentage!) / 100
            : originalPrice;

          return (
            <div
              key={index}
              className="relative border rounded-md p-3 shadow-sm hover:shadow-md transition"
            >
              {hasDiscount && (
                <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded shadow-md">
                  {product.discountPercentage}% OFF
                </div>
              )}
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-48 object-cover rounded-md mb-2"
              />
              <h3 className="text-lg font-medium">{product.name}</h3>

              <div className="mt-1">
                {hasDiscount ? (
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-500 line-through">
                      {formatCurrency(originalPrice)}
                    </span>
                    <span className="text-red-600 font-semibold">
                      {formatCurrency(discountedPrice)}
                    </span>
                  </div>
                ) : (
                  <p className="text-gray-700">{product.price}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
