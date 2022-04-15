import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const styles = {
  nav: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  link: {
    textDecoration: 'none',
    color: 'black',
    marginLeft: '.25rem',
    fontWeight: '700'
  },
  registerContainer: {
    display: 'flex',
  },
  buttonLink: {
    color: 'white',
    textDecoration: 'none',
    fontWeight: '700'
  },
  button: {
    margin: '2rem'
  }, 
  container: {
    height: '90vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  pageTitle: {
    fontWeight: '800',
    fontSize: '3.5rem',
    textAlign: 'left',
    marginBottom: '2rem',
  },
};

function LandingPage() {
  return (
    <div style={styles.container}>
      <section style={styles.nav}>
        <Button style={styles.button} variant="dark" type="button">
          <Link style={styles.buttonLink} to="/login">
            Log In
          </Link>
        </Button>
        <div style={styles.registerContainer}>
          <p>Need an account?</p>
          <Link style={styles.link} to="/register">
            Sign up.
          </Link>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
