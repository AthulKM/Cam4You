import React, { useContext } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { ShoppingCartContext } from './ShoppingCartContext';
import '../App.css';

const ShoppingCart = () => {
  const { cart, addToCart, removeFromCart, clearCart, removeItemCompletely } = useContext(ShoppingCartContext);

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
                    }}>+</Button>
                    <Button onClick={() => {
                      removeFromCart(item.id)
                    }}>-</Button>
                    <Button variant="danger" onClick={() => removeItemCompletely(item.id)}>
                      Remove from Cart
                    </Button>
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
