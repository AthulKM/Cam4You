import React, { useContext } from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { ProductContext } from './ProductContext';
import { useShoppingCart } from './ShoppingCartContext';
import '../App.css';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const { products } = useContext(ProductContext);
  const { addToCart } = useShoppingCart();
  const navigate = useNavigate(); 

  const viewCart = () => {
    navigate('/cart');
  };

  return (
    <Container className='homePageContent'>
      <h1>Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Row>
              <Col className='imageCard'>
                <Image src={product.image} alt={product.model} width="150px" height="150px" rounded />
              </Col>
              <Col>
                <Row>{product.model}</Row>
                <Row>{product.brand}</Row>
                <Row>{product.category}</Row>
                <Row>₹{product.price}</Row>
                <Row>
                  <Button variant="primary" onClick={() => addToCart(product)}>Add to Cart</Button>
                  <Button variant="secondary" onClick={viewCart}>View Cart</Button>
                </Row>
              </Col>
            </Row>
            
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default HomePage;
