import { Children, createContext, useState } from "react";

const ProductContext = createContext({
    products: [{
        id: Date.now(),
        model: "eos",
        brand: "canon",
        category: "Photos",
        price: 200000,
        
    }],
    setProducts: () => {},
});

const ProductProvider = ({ Children }) => {
    const [products, setProducts] = useState([]);
    const addProduct = (newProduct) => {
        setProducts((prevProducts) => [...prevProducts, newProduct]);
    };
    const updateProduct = (updatedProduct) => {
        setProducts((prevProducts) =>
          prevProducts.map((product) =>
            product.id === updatedProduct.id ? updatedProduct : product
          )
        );
    };
    const deleteProduct = (productId) => {
        setProducts((prevProducts) =>
          prevProducts.filter((product) => product.id !== productId)
        );
      };
    return (
        <ProductContext.Provider value={{ products,addProduct}}>
            {Children}
        </ProductContext.Provider>
    );
};
export { ProductContext, ProductProvider };