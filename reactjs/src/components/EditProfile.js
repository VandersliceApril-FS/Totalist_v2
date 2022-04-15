import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import { Link, useNavigate } from 'react-router-dom';
import axiosWithToken from '../API';
import useAuth from '../hooks/useAuth';

const styles = {
  header: {
    marginBottom: '1.5rem',
  },
  button: {
    float: 'right',
    textDecoration: 'none',
  },
  title: {
    display: 'inline-block',
  },
};

function EditProfile() {
  const {
    auth: { user },
  } = useAuth();
  
  const navigate = useNavigate();
  function handleFormSubmit(e) {
    e.preventDefault();

    let formValues = new FormData(e.target);
    axiosWithToken(`/users/${user.id}`, {
      method: 'PUT',
      data: {
        firstName: formValues.get('firstName'),
        lastName: formValues.get('lastName'),
        email: formValues.get('email'),
        password: formValues.get('password')
      },
      header: {
        'Content-Type': 'application/json',
      },
    });

    navigate(`/profile`, {replace: false});
  }

  return (
    <>
        <Container>
          <header style={styles.header}>
            <h2 style={styles.title}>Edit Profile</h2>
          </header>
          <Form onSubmit={handleFormSubmit}>
            <Button style={styles.button} type="submit" variant="link">
              Done
            </Button>
            <Form.Group className="mb-3" controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="enter first name"
                defaultValue={user.firstName}
                name="firstName"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="enter last name"
                defaultValue={user.lastName}
                name="lastName"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="emailAddress">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                defaultValue={user.email}
                name="email"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="*******"
                defaultValue={user.password}
                name="password"
              />
              <Form.Text id="passwordHelpBlock" muted>
                Your password must be 8-20 characters long, contain letters and
                numbers, and must not contain spaces, special characters, or
                emoji.
              </Form.Text>
            </Form.Group>
          </Form>
          <Link to="/login">Sign Out</Link>
        </Container>
    </>
  );
}

export default EditProfile;
