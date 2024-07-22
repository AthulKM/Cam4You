import React, { useContext, useState } from 'react';
import { Container, Row, Col, Image, Button, Alert } from 'react-bootstrap';
import { ProductContext } from './ProductContext';
import { ShoppingCartContext } from './ShoppingCartContext';
import { useLocation } from 'react-router-dom';
import '../App.css';
import { WishListContext } from './WishListContext';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const HomePage = () => {
  const { addToWishlist } = useContext(WishListContext);
  const { products } = useContext(ProductContext);
  const { addToCart, cart } = useContext(ShoppingCartContext);
  const [alert, setAlert]=useState({show:false, message: ''})
  const query = useQuery();
  const category = query.get('category');
  const brand = query.get('brand');

  const filteredProducts = products.filter(product => {
    if (category && brand) {
      return product.category === category && product.brand === brand;
    } else if (category) {
      return product.category === category;
    } else if (brand) {
      return product.brand === brand;
    } 
    return true
  });

  const handleAddToCart = (product) => {
    addToCart(product);
    setAlert({ show: true, message: `${product.brand} ${product.model} has been added to your cart!` });
    
    setTimeout(() => setAlert({ show: false, message: '' }), 1000);
    
  }

  return (
    <Container className='homePageContent'>
      {alert.show && <Alert variant='success'>{alert.message}</Alert>}
      <ul className='m-0'>
        {filteredProducts.map(product => {
          const cartItem = cart.find(item => item.id === product.id) || {};
          return (
            <li key={product.id}>
              <div className='m-0 productCard'>
                <Col className='imageCard h-centered'>
                  <Image src={product.image} alt={product.model} width="150px" height="150px" rounded />
                </Col>
                <Col className='m-0'>
                  <Row>{product.model}</Row>
                  <Row>{product.brand}</Row>
                  <Row>{product.category}</Row>
                  <Row>₹{product.price}</Row>
                </Col>
                <Col className='d-flex fd-col m-0 jc-sa'>
                  <Button className='h-centered' onClick={() => handleAddToCart(product)}>Add to Cart</Button>
                  <Button className='h-centered' onClick={() => addToWishlist(product)}>Add to Wishlist</Button>
                </Col>
              </div>
            </li>
          );
        })}
      </ul>
    </Container>
  );
};

export default HomePage;


