import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { useShoppingCart } from './ShoppingCartContext';

const ShoppingCart = () => {
  const { cartItems, removeFromCart } = useShoppingCart();

  return (
    <Container className='shoppingCartContent'>
      <h1>Your Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              <Row>
                <Col className='imageCard'>
                  <Image src={item.image} alt={item.model} width="150px" height="150px" rounded />
                </Col>
                <Col>
                  <Row>{item.model}</Row>
                  <Row>{item.brand}</Row>
                  <Row>{item.category}</Row>
                  <Row>₹{item.price}</Row>
                  <Button variant="danger" onClick={() => removeFromCart(item.id)}>Remove from Cart</Button>
                </Col>
              </Row>
            
            </li>
          ))}
        </ul>
      )}
    </Container>
  );
};

export default ShoppingCart;
