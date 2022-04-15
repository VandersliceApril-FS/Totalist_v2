import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { GrClose } from 'react-icons/gr';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel';
import Container from 'react-bootstrap/esm/Container';
import { useNavigate, useParams, Link } from 'react-router-dom';
import axiosWithToken from '../API';

const styles = {
  saveButton: {
    width: '100%',
    margin: '1rem 0',
  },
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1rem',
  },
  headerLink: {
    color: 'black',
    textDecoration: 'none',
  },
  title: {
    fontWeight: '600',
    marginBottom: '0',
  },
  icon: {
    color: 'black',
  },
};

function ListTitleForm({ pageTitle, isEditing }) {
  const [listTitle, setListTitle] = useState('');
  const navigate = useNavigate();
  const params = useParams();

  async function onFormSubmit(e) {
    e.preventDefault();
    if (isEditing) {
      try {
        await axiosWithToken(`/shoppinglists/${params.id}`, {
          method: 'PUT',
          data: {
            title: listTitle,
          },
          headers: {
            'Content-Type': 'application/json',
          },
        });
        navigate(`/shoppinglists/${params.id}`, { replace: true });
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        const response = await axiosWithToken('/shoppinglists', {
          method: 'POST',
          data: {
            title: listTitle,
          },
          headers: {
            'Content-Type': 'application/json',
          },
        });
        console.log(response.id.id);
        const newId = response.id.id;
        navigate(`/shoppinglists/${newId}`, { replace: true });
      } catch (err) {
        console.log(err);
      }
    }
  }

  return (
    <Container>
      <div style={styles.headerContainer}>
        <p style={styles.title}>{pageTitle}</p>
        <Link to="/" style={styles.headerLink}>
          <GrClose style={styles.icon} size={20} />
        </Link>
      </div>
      <Form onSubmit={onFormSubmit}>
        <FloatingLabel
          controlId="floatingInput"
          label="List Name"
          className="mb-3"
        >
          <Form.Control
            type="text"
            placeholder="enter list name"
            name="title"
            onChange={(e) => setListTitle(e.target.value)}
            value={listTitle}
            required
          />
        </FloatingLabel>
        <Button style={styles.saveButton} type="submit" variant="dark">
          Save
        </Button>
      </Form>
    </Container>
  );
}

export default ListTitleForm;
