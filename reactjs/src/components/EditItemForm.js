import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Container from 'react-bootstrap/esm/Container';
import { useParams, useNavigate } from 'react-router-dom';
import axiosWithToken from '../API';

const styles = {
  
  cost: {
    maxWidth: '10rem',
  },
  costQty: {
    display: 'flex',
  },
  deleteButton: {
    textDecoration: 'none',
    color: 'red',
    marginTop: '3rem',
  },
  doneButton: {
    textDecoration: 'none',
    float: 'right',
  },
  title: {
    display: 'inline-block',
    fontWeight: '700'
  },
  header: {
    marginBottom: '1.5rem',
  },
};

function EditItemForm() {
  const [item, setItem] = useState({});
  const navigate = useNavigate();
  let params = useParams();
  useEffect(() => {
    async function fetchItem() {
      const response = await axiosWithToken.get(`/items/${params.id}`);
      setItem(response);
    }
    fetchItem();
  }, [params]);

  function onFormSubmit(e) {
    e.preventDefault();

    let formValues = new FormData(e.target);
    axiosWithToken(`/items/${params.id}`, {
      method: 'PUT',
      data: {
        name: formValues.get('name'),
        costPerItem: formValues.get('costPerItem'),
        quantity: formValues.get('quantity'),
        store: formValues.get('store')
      },
      headers: {
        'Content-Type': 'application/json',
      },
    });
    navigate(`/shoppinglists/${item.shoppingListId}`, {replace: false})
  }

  function handleDeleteItem(e) {
    
    if (window.confirm('Are you sure you want to delete this item?')) {
      try {
        axiosWithToken.delete(`/items/${params.id}`)
        navigate(`/shoppinglists/${item.shoppingListId}`, {replace: true})
      } catch(err) {
        console.log(err);
      }
    } else {
      return;
    }
  }

  return (
    <Container>
      <Form onSubmit={onFormSubmit}>
        <header style={styles.header}>
          <h2 style={styles.title}>Edit Item</h2>
          <Button style={styles.doneButton} type="submit" variant="link">
            Done
          </Button>
        </header>
        <FloatingLabel
          controlId="floatingInput"
          label="Item name"
          className="mb-3"
        >
          <Form.Control
            type="text"
            aria-label="item name"
            placeholder="enter item name"
            name="name"
            defaultValue={item.name}
          />
        </FloatingLabel>

        <FloatingLabel controlId="itemStore" label="Store" className="mb-3">
          <Form.Control
            type="text"
            aria-label="store"
            placeholder="enter store"
            name="store"
            defaultValue={item.store}
          />
        </FloatingLabel>
        <div style={styles.costQty}>
          <InputGroup className="mb-3">
            <InputGroup.Text>$</InputGroup.Text>
            <FloatingLabel
              controlId="itemCost"
              label="Item cost"
              
            >
              <FormControl
                style={styles.cost}
                aria-label="cost per item"
                placeholder="enter item cost"
                name="costPerItem"
                defaultValue={item.costPerItem}
              />
            </FloatingLabel>
          </InputGroup>
          <FloatingLabel controlId="itemQty" label="Quantity" className="mb-3">
            <Form.Control
              type="number"
              placeholder="enter quantity"
              name="quantity"
              defaultValue={item.quantity}
            />
          </FloatingLabel>
        </div>
      </Form>

      <Button style={styles.deleteButton} onClick={handleDeleteItem} variant="link" type="button">
        Delete Item
      </Button>
    </Container>
  );
}

export default EditItemForm;
