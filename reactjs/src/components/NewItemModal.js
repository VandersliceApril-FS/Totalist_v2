import React, { useState } from 'react';
import {
  Button,
  Modal,
  Form,
  FloatingLabel,
  InputGroup,
} from 'react-bootstrap';
import { BsPlusCircleFill } from 'react-icons/bs';
import axiosWithToken from '../API';
import { useNavigate } from 'react-router-dom'

const styles = {
  buttonContainer: {
    // padding: '1rem',
  },
  button: {
    border: 'none',
    right: '0',
    bottom: '60px',
    position: 'fixed',
    color: 'black',
    background: 'transparent',
    borderRadius: '50px',
  },
  link: {
    textDecoration: 'none',
    color: 'white',
  },
};

function NewItemModal({ shoppingListId, getNewItem }) {
  const [name, setName] = useState('');
  const [costPerItem, setCostPerItem] = useState(0);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    
    try {
      const response = await axiosWithToken('/items', {
        method: 'POST',
        data: {
          name,
          costPerItem,
          isComplete: false,
          shoppingListId,
        },
        
      });
      navigate(`/shoppinglists/${shoppingListId}`, {replace: false});
      getNewItem(response);
      
    } catch (err) {
      console.log(err);
    }
    
  }

  return (
    <div>
      <div style={styles.buttonContainer} onClick={handleShow}>
        <button style={styles.button}>
          <BsPlusCircleFill size={55} />
        </button>
      </div>
      <Modal show={show} onHide={handleClose} centered>
        <Form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Add Item</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FloatingLabel
              controlId="itemName"
              label="Item name"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placehodler="item name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </FloatingLabel>
            <InputGroup className="mb-3">
              <InputGroup.Text>$</InputGroup.Text>
              <Form.Control
                type="number"
                size="lg"
                aria-label="Amount (to the nearest dollar)"
                onChange={(e) => setCostPerItem(e.target.value)}
                value={costPerItem}
              />
            </InputGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="dark" type="submit" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
}

export default NewItemModal;
