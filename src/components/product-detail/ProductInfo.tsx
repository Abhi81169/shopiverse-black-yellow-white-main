import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import { useWishlist } from '@/hooks/use-wishlist';
import { Product } from '@/types';
import { Heart, Share2 } from 'lucide-react';
import React from 'react';

interface ProductInfoProps {
  product: Product;
  quantity: number;
  setQuantity: (quantity: number) => void;
}

const ProductInfo = ({ product, quantity, setQuantity, ...props }: ProductInfoProps) => {
  const { addToWishlist, isInWishlist } = useWishlist();
  const [selectedSize, setSelectedSize] = React.useState("M");

  const handleToggleWishlist = () => {
    addToWishlist(product);
  };

  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  const productHighlights = [
    "Premium quality material",
    "Comfortable fit for all-day wear",
    "Machine washable, easy care",
    "Available in multiple colors",
    "Eco-friendly manufacturing process"
  ];

  const ratings = {
    average: 4.2,
    count: 128,
    distribution: [
      { stars: 5, percentage: 62 },
      { stars: 4, percentage: 20 },
      { stars: 3, percentage: 10 },
      { stars: 2, percentage: 5 },
      { stars: 1, percentage: 3 }
    ],
    reviews: [
      { id: 1, user: "Sarah J.", rating: 5, comment: "Love it! Perfect fit and great quality.", date: "2023-12-10" },
      { id: 2, user: "Mike T.", rating: 4, comment: "Good product, fast shipping.", date: "2023-11-22" },
      { id: 3, user: "Lisa M.", rating: 5, comment: "Exactly as described. Would buy again!", date: "2023-11-15" }
    ]
  };

  return (
    <div className="w-full md:w-1/2">
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <p className="text-xl font-semibold mt-2">₹{product.price.toFixed(2)}</p>
      <p className="text-sm text-muted-foreground mt-2">Category: {product.category}</p>
      
      <div className="mt-6">
        <p className="text-gray-700">{product.description}</p>
      </div>

      {/* Select Size Container */}
      <div className="mt-6 border p-4 rounded-md bg-gray-50">
        <h3 className="font-semibold mb-3">Select Size</h3>
        <RadioGroup 
          value={selectedSize} 
          onValueChange={setSelectedSize}
          className="flex flex-wrap gap-2"
        >
          {sizes.map((size) => (
            <div key={size} className="flex items-center">
              <RadioGroupItem value={size} id={`size-${size}`} className="peer sr-only" />
              <Label
                htmlFor={`size-${size}`}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white peer-data-[state=checked]:bg-black peer-data-[state=checked]:text-white cursor-pointer"
              >
                {size}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>
      
      <div className="mt-8 flex items-center">
        <div className="flex border rounded-md overflow-hidden mr-4">
          <button 
            className="px-3 py-2 bg-gray-100 hover:bg-gray-200"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
          >
            -
          </button>
          <span className="px-4 py-2 border-x flex items-center justify-center min-w-[40px]">
            {quantity}
          </span>
          <button 
            className="px-3 py-2 bg-gray-100 hover:bg-gray-200"
            onClick={() => setQuantity(quantity + 1)}
          >
            +
          </button>
        </div>
      </div>
      
      <div className="mt-4 flex gap-2">
        <Button 
          variant="outline" 
          size="sm"
          onClick={handleToggleWishlist}
          className={isInWishlist(product.id) ? "border-red-300 text-red-500" : ""}
        >
          <Heart 
            className={`mr-2 h-4 w-4 ${isInWishlist(product.id) ? "fill-red-500" : ""}`} 
          />
          {isInWishlist(product.id) ? "Remove from Wishlist" : "Add to Wishlist"}
        </Button>
        <Button variant="outline" size="sm">
          <Share2 className="mr-2 h-4 w-4" /> Share
        </Button>
      </div>
      
      {/* Product Highlights Container */}
      <div className="mt-8">
        <Accordion type="single" collapsible className="border rounded-md">
          <AccordionItem value="highlights">
            <AccordionTrigger className="px-4 py-3 hover:no-underline">
              <span className="font-semibold">Product Highlights</span>
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4">
              <ul className="list-disc list-inside space-y-2">
                {productHighlights.map((highlight, index) => (
                  <li key={index} className="text-sm">{highlight}</li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      
      {/* Customer Ratings & Reviews Container */}
      <div className="mt-4">
        <Accordion type="single" collapsible className="border rounded-md">
          <AccordionItem value="reviews">
            <AccordionTrigger className="px-4 py-3 hover:no-underline">
              <span className="font-semibold">Customer Ratings & Reviews</span>
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4">
              <div className="mb-4">
                <div className="flex items-center">
                  <span className="text-3xl font-bold">{ratings.average.toFixed(1)}</span>
                  <div className="ml-2">
                    <div className="flex items-center">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg 
                          key={i} 
                          className={`w-4 h-4 ${i < Math.floor(ratings.average) ? 'text-yellow-400' : 'text-gray-300'}`} 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-xs text-gray-500">{ratings.count} reviews</span>
                  </div>
                </div>
              </div>
              
              <div className="mb-4 space-y-2">
                {ratings.distribution.map((dist) => (
                  <div key={dist.stars} className="flex items-center text-sm">
                    <span className="w-8">{dist.stars}★</span>
                    <div className="flex-1 h-2 mx-2 bg-gray-200 rounded">
                      <div 
                        className="h-2 bg-yellow-400 rounded" 
                        style={{ width: `${dist.percentage}%` }}
                      ></div>
                    </div>
                    <span className="w-8 text-right">{dist.percentage}%</span>
                  </div>
                ))}
              </div>
              
              <Separator className="my-4" />
              
              <div className="space-y-4">
                {ratings.reviews.map((review) => (
                  <div key={review.id} className="pb-3 border-b last:border-b-0">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium">{review.user}</span>
                      <span className="text-xs text-gray-500">{review.date}</span>
                    </div>
                    <div className="flex items-center mb-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg 
                          key={i} 
                          className={`w-3 h-3 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-sm text-gray-700">{review.comment}</p>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      
      <div className="mt-8 border-t pt-6">
        <h3 className="font-semibold mb-2">Product Details</h3>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>Material: {product.material || 'Premium Quality'}</li>
          <li>Available in multiple sizes</li>
          <li>In stock: {product.inStock ? 'Yes' : 'No'}</li>
          <li>Free shipping on orders over ₹50</li>
        </ul>
      </div>
    </div>
  );
};

export default ProductInfo;