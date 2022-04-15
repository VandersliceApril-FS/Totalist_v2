import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axiosWithToken from '../API';
import { useNavigate } from 'react-router-dom';


function DeleteModal({ type, id }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();

  async function handleDelete() {
    if ((type == 'List')) {
      try {
        const response = await axiosWithToken.delete(`/shoppinglists/${id}`);
        navigate('/', { replace: true });
      } catch(err) {
          console.log(err)
      }
    } 
  }
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Delete {type}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete {type}? This cannot be undone. </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="dark" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteModal;
