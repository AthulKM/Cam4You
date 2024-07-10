import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../App.css';
import { Navbar,Nav,Button,Image, Container,Row,Col } from 'react-bootstrap';
const HomePage = () => {
    const demoNavigation = useNavigate();
    const buttonClicked = () => {
        demoNavigation('/');
    }
    
  return (
      <div>
  <section className='mainSection'>
    
        <h2>Welcome to the home page</h2>
        
        
        
        
        
        {/* <Container >
      <Row className='searchArea'>
        
        <Col><Button>
        <label for="camera-brands">Choose a camera brand:</label>
          <select id="camera-brands" name="camera-brands" onchange="updateModels()">
            <option value="">Select a brand</option>
            <option value="canon">Canon</option>
            <option value="nikon">Nikon</option>
            <option value="sony">Sony</option>
            <option value="fujifilm">Fujifilm</option>
            <option value="olympus">Olympus</option>
            <option value="panasonic">Panasonic</option>
            <option value="leica">Leica</option>
            <option value="pentax">Pentax</option>
            <option value="hasselblad">Hasselblad</option>
            <option value="sigma">Sigma</option>
            <option value="ricoh">Ricoh</option>
            <option value="kodak">Kodak</option>
            <option value="polaroid">Polaroid</option>
            <option value="gopro">GoPro</option>
            <option value="samsung">Samsung</option>
            <option value="casio">Casio</option>
            <option value="vivitar">Vivitar</option>
            <option value="minolta">Minolta</option>
            <option value="yashica">Yashica</option>
            <option value="zeiss">Zeiss</option>
          </select>
        <label for="camera-models">Choose a camera model:</label>
          <select id="camera-models" name="camera-models">
            <option value="">Select a model</option>
          </select>
        </Button></Col>
          </Row>
        </Container> */}
      </section>
          
    </div>
  )
}

export default HomePage