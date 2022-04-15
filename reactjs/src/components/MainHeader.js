import React from 'react';
import useAuth from '../hooks/useAuth';
import { BsPersonCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const styles = {
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '1.5rem',
    alignItems: 'center',
  },
  pageTitle: {
    fontSize: '2.5rem',
  },
  link: {
    textDecoration: 'none',
    color: 'black',
  },
  status: {
    marginRight: '1rem',
  },
  brand: {
    fontWeight: '300',
    verticalAlign: 'text-bottom',
  },
  brandContainer: {
    display: 'flex',
  },
};

function MainHeader() {
  const {
    auth: { token, user },
  } = useAuth();
  return (
    <header style={styles.header}>
      <Link style={styles.link} to="/">
        <h1 style={styles.brand}>Totalist</h1>
      </Link>

      <Link to="/profile" style={styles.link}>
        {token && (
          <small style={styles.status}>Signed in as {user.firstName}</small>
        )}
        <BsPersonCircle size={30} />
      </Link>
    </header>
  );
}

export default MainHeader;
