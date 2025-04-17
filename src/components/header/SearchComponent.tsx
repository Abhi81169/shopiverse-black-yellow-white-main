
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { searchProducts } from '@/lib/api';
import { Product } from '@/types';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchComponent = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setShowSearchResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    if (query.length >= 2) {
      const results = await searchProducts(query);
      setSearchResults(results.slice(0, 5));
      setShowSearchResults(true);
    } else {
      setSearchResults([]);
      setShowSearchResults(false);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setShowSearchResults(false);
    }
  };

  const navigateToProduct = (productId: string) => {
    navigate(`/product/${productId}`);
    setShowSearchResults(false);
    setSearchQuery('');
  };

  return (
    <div className="relative" ref={searchContainerRef}>
      <form onSubmit={handleSearchSubmit} className="flex items-center">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearch}
            className="w-40 md:w-64 h-10 pl-3 pr-8 rounded-md border border-input bg-transparent"
            onFocus={() => {
              if (searchResults.length > 0) {
                setShowSearchResults(true);
              }
            }}
          />
          <Button 
            type="submit" 
            variant="ghost" 
            size="icon" 
            className="absolute right-0 top-0"
          >
            <span className="sr-only">Search</span>
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </Button>
        </div>
      </form>

      {showSearchResults && searchResults.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-background border border-input rounded-md shadow-lg z-50 max-h-80 overflow-y-auto">
          <ul className="py-1">
            {searchResults.map((product) => (
              <li 
                key={product.id} 
                className="px-4 py-2 hover:bg-accent cursor-pointer"
                onClick={() => navigateToProduct(product.id)}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gray-100 rounded overflow-hidden">
                    <img 
                      src={product.imageUrl} 
                      alt={product.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium truncate">{product.name}</p>
                    <p className="text-sm text-muted-foreground">₹{product.price.toFixed(2)}</p>
                  </div>
                 
                </div>
              </li>
            ))}
            <li className="border-t px-4 py-2">
              <Button 
                variant="ghost" 
                className="w-full text-primary text-sm"
                onClick={() => {
                  if (searchQuery.trim()) {
                    navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
                    setShowSearchResults(false);
                  }
                }}
              >
                See all results
              </Button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchComponent;
