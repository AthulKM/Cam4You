import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import '../App.css';
import { Navbar,Nav,Button,Image, Container,Row,Col } from 'react-bootstrap';
import { ProductContext } from './ProductContext';
const HomePage = () => {
  const { products } = useContext(ProductContext);
    
  return (
    <Container className='homePageContent'>
        <h1>Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Row>
              <Col>
                <img  src={product.image} alt={ product.model} />
              </Col>
              <Col>
                <Row>{product.model}</Row>
                <Row>{product.brand}</Row>
                <Row>{product.category}</Row>
                <Row>₹{product.price}</Row>
              </Col>
            </Row>
             -  -  - 
          </li>
        ))}
      </ul>
    </Container>
      
    
  );
};

export default HomePage;