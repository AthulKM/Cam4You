import React, { createContext, useState, useEffect } from 'react';

export const WishListContext = createContext();

export const WishListProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem('wishlist');
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });
  


  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

 
  const addToWishlist = (product) => {
    setWishlist((prevWishlist) => {
      const itemInWishlist = prevWishlist.find((item) => item.id === product.id);
      if (itemInWishlist) {
        alert('Item already added to wishlist');
        return prevWishlist;
      } else {
        return [...prevWishlist, product];
      }
    });
  };

  const removeFromWishlist = (productId) => {
    setWishlist((prevWishlist) => prevWishlist.filter((item) => item.id !== productId));
  };
    
 

  return (
    <WishListContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishListContext.Provider>
  );
};
