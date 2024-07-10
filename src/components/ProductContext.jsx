import React, { createContext, useState } from "react";


const ProductContext = createContext();

const ProductProvider = ({ Children }) => {
    const [products, setProducts] = useState([]);
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
        <ProductContext.Provider value={{ products, addProduct, updateProduct, removeProduct }}>
            {Children}
        </ProductContext.Provider>
    );
};
export { ProductContext, ProductProvider };