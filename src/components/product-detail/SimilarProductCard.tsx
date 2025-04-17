
import { Card, CardContent } from '@/components/ui/card';
import { Product } from '@/types';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SimilarProductCardProps {
  product: Product;
}

const SimilarProductCard = ({ product }: SimilarProductCardProps) => {
  // Generate a random rating between 3.5 and 5
   const rating = (Math.random() * 1.5 + 3.5).toFixed(1);
//  function getUpdatedAverage(oldAverage: number, totalRatings: number, newRating: number): number {
//   const newTotal = totalRatings + 1;
//   const updatedAverage = (oldAverage * totalRatings + newRating) / newTotal;
//   return parseFloat(updatedAverage.toFixed(1)); // Round to 2 decimal places
// }

  return (
    <Card className="overflow-hidden h-full">
      <Link to={`/product/${product.id}`} className="block">
        <div className="aspect-square overflow-hidden h-auto">
          <img 
            src={product.imageUrl}
            alt={product.name}
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
          />
        </div>
        <CardContent className="p-1.5">
          <h3 className="font-medium text-[10px] truncate hover:text-brand-yellow transition-colors">
            {product.name}
          </h3>
          <p className="text-muted-foreground text-[10px] mb-0.5">{product.category}</p>
          <p className="font-bold text-[11px]">₹{product.price.toFixed(1)}</p>
          <p className="text-[9px] text-gray-500">{product.source}</p>
          <div className="flex items-center mt-0.5">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={8} 
                  className={i < Math.floor(Number(rating)) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} 
                />
              ))}
            </div>
            <span className="text-[8px] ml-1 text-gray-600">{rating}</span>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
};

export default SimilarProductCard;
