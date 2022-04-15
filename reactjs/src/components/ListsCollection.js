import React, { useState, useEffect, useContext } from 'react';
import AuthContext from '../context/AuthProvider';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import axiosWithToken from '../API';

const styles = {
  button: {
    width: '100%',
  },
  listGroup: {
    margin: '1.8rem 0',
  },
  link: {
    textDecoration: 'none',
    color: 'white',
  },
  container: {
    height: '30vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
};

function ListsCollection() {
  const [listCollection, setListCollection] = useState([]);
  const {
    auth: { user },
  } = useContext(AuthContext);
  useEffect(() => {
    async function fetchLists() {
      const shoppingLists = await axiosWithToken(`/shoppinglists`);
      setListCollection(shoppingLists);
    }
    fetchLists();
  }, [user.id]);

  return (
    <>
      {!listCollection.length === 0 ? (
        <section style={styles.container}>
          <h3>Click below to start adding lists.</h3>
        </section>
      ) : (
        <Container>
          <ListGroup style={styles.listGroup}>
            {listCollection.map((list) => (
              <Link to={`/shoppinglists/${list.id}`} style={styles.link} key={list.id}>
                <ListGroup.Item
                  className="d-flex flex-row justify-content-between align-middle"
                >
                  <p style={styles.title}>{list.title}</p>
                  <p style={styles.cost}>{list.items}</p>
                </ListGroup.Item>
              </Link>
            ))}
          </ListGroup>
        </Container>
      )}

      <Button style={styles.button} type="button" className="btn btn-dark">
        <Link style={styles.link} to="/newlist">
          Create New List
        </Link>
      </Button>
    </>
  );
}

export default ListsCollection;
