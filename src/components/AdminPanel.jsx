import React from 'react'
import { Container, Row, Button, Modal } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useState } from 'react';

const AdminPanel = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
      <>
          <div>
          
          <Modal className='addNewModal'
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title><h2>This modal can be used for adding new products</h2></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Do not even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer className='mt-40'>
          <Button className='mr-20' variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
          </div>
          
          <Container className='w-80 hCentered adminPanelContainer'>
              <Row className='f-dir-row w-100'>
                  <Button className='btn-addNewProduct' onClick={handleShow}>Add New</Button>
                  
              </Row>
              <Row className='adminPanel-newProductAddTable'>
              <Table className='striped bordered hover w-100'>
      <thead className='tableHead'>
        <tr>
          <th>#</th>
          <th>Category</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Portrait Photography</td>
          <td>10k</td>
          <td className='buttons f-dir-row'>
            <button>+</button>
            <button>-</button>
            <button>Edit</button>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>WildLife Photography</td>
          <td>35k</td>
          <td className='buttons f-dir-row'>
            <button>+</button>
            <button>-</button>
            <button>Edit</button>
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>Street Photography</td>
          <td>40k</td>
          <td className='buttons f-dir-row'>
            <button>+</button>
            <button>-</button>
            <button>Edit</button>
          </td>
        </tr>
      </tbody>
    </Table>

              </Row>
        </Container>
      </>
  )
}

export default AdminPanel;