import React, { useContext, useState } from 'react';
import { UserContext } from './UserContext';
import { Button, Modal, Form, Alert, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const UserLogin = () => {
  const { addUser, loginUser} = useContext(UserContext);
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const [newUser, setNewUser] = useState({
    id: '',
    username: '',
    password: '',
  });

  const [loginDetails, setLoginDetails] = useState({
    username: '',
    password: '',
  });

  const handleRegisterChange = (event) => {
    const { name, value } = event.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleLoginChange = (event) => {
    const { name, value } = event.target;
    setLoginDetails({ ...loginDetails, [name]: value });
  };

  const handleRegister = () => {
    const newId = Date.now();
    addUser({ id: newId, ...newUser });
    setShowRegister(false);
    setNewUser({
      id: '',
      username: '',
      password: '',
    });
  };

  const handleLogin = () => {
    
    try {
      loginUser(loginDetails.username, loginDetails.password);
      setShowLogin(false);
      setLoginDetails({
        username: '',
        password: '',
      });
      setError(null);
      navigate('/HomePage'); 
      window.location.reload();
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100 user-login-container">
      
      <div className="user-login-box">
        <div className="text-center">
          <Row className="mb-3">
            <Col >
              <p className="login-text">New Customer?</p>
              <Button variant="primary" className="m-2 login-button" onClick={() => setShowRegister(true)}>Register here</Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="login-text">Already a customer?</p>
              <Button variant="secondary" className="m-2 login-button" onClick={() => setShowLogin(true)}>Login here</Button>
            </Col>
          </Row>
        </div>

        <Modal show={showRegister} onHide={() => setShowRegister(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title>Register</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formRegisterUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  value={newUser.username}
                  onChange={handleRegisterChange}
                />
              </Form.Group>
              <Form.Group controlId="formRegisterPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={newUser.password}
                  onChange={handleRegisterChange}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowRegister(false)}>Close</Button>
            <Button variant="primary" onClick={handleRegister}>Register</Button>
          </Modal.Footer>
        </Modal>

        <Modal show={showLogin} onHide={() => setShowLogin(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form>
              <Form.Group controlId="formLoginUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  value={loginDetails.username}
                  onChange={handleLoginChange}
                />
              </Form.Group>
              <Form.Group controlId="formLoginPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={loginDetails.password}
                  onChange={handleLoginChange}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowLogin(false)}>Close</Button>
            <Button variant="primary" onClick={handleLogin}>Login</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </Container>
  );
};

export default UserLogin;
