import React, { useContext } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { WishListContext } from './WishListContext';
import '../App.css';

const WishList = () => {
  const { wishlist, removeFromWishlist } = useContext(WishListContext);

  return (
    <Container className='wishlistContent'>
      <h1>Wishlist</h1>
      <ul>
        {wishlist.map(item => (
          <li key={item.id}>
            <Row>
              <Col className='imageCard'>
                <img src={item.image} alt={item.model} width="150px" height="150px" />
              </Col>
              <Col>
                <Row>{item.model}</Row>
                <Row>{item.brand}</Row>
                <Row>{item.category}</Row>
                <Row>₹{item.price}</Row>
                <Button variant="danger" onClick={() => removeFromWishlist(item.id)}>Remove from Wishlist</Button>
              </Col>
            </Row>
            <hr />
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default WishList;
