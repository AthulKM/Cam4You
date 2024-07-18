import React, { useContext } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { ShoppingCartContext } from './ShoppingCartContext';

const ShoppingCart = () => {
  const { cart, addToCart, removeFromCart, clearCart } = useContext(ShoppingCartContext);

  return (
    <Container className='cartContent'>
     
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map(item => (
              <li key={item.id}>
                <Row>
                  <Col>{item.model}</Col>
                  <Col>{item.brand}</Col>
                  <Col>₹{item.price}</Col>
                  <Col>Quantity: {item.quantity}</Col>
                  <Col>
                    <Button onClick={() => {
                      addToCart(item)
                      
                    }}>Add more</Button>
                    <Button onClick={() => {
                      removeFromCart(item.id)
                     
                    }}>Remove</Button>
                  </Col>
                </Row>
              </li>
            ))}
          </ul>
          <Button onClick={clearCart}>Clear Cart</Button>
        </>
      )}
    </Container>
  );
};

export default ShoppingCart;
