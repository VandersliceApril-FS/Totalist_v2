import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import axiosWithToken from '../API';
import { IoChevronBack } from 'react-icons/io5';

const styles = {
  button: {
    float: 'right',
    textDecoration: 'none',
  },
  title: {
    display: 'inline-block',
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
};

function Profile() {
  const {
    auth: { user },
  } = useAuth();
  const [currentUser, setCurrentUser] = useState({});

  const navigate = useNavigate();
  useEffect(() => {
    async function fetchUserDetails() {
      const response = await axiosWithToken.get(`/users/${user.id}`);
      debugger;
      setCurrentUser(response);
    }
    fetchUserDetails();
  }, [user.id]);

  function handleSignOut() {
    localStorage.clear();
    setCurrentUser({});
    navigate('/', { replace: true });
  }

  return (
    <Container>
      <Form>
        <header style={styles.headerContainer}>
          <Link to="/" style={styles.headerLink}>
            <IoChevronBack size={20} />
          </Link>
          <h2 style={styles.title}>Profile</h2>

          <Link to="/profile/edit" style={styles.button}>
            Edit
          </Link>
        </header>
        <Form.Group className="mb-3" controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="enter first name"
            readOnly
            defaultValue={currentUser.firstName}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="enter last name"
            readOnly
            defaultValue={currentUser.lastName}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="emailAddress">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            readOnly
            defaultValue={currentUser.email}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="*******"
            readOnly
            defaultValue={currentUser.password}
          />
          <Form.Text id="passwordHelpBlock" muted>
            Your password must be 8-20 characters long, contain letters and
            numbers, and must not contain spaces, special characters, or emoji.
          </Form.Text>
        </Form.Group>
      </Form>
      <Button variant="link" onClick={handleSignOut}>
        Sign Out
      </Button>
    </Container>
  );
}

export default Profile;
