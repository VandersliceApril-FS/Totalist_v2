import React, { useEffect, useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { BsThreeDots } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import axiosWithToken from '../API';

const styles = {
  cost: {
    marginBottom: '0',
    fontSize: '1rem',
    lineHeight: '1rem',
    fontWeight: '600'
  },
  name: {
    fontSize: '1rem',
    lineHeight: '1rem',
    fontWeight: '600'
  },
  quantity: {
    fontSize: '.75rem',
    marginBottom: '0',
    fontWeight: '300'
  },
  editButton: {
    float: 'right',
    marginTop: '.25rem',
    padding: '.25rem',
  },
  link: {
    color: 'black',
  },
  store: {
    fontSize: '.75rem',
    fontWeight: '300'
  }
};

function ShoppingItem({ item }) {
  const itemTotal = parseFloat(item.costPerItem) * parseFloat(item.quantity);
  const [checked, setChecked] = useState(item.isComplete);

  useEffect(() => {
    function changeItemStatus() {
      if (checked !== item.isComplete) {
        const response = axiosWithToken(`/items/${item.id}`, {
          method: 'PUT',
          data: {
            isComplete: checked,
          },
        });
        console.log(response);
      }
    }
    changeItemStatus();
  }, [checked, item.id, item.isComplete]);

  return (
    <ListGroup.Item as="li">
      <Row>
        <Col xs={1}>
          <Form.Check
            style={styles.input}
            id={item.id}
            type="checkbox"
            defaultChecked={item.isComplete}
            onChange={() => setChecked((checked) => !checked)}
          />
        </Col>
        <Col>
          <Form.Label style={styles.name} className="todo-label" htmlFor="todo-0">
            {item.name}
          </Form.Label>
        </Col>
        <Col>
          <p style={styles.cost} className="text-end">
            $ {itemTotal.toFixed(2)}
          </p>
        </Col>
      </Row>
      <Row>
        <Col xs={1}></Col>
        <Col>
          <p style={styles.store}>{item.store}</p>
        </Col>
        <Col>
          <p style={styles.quantity} className="text-end">
            {item.quantity} x ${item.costPerItem}
          </p>
        </Col>
      </Row>
      <div style={styles.editButton}>
        <Link to={`/edititem/${item.id}`} style={styles.link} key={item.id}>
          <BsThreeDots style={styles.link} />
        </Link>
      </div>
    </ListGroup.Item>
  );
}

export default ShoppingItem;
