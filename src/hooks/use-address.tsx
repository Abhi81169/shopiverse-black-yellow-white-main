
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

export interface Address {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  zipCode: string;
  country: string;
  phone: string;
}

interface AddressContextType {
  savedAddresses: Address[];
  saveAddress: (address: Address) => void;
  removeAddress: (index: number) => void;
  defaultAddress: Address | null;
  setDefaultAddress: (address: Address | null) => void;
}

const AddressContext = createContext<AddressContextType | undefined>(undefined);

export const AddressProvider = ({ children }: { children: ReactNode }) => {
  const [savedAddresses, setSavedAddresses] = useState<Address[]>([]);
  const [defaultAddress, setDefaultAddress] = useState<Address | null>(null);
  
  // Load addresses from localStorage on component mount
  useEffect(() => {
    const storedAddresses = localStorage.getItem('savedAddresses');
    const storedDefaultAddress = localStorage.getItem('defaultAddress');
    
    if (storedAddresses) {
      try {
        setSavedAddresses(JSON.parse(storedAddresses));
      } catch (error) {
        console.error('Failed to parse saved addresses:', error);
      }
    }
    
    if (storedDefaultAddress) {
      try {
        setDefaultAddress(JSON.parse(storedDefaultAddress));
      } catch (error) {
        console.error('Failed to parse default address:', error);
      }
    }
  }, []);
  
  // Save addresses to localStorage when they change
  useEffect(() => {
    localStorage.setItem('savedAddresses', JSON.stringify(savedAddresses));
  }, [savedAddresses]);
  
  // Save default address to localStorage when it changes
  useEffect(() => {
    if (defaultAddress) {
      localStorage.setItem('defaultAddress', JSON.stringify(defaultAddress));
    }
  }, [defaultAddress]);
  
  const saveAddress = (address: Address) => {
    // Check if address already exists to avoid duplicates
    const addressExists = savedAddresses.some(
      addr => 
        addr.firstName === address.firstName &&
        addr.lastName === address.lastName &&
        addr.address === address.address &&
        addr.city === address.city &&
        addr.zipCode === address.zipCode
    );
    
    if (!addressExists) {
      setSavedAddresses(prev => [...prev, address]);
    }
    
    // Set as default if it's the first address or if there's no default yet
    if (!defaultAddress) {
      setDefaultAddress(address);
    }
  };
  
  const removeAddress = (index: number) => {
    setSavedAddresses(prev => {
      const newAddresses = [...prev];
      newAddresses.splice(index, 1);
      return newAddresses;
    });
    
    // If the default address was removed, set a new default
    if (defaultAddress && 
        savedAddresses[index].address === defaultAddress.address &&
        savedAddresses[index].city === defaultAddress.city) {
      if (savedAddresses.length > 1) {
        // Set the first available address as default
        const newDefaultIndex = index === 0 ? 1 : 0;
        setDefaultAddress(savedAddresses[newDefaultIndex]);
      } else {
        setDefaultAddress(null);
      }
    }
  };
  
  return (
    <AddressContext.Provider 
      value={{ 
        savedAddresses,
        saveAddress,
        removeAddress,
        defaultAddress,
        setDefaultAddress
      }}
    >
      {children}
    </AddressContext.Provider>
  );
};

export const useAddress = () => {
  const context = useContext(AddressContext);
  if (context === undefined) {
    throw new Error('useAddress must be used within an AddressProvider');
  }
  return context;
};
