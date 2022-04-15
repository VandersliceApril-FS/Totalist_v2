import React from 'react';

const styles = {
  container: {
    background: '#f5f5f5',
    textAlign: 'center',
    padding: '1rem 0',
    marginBottom: '.5rem',
  },
  total: {
    fontSize: '2.5rem',
  },
};

function ListTotalBar({ total }) {
  return (
    <div style={styles.container}>
      <small>TOTAL</small>
      <h1 style={styles.total}>$ {total}</h1>
    </div>
  );
}

export default ListTotalBar;
