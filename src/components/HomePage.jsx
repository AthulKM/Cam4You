import React, { useContext } from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { ProductContext } from './ProductContext';
import { ShoppingCartContext } from './ShoppingCartContext';

const HomePage = () => {
  const { products } = useContext(ProductContext);
  const { addToCart, removeFromCart, cart } = useContext(ShoppingCartContext);

  return (
    <Container className='homePageContent'>
      
      <ul className='m-0' >
        {products.map(product => {
          const cartItem = cart.find(item => item.id === product.id) || {};
          return (
            <li key={product.id}>
              <div className='m-0 productCard' >
                <Col className='imageCard h-centered'>
                  <Image src={product.image} alt={product.model} width="150px" height="150px" rounded />
                </Col>
                <Col className='m-0' >
                  <Row>{product.model}</Row>
                  <Row>{product.brand}</Row>
                  <Row>{product.category}</Row>
                  <Row>₹{product.price}</Row>
                </Col>
                <Col className='d-flex fd-col m-0 jc-sa'>
                  <Button className='h-centered' onClick={() => addToCart(product)}>Add to Cart</Button>
                  {cartItem.quantity > 0 && (
                    <>
                      <span className='h-centered' >Qty: {cartItem.quantity}</span>
                      <Button className='h-centered'  onClick={() => removeFromCart(product.id)}>Remove from Cart</Button>
                    </>
                  )}
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
