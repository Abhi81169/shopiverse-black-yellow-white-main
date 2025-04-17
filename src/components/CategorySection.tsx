import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const categories = [
  {
    name: 'Men',
    path: '/category/men',
    image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80',
  },
  {
    name: 'Women',
    path: '/category/women',
    image: 'https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80',
  },
  {
    name: 'Boys',
    path: '/category/boys',
    image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTxoiYpX9gJj7WpKYnU5NGlhAC0FhtBk-N6SWO_EB4M06oZ1abd5lDtrJOvId_21PM6rIEPfP8azCCUKlRScXTHQY8LeD1tzPTx_QxRgVr-Df84VukUssu6Yw',
  },
  {
    name: 'Girls',
    path: '/category/girls',
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTlYu-LrPBMFRwLKG3FVYMQdF39WeU1vy9IQ4iV_xwMpCT0TpFox0CAlIpHrj-RiNX2CQcmFAHTjlFYa6ng2EbWyUInqMbTD9bE8RsqnzZ4DqqTEyfIv0bfJg',
  },
  
];

const CategorySection = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((category) => (
            <Link key={category.path} to={category.path}>
              <Card className="overflow-hidden h-full hover:shadow-md transition-shadow">
                <AspectRatio ratio={1/1} className="bg-gray-100">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </AspectRatio>
                <CardContent className="flex items-center justify-center p-3">
                  <h3 className="font-semibold text-sm">{category.name}</h3>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;