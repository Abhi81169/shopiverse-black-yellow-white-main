
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { Search, X, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SearchBar = () => {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const navigate = useNavigate();

  // Load search history from localStorage on component mount
  useEffect(() => {
    const savedHistory = localStorage.getItem('searchHistory');
    if (savedHistory) {
      try {
        setSearchHistory(JSON.parse(savedHistory));
      } catch (error) {
        console.error('Failed to parse search history:', error);
      }
    }
  }, []);

  // Save search history to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
  }, [searchHistory]);

  const handleSearch = (query: string) => {
    if (query.trim() === '') return;
    
    // Add query to search history (avoid duplicates and keep most recent at the top)
    setSearchHistory(prev => {
      const filteredHistory = prev.filter(item => item.toLowerCase() !== query.toLowerCase());
      return [query, ...filteredHistory].slice(0, 5); // Keep only the 5 most recent searches
    });
    
    // Navigate to search results
    navigate(`/search?q=${encodeURIComponent(query)}`);
    setOpen(false);
  };

  const clearSearchHistory = () => {
    setSearchHistory([]);
    localStorage.removeItem('searchHistory');
  };

  const removeHistoryItem = (e: React.MouseEvent, item: string) => {
    e.stopPropagation();
    setSearchHistory(prev => prev.filter(i => i !== item));
  };

  return (
    <>
      <Button 
        variant="ghost" 
        size="icon"
        onClick={() => setOpen(true)}
        aria-label="Search"
      >
        <Search className="h-5 w-4" />
      </Button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command className="rounded-lg border shadow-md">
          <CommandInput 
            placeholder="Search products..." 
            value={searchQuery}
            onValueChange={setSearchQuery}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSearch(searchQuery);
              }
            }}
          />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            
            {searchHistory.length > 0 && (
              <CommandGroup heading="Recent Searches">
                <div className="flex justify-end px-2">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-xs text-muted-foreground"
                    onClick={clearSearchHistory}
                  >
                    Clear All
                  </Button>
                </div>
                {searchHistory.map((item) => (
                  <CommandItem 
                    key={item} 
                    onSelect={() => handleSearch(item)}
                    className="flex items-center"
                  >
                    <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span className="flex-1">{item}</span>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-6 w-6"
                      onClick={(e) => removeHistoryItem(e, item)}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </CommandItem>
                ))}
              </CommandGroup>
            )}
          </CommandList>
        </Command>
      </CommandDialog>
    </>
  );
};

export default SearchBar;
