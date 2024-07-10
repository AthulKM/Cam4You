import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../App.css';
import { Navbar, Nav, Button, Image, Container, Row, Col } from 'react-bootstrap';
const HomePage = () => {
  const demoNavigation = useNavigate();
  const buttonClicked = () => {
    demoNavigation('/');
  }

  return (
    <div>
      <section className='mainSection'>
        <Container >
          <Row className='searchArea'>

            <Col><Button>

            </Button></Col>
          </Row>
        </Container>
      </section>

    </div>
  )
}

export default HomePage