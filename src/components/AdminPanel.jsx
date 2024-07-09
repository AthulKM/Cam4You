import React, { useContext } from 'react'
import { Container, Row, Button, Modal } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useState } from 'react';
import { ProductContext } from './ProductContext';


const AdminPanel = () => {
  const { products, addProduct } = useContext(ProductContext);
  const [show, setShow] = useState(false);
  const [showAdminModal, setShowAdminModal] = useState(false);
  
  const [newProduct, setNewProduct] = useState({
    model: "",
    brand: "Canon",
    category: "",
    price: 0,
  });
  const [admins, setAdmins] = useState([{
    username: "",
    password: "",
  }]);
  
  const [newAdmin, setNewAdmin] = useState(admins);

  
  
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const handleAdminModalClose = () => setShowAdminModal(false);
  const handleAdminModalShow = () => setShowAdminModal(true);
    
    function changeHandler(event) {
      const { name, value } = event.target;
      setNewProduct({ ...newProduct, [name]: value });
    }
  function changeAdminHandler(event) {
    const { name, value } = event.target;
    setNewAdmin({ ...newAdmin, [name]: value });
  }
  
  const handleSaveProduct = () => {
    const newId = Date.now();
    setNewProduct({ id: newId, ...newProduct })
    

    addProduct(newProduct);
    setShow(false);
    setNewProduct([{
      id: Date.now(),
      model: "",
      brand: "Canon",
      category: "",
      price: 0,
        
    }])
  }
  const handleSaveAdmin = () => {
    setAdmins([...admins, newAdmin]);
    setShowAdminModal(false);
    setNewAdmin([
      {
        username: "",
        password:"",
      }
    ])
  }

  
      
  return (
      
          
          
         
      
    <div>
      <Modal className='addNewAdminModal'
        show={showAdminModal}
        onHide={handleAdminModalClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title><h2>Add a new Admin</h2></Modal.Title>
        </Modal.Header>
        <Modal.Body>
                      <form>
                          Username :<br/> 
              <input
                
                              type="text"
                              name="model"
                              value={newAdmin.username}
                onChange={changeAdminHandler} /><br/>
              Password : <br/>
                          <input
                              type="text"
                              name="brand"
                              value={newAdmin.password}
                onChange={changeAdminHandler} /><br/>
              
              
              
          </form>
        </Modal.Body>
        <Modal.Footer className='mt-40'>
          <Button className='mr-20 btn-green ' variant="secondary" onClick={handleSaveAdmin}>
            Save
          </Button>
          
        </Modal.Footer>
      </Modal>
          
      <Modal className='addNewCameraModal'
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title><h2>Add a new Camera</h2></Modal.Title>
        </Modal.Header>
        <Modal.Body>
                      <form>
                          Model :<br/> 
              <input
                
                              type="text"
                              name="model"
                              value={newProduct.model}
                onChange={changeHandler} /><br/>
              Brand : <br/>
                          <input
                              type="text"
                              name="brand"
                              value={newProduct.brand}
                onChange={changeHandler} /><br/>
              Category : <br/>
                          <input
                              type="text"
                              name="category"
                              value={newProduct.category}
                onChange={changeHandler} /><br/>
              Price : <br/>
                          <input
                              type="text"
                              name="price"
                              value={newProduct.price}
                onChange={changeHandler} /><br/>
              
              
          </form>
        </Modal.Body>
        <Modal.Footer className='mt-40'>
          <Button className='mr-20 btn-green ' variant="secondary" onClick={handleSaveProduct}>
            Save
          </Button>
          
        </Modal.Footer>
      </Modal>
          
          <Container className='w-80 hCentered adminPanelContainer'>
        <Row className='f-dir-row w-100'>
                <Button className='addNewAdminBtn' onClick={handleAdminModalShow}>Add a New Admin</Button>
                  <Button className='btn-addNewProduct' onClick={handleShow}>Add a New Camera</Button>
                  
              </Row>
              <Row className='adminPanel-newProductAddTable'>
                  
                  
                        <Table className='striped bordered hover w-100'>
                        <thead className='tableHead'>
                            <tr>
                                <th>Product_ID</th>
                                <th>Model</th>
                                <th>Brand</th>
                                <th>Category</th>
                                <th>Price in <span>&#x20B9;</span></th>
                                <th>Actions</th>
                            </tr>
            </thead>
            {
                      
                      products.map(product => (
                        <tbody>
                                  <tr key={ product.id}>
                                      <td>{ product.id}</td>
                                      <td>{ product.model}</td>
                                      <td>{ product.brand}</td>
                                      <td>{ product.category}</td>
                                      <td>{ product.price}</td>
                                <td className='buttons f-dir-row'>
                                    <button className='btn-yellow'>Edit</button>
                                    <button className='btn-red'>Remove</button>
                          
                                </td>
                            </tr>
                            
                            
                        </tbody>
                    
                      )
                      
                )}
              </Table>
                
        </Row>
        
        </Container>
  </div>
  )
}

export default AdminPanel;