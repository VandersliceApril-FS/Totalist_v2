import React, { useRef, useState } from 'react';
import useAuth from '../hooks/useAuth';
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import axios from 'axios';


const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  submitButton: {
    float: 'right',
    margin: '3rem 0',
  },
  pageTitle: {
    fontWeight: '800',
    fontSize: '3.5rem',
    textAlign: 'left',
    marginBottom: '3rem',
  },
  wrapper: {
    width: '90%',
    marginBottom: '1rem',
  },
  link: {
    width: 'fit-content',
    textDecoration: 'none',
    color: 'red',
  },
  formFooter: {
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between'
  }
};

function RegistrationPage() {
  const { setAuth } = useAuth();
  const userRef = useRef();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        '/auth/register',
        {
          firstName,
          lastName,
          email,
          password,
        },
        {
          headers: {'Content-Type': 'application/json'},
          withCredentials: true
        },
      );
      const token = response?.data?.token;
      setAuth({ email, password, token });
      if (response.data.loggedIn) {
        setSuccess(true);
        // TODO: update global state, go to homepage
      }
    } catch (err) {
      console.log(err)
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
      {success ? (
        <section>
          <h1>Registration successful. You are logged in!</h1>
          <p>
            <Link to="/">Home</Link>
          </p>
        </section>
      ) : (
        <section>
          <h1 style={styles.pageTitle}>Register</h1>
          <Form onSubmit={handleSubmit}>
            <FloatingLabel
              controlId="firstName"
              label="First name"
              className="mb-3"
            >
              <Form.Control
                type="text"
                ref={userRef}
                placeholder="Jane"
                name="firstName"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                required
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="lastName"
              label="Last name"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Doe"
                name="lastName"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                required
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3"
            >
              <Form.Control
                type="email"
                placeholder="name@example.com"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingPassword"
              label="Password"
              className="mb-3"
            >
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              />
            </FloatingLabel>
            <div style={styles.formFooter}>
            <Button style={styles.submitButton} variant="dark" type="submit">
              Submit
            </Button>
            <Button variant="light">
            <Link style={styles.link} to="/">Cancel</Link>
            </Button>
            </div>
          </Form>
        </section>
      )}
      </div>
    </div>
  );
}

export default RegistrationPage;
