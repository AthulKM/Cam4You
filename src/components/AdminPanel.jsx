import React, { useContext, useState } from 'react'
import { Container, Row, Button, Modal } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import Table from 'react-bootstrap/Table';
import { ProductContext } from './ProductContext';
import { AdminContext } from './AdminContext';


const AdminPanel = () => {
  const { products, addProduct, updateProduct, removeProduct } = useContext(ProductContext);
  const { admins, addAdmin, updateAdmin, removeAdmin } = useContext(AdminContext);
  const [show, setShow] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showEditAdminModal, setShowEditAdminModal] = useState(false);
  const [showAdminModal, setShowAdminModal] = useState(false);
  const [newProduct, setNewProduct] = useState({
    model: "",
    brand: "",
    category: "",
    price: 0,
    image:"",
  });
  const [currentProduct, setCurrentProduct] = useState(null);
  const [currentAdmin, setCurrentAdmin] = useState(null);
  

  const [newAdmin, setNewAdmin] = useState({
    username: "",
    password: "",
  });




  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleEditModalClose = () => setShowEditModal(false);
  const handleEditAdminModalClose = () => setShowEditAdminModal(false);
  const handleAdminModalClose = () => setShowAdminModal(false);
  const handleAdminModalShow = () => setShowAdminModal(true);

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setNewProduct({ ...newProduct, [name]: value });
  };
  const changeAdminHandler = (event) => {
    const { name, value } = event.target;
    setNewAdmin({ ...newAdmin, [name]: value });
  };


  const handleSaveProduct = () => {
    addProduct({ id: Date.now(), ...newProduct });
    setShow(false);
    console.log(products);
    setNewProduct({
      model: "",
      brand: "",
      category: "",
      price: 0,
      image:"",
    });
    
  };
  const handleSaveAdmin = () => {
    addAdmin({ id: Date.now(), ...newAdmin });
    setShowAdminModal(false);
    setNewAdmin({
      username: "",
      password: "",
    });
  };


  const handleEditProduct = (product) => {
    setCurrentProduct(product);
    setShowEditModal(true);
  };
  const handleEditAdmin = (admin) => {
    setCurrentAdmin(admin);
    setShowEditAdminModal(true);
  };

  const handleSaveEditProduct = () => {
    updateProduct(currentProduct);
    setShowEditModal(false);
  };
  const handleSaveEditAdmin = () => {
    updateAdmin(currentAdmin);
    setShowEditAdminModal(false);
  };


  const handleRemoveProduct = (productId) => {
    removeProduct(productId);
    console.log(products);
  };
  const handleRemoveAdmin = (adminId) => {
    removeAdmin(adminId);
    console.log(admins);
  };

  const handleEditChange = (event) => {
    const { name, value } = event.target;
    setCurrentProduct({ ...currentProduct, [name]: value });
  };
  const handleEditAdminChange = (event) => {
    const { name, value } = event.target;
    setCurrentAdmin({ ...currentAdmin, [name]: value });
  };



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
            Username :<br />
            <input

              type="text"
              name="username"
              value={newAdmin.username}
              onChange={changeAdminHandler} /><br />
            Password : <br />
            <input
              type="text"
              name="password"
              value={newAdmin.password}
              onChange={changeAdminHandler} /><br />



          </form>
        </Modal.Body>
        <Modal.Footer className='mt-40'>
          <Button className='mr-20 btn-green ' variant="secondary" onClick={handleSaveAdmin}>
            Save
          </Button>

        </Modal.Footer>
      </Modal>
      <Modal className='editAdminModal'
        show={showEditAdminModal}
        onHide={handleEditAdminModalClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title><h2>Edit Admin Data</h2></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            Username :<br />
            <input
              type="text"
              name="username"
              value={currentAdmin?.username || ""}
              onChange={handleEditAdminChange} /><br />
            Password : <br />
            <input
              type="text"
              name="password"
              value={currentAdmin?.password || ""}
              onChange={handleEditAdminChange} /><br />
            
          </form>
        </Modal.Body>
        <Modal.Footer className='mt-40'>
          <Button className='mr-20 btn-green ' variant="secondary" onClick={handleSaveEditAdmin}>
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
            Model :<br />
            <input

              type="text"
              name="model"
              value={newProduct.model}
              onChange={changeHandler} /><br />
            Brand : <br />
            <input
              type="text"
              name="brand"
              value={newProduct.brand}
              onChange={changeHandler} /><br />
            Category : <br />
            <input
              type="text"
              name="category"
              value={newProduct.category}
              onChange={changeHandler} /><br />
            Image : <br />
            <input
              type="text"
              name="image"
              value={newProduct.image}
              onChange={changeHandler}/><br/>
            Price : <br />
            <input
              type="number"
              name="price"
              value={newProduct.price}
              onChange={changeHandler} /><br />
            


          </form>
        </Modal.Body>
        <Modal.Footer className='mt-40'>
          <Button className='mr-20 btn-green ' variant="secondary" onClick={handleSaveProduct}>
            Save
          </Button>

        </Modal.Footer>
      </Modal>

      <Modal className='editCameraModal'
        show={showEditModal}
        onHide={handleEditModalClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title><h2>Edit Camera</h2></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            Model :<br />
            <input
              type="text"
              name="model"
              value={currentProduct?.model || ""}
              onChange={handleEditChange} /><br />
            Brand : <br />
            <input
              type="text"
              name="brand"
              value={currentProduct?.brand || ""}
              onChange={handleEditChange} /><br />
            Category : <br />
            <input
              type="text"
              name="category"
              value={currentProduct?.category || ""}
              onChange={handleEditChange} /><br />
            Price : <br />
            <input
              type="number"
              name="price"
              value={currentProduct?.price || 0}
              onChange={handleEditChange} /><br />
            Url : <br />
            <input
              type="text"
              name="image"
              value={currentProduct?.image || ""}
              onChange={handleEditChange} /><br />
          </form>
        </Modal.Body>
        <Modal.Footer className='mt-40'>
          <Button className='mr-20 btn-green ' variant="secondary" onClick={handleSaveEditProduct}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>





      <Container className='w-80 hCentered adminPanelContainer'>
      <Tabs
      defaultActiveKey="admins"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="admins" title="Admins">
      <Row className='f-dir-row w-100'>
          <Button className='addNewAdminBtn' onClick={handleAdminModalShow}>Add a New Admin</Button>
          

            </Row>
            <Row className='adminPanel-newAdminAddTable'>


          <Table className='striped bordered hover w-100'>
            <thead className='tableHead'>
              <tr>
                <th>Username</th>
                <th>Password</th>
                <th>Actions</th>
              </tr>
            </thead>



            <tbody>
              {admins.map(admin => (
                <tr key={admin.id}>
                  <td>{admin.username}</td>
                  <td>{admin.password}</td>
                  <td className='buttons f-dir-row'>
                    <button className='btn-yellow' onClick={() => handleEditAdmin(admin)}>Edit</button>
                    <button className='btn-red' onClick={() => handleRemoveAdmin(admin.id)}>Remove</button>

                  </td>
                </tr>




              )

              )}
            </tbody>
          </Table>

        </Row>
            
      </Tab>
      <Tab eventKey="products" title="Products">
      <Row className='f-dir-row w-100'>
          
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
                    <th>Image</th>
                <th>Price in <span>&#x20B9;</span></th>
                <th>Actions</th>
              </tr>
            </thead>



            <tbody>
              {products.map(product => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.model}</td>
                  <td>{product.brand}</td>
                  <td>{product.category}</td>
                  <td>{ product.image}</td>
                  <td>{product.price}</td>
                  <td className='buttons f-dir-row'>
                    <button className='btn-yellow' onClick={() => handleEditProduct(product)}>Edit</button>
                    <button className='btn-red' onClick={() => handleRemoveProduct(product.id)}>Remove</button>

                  </td>
                </tr>




              )

              )}
            </tbody>
          </Table>

        </Row>
      </Tab>
      
    </Tabs>







       
        

      </Container>

    </div>

  )
}

export default AdminPanel;