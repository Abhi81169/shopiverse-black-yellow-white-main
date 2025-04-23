import { Product } from '@/types';

// Mock product data
const products: Product[] = [
  {
    id: '1',
    name: 'Classic Black T-Shirt',
    description: 'A comfortable classic black t-shirt made from premium cotton.',
    price: 290,
    category: 'men',
    imageUrl: 'https://images.unsplash.com/photo-1618517351616-38fb9c5210c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80',
    inStock: true,
    material: 'Cotton',
    createdAt: '2023-05-15T10:30:00Z',
  },
  {
    id: '2',
    name: 'Slim Fit Jeans',
    description: 'Modern slim fit jeans ideal for casual wear.',
    price: 200,
    category: 'men',
    imageUrl: 'https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80',
    inStock: true,
    material: 'Denim',
    createdAt: '2023-05-10T14:45:00Z',
  },
  {
    id: '3',
    name: 'Elegant Floral Dress',
    description: 'A beautiful floral dress perfect for spring and summer occasions.',
    price: 550,
    category: 'women',
    imageUrl: 'https://images.unsplash.com/photo-1572804013427-4d7ca7268217?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80',
    inStock: true,
    material: 'Polyester',
    createdAt: '2023-05-20T09:15:00Z',
  },
  {
    id: '4',
    name: 'High Waist Trousers',
    description: 'Stylish high waist trousers for a professional look.',
    price: 400,
    category: 'women',
    imageUrl: 'https://images.meesho.com/images/products/382928595/wrfxo_512.webp',
    inStock: true,
    material: 'Cotton Blend',
    createdAt: '2023-05-18T11:20:00Z',
  },
  {
    id: '5',
    name: 'Cartoon Print T-Shirt',
    description: 'Fun and colorful cartoon print t-shirt for boys.',
    price: 245,
    category: 'boys',
    imageUrl: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSjIcAOmkLcwKNB8u7ThKbLBm0xTI2SEABx6ikPRxA6zGGUkwTKKSRR4xNW3lg1K0sYuVikak_-ZxQZdTkfklaGRjmCnxXQ1eNrFAry1_M',
    inStock: true,
    material: 'Cotton',
    createdAt: '2023-05-25T13:10:00Z',
  },
  {
    id: '6',
    name: 'Cargo Shorts',
    description: 'Durable cargo shorts perfect for active boys.',
    price: 230,
    category: 'boys',
    imageUrl: 'https://thend.in/cdn/shop/files/main-07.jpg?v=1720095757',
    inStock: true,
    material: 'Cotton Canvas',
    createdAt: '2023-05-22T10:05:00Z',
  },
  {
    id: '7',
    name: 'Pink Ballet Dress',
    description: 'Adorable pink ballet dress for little dancers.',
    price: 300,
    category: 'girls',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR7JaIjyJejnN8tnisqhslPdbmqH26jnSZgQ&s',
    inStock: true,
    material: 'Tulle',
    createdAt: '2023-05-28T14:20:00Z',
  },
  {
    id: '8',
    name: 'Denim Overalls',
    description: 'Cute and practical denim overalls for girls.',
    price: 650,
    category: 'women',
    imageUrl: 'https://alwaysalice.com.au/cdn/shop/files/DSC04297.jpg?v=1721108316&width=1200',
    inStock: true,
    material: 'Denim',
    createdAt: '2023-05-26T16:30:00Z',
  },
  {
    id: '9',
    name: 'Black lehenga choli party wear',
    description: 'Comfortable Girls Lehenga Choli Party Wear Self Design Lehenga, Choli and Dupatta Set',
    price: 850,
    category: 'children',
    imageUrl: 'https://rukminim3.flixcart.com/image/850/1000/xif0q/kids-lehenga-choli/b/z/s/7-8-years-cs-k-lc037-253-clothes-shop-original-imagubftnjhczyjq.jpeg?q=90&crop=false',
    inStock: true,
    material: 'Cotton',
    createdAt: '2023-06-01T08:45:00Z',
  },
  {
    id: '10',
    name: 'Rainbow Sweater',
    description: 'Colorful rainbow sweater to brighten up any day.',
    price: 450,
    category: 'women',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ2NsPay4oje-Ti3FFn3WQfunMyHFlEuNZTQ&s',
    inStock: true,
    material: 'Wool Blend',
    createdAt: '2023-05-30T12:15:00Z',
  },
  {
    id: '11',
    name: 'Leather Jacket',
    description: 'Classic leather jacket for a timeless style statement.',
    price: 500,
    category: 'men',
    imageUrl: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80',
    inStock: true,
    material: 'Leather',
    createdAt: '2023-06-05T15:30:00Z',
  },
  {
    id: '12',
    name: 'Women Maxi Shirt',
    description: 'Beautiful bohemian style maxi skirt with floral pattern.',
    price: 350,
    category: 'women',
    imageUrl: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80',
    inStock: true,
    material: 'Viscose',
    createdAt: '2023-06-03T11:45:00Z',
  },
  {
    id: '13',
    name: 'Party wear gown Dress',
    description: 'Explore the enchanting world of kids fashion with this stunning peach gown dress',
    price: 600,
    category: 'girls',
    imageUrl: 'https://images.meesho.com/images/products/308447308/i6tbv_512.webp',
    inStock: true,
    material: 'Cotton ',
    createdAt: '2023-06-10T09:30:00Z',
  },
  {
    id: '14',
    name: 'mens cotton nevy blue shirt',
    description: 'navy blue shirt for mens. this shirt si very comfortable.',
    price: 250,
    category: 'men',
    imageUrl: 'https://5.imimg.com/data5/RB/CN/MY-39077357/mens-fashion-shirt.jpg',
    inStock: true,
    material: 'Cotton Shirt',
    createdAt: '2023-06-12T14:20:00Z',
  },
  {
    id: '15',
    name: 'Women Black & White Shirt',
    description: 'Women Black & White Regular Fit Checked Cotton Casual Shirt.',
    price: 300.42,
    category: 'women',
    imageUrl: 'https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/13722908/2021/3/3/d1ee19bd-73c9-4ca4-a8e9-624c18128a6e1614752690702-Roadster-Women-Black--White-Regular-Fit-Checked-Casual-Shirt-1.jpg',
    inStock: true,
    material: 'Cotton',
    createdAt: '2023-06-15T11:00:00Z',
  },
  {
    id: '16',
    name: 'Blue shirt',
    description: 'Boys casual shirt.',
    price: 600,
    category: 'men',
    imageUrl: 'https://4.imimg.com/data4/EH/NN/MY-17368652/boys-casual-shirt.jpg',
    inStock: true,
    material: 'Cotton',
    createdAt: '2023-06-18T08:45:00Z',
  },
  {
    id: '17',
    name: 'Red & Black shirt',
    description: 'Comfortable polka fabric making this a perfect choice for the season!.',
    price: 250,
    category: 'boys',
    imageUrl: 'https://www.atun.in/wp-content/uploads/2022/09/2-a.jpg',
    inStock: true,
    material: 'Cotton',
    createdAt: '2023-06-20T16:30:00Z',
  },
  {
    id: '18',
    name: 'Indian bridal ahenga',
    description: 'Comfortable  Indian bridal suite.',
    price: 1200,
    category: 'women',
    imageUrl: 'https://images.meesho.com/images/products/406106338/cvi1c_1200.jpg',
    inStock: true,
    material: 'cotton',
    createdAt: '2023-06-22T13:15:00Z',
  },
  {
    id: '19',
    name: 'cocktail & party western dress',
    description: 'BLACK COLOR SATIN FRILL SKIRT WITH ATTACHED NET PALLA & READYMADE BLOUSE EMBELLISHED WITH GLITTER BEADS, SEQUINS WORK READY TO WEAR SAREE',
    price: 1500,
    category: 'womwn',
    imageUrl: 'https://kotharisons.com/cdn/shop/files/IMG_1674_1.jpg?v=1730034053&width=533',
    inStock: true,
    material: 'cotton',
    createdAt: '2023-06-25T10:20:00Z',
  },
  {
    id: '20',
    name: 'Bridal Lahenga',
    description: ' Red Raw Silk Hand Embroidered Zardozi And Sequin Work Loop Bridal Lehenga Set.',
    price: 1350,
    category: 'women',
    imageUrl: 'https://static3.azafashions.com/tr:w-450/uploads/product_gallery/1693928363265_1.jpg',
    inStock: true,
    material: 'Cottan',
    createdAt: '2023-06-28T15:40:00Z',
  },
];

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// API functions
export const fetchFeaturedProducts = async (): Promise<Product[]> => {
  await delay(800);
  return products.slice(0, 20); // Show more products
};

export const fetchProductsByCategory = async (category: string): Promise<Product[]> => {
  await delay(800);
  return products.filter(product => 
    product.category.toLowerCase() === category.toLowerCase()
  );
};

export const fetchProductById = async (id: string): Promise<Product | null> => {
  await delay(500);
  const product = products.find(product => product.id === id);
  return product || null;
};

export const searchProducts = async (query: string): Promise<Product[]> => {
  await delay(100);
  const searchTerm = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(searchTerm) || 
    product.description.toLowerCase().includes(searchTerm) ||
    product.category.toLowerCase().includes(searchTerm)
  );
};
