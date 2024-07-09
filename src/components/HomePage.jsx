import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../App.css';
import { Navbar,Nav,Button,Image, Container,Row,Col } from 'react-bootstrap';
const HomePage = () => {
    const demoNavigation = useNavigate();
    const buttonClicked = () => {
        demoNavigation('/');
    }
    const cameraModels = {
      "canon": ["EOS R5", "EOS R6", "EOS Rebel T7", "EOS 5D Mark IV", "PowerShot G7 X Mark III"],
      "nikon": ["Z6", "Z7 II", "D850", "D750", "Coolpix P950"],
      "sony": ["Alpha 1", "Alpha 7 III", "Alpha 7R IV", "Alpha 6600", "Cyber-shot DSC-RX100 VII"],
      "fujifilm": ["X-T4", "X-Pro3", "X100V", "GFX 100", "X-T200"],
      "olympus": ["OM-D E-M1 Mark III", "OM-D E-M5 Mark III", "Tough TG-6", "PEN E-PL10", "OM-D E-M10 Mark IV"],
      // Add more brands and models as needed
  };

  function updateModels() {
      const brandSelect = document.getElementById("camera-brands");
      const modelSelect = document.getElementById("camera-models");
      const selectedBrand = brandSelect.value;

      // Clear previous models
      modelSelect.innerHTML = "";

      // Add new models based on selected brand
      if (cameraModels[selectedBrand]) {
          cameraModels[selectedBrand].forEach(model => {
              const option = document.createElement("option");
              option.value = model.toLowerCase().replace(/ /g, "-");
              option.textContent = model;
              modelSelect.appendChild(option);
          });
      }
  }
  return (
      <div>
  <section className='mainSection'>
    <Container >
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
        </Container>
      </section>
          
    </div>
  )
}

export default HomePage