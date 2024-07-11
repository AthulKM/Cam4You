import React, { createContext, useState,useEffect } from 'react';
// import { ProductDetails } from './components/ProductsDetails';

export const ProductContext = createContext();
// const [productDetails, setProductDetails] = useState(ProductDetails);

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState(() => { 
        const savedProducts = localStorage.getItem('products');
    return savedProducts ? JSON.parse(savedProducts) : [];
    });

    useEffect(() => {
        localStorage.setItem('products', JSON.stringify(products));
      }, [products]);
    
    
    
    
    
  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const updateProduct = (updatedProduct) => {
    setProducts(products.map(product =>
      product.id === updatedProduct.id ? updatedProduct : product
    ));
  };

  const removeProduct = (productId) => {
    setProducts(products.filter(product => product.id !== productId));
  };

  return (
    <ProductContext.Provider value={{ products, addProduct, updateProduct, removeProduct}}>
      {children}
    </ProductContext.Provider>
  );
};