

interface ProductImageSectionProps {
  imageUrl: string;
  productName: string;
}

const ProductImageSection = ({ imageUrl, productName }: ProductImageSectionProps) => {
  return (
    <div className="w-full md:w-1/2">
      <div className="aspect-square overflow-hidden bg-gray-100 rounded-md">
        <img 
          src={imageUrl} 
          alt={productName}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default ProductImageSection;
