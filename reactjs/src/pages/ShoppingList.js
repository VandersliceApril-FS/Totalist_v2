import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import ShoppingItem from '../components/ShoppingItem';
import { IoChevronBack } from 'react-icons/io5';
import ListMenu from '../components/ListMenu';
import ListTotalBar from '../components/ListTotalBar';
import NewItemModal from '../components/NewItemModal';
import axiosWithToken from '../API';

const styles = {
  buttonContainer: {
    padding: '1rem',
  },
  button: {
    color: 'black',
    float: 'right',
  },
  link: {
    textDecoration: 'none',
    color: 'white',
  },
  itemsContainer: {
    
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
  instructions: {
    margin: '3rem auto',
    textAlign: 'center',
    fontWeight: '300',
    height: '50vh',
  }
};

function ShoppingList() {
  const [currentList, setCurrentList] = useState([]);
  const [newItem, setNewItem] = useState({});
  const [items, setItems] = useState([])


  let params = useParams();
  useEffect(() => {
    async function fetchList() {
      const data = await axiosWithToken(`/shoppinglists/${params.id}`);
      setCurrentList(data);
      setItems(data.Items);
    }
    fetchList();
  }, [newItem, params.id]);

  const total = parseFloat(
    currentList.Items &&
      currentList.Items.map((item) => item.costPerItem).reduce(
        (previousValue, currentValue, currentIndex) =>
          Number(previousValue) +
          Number(currentValue) *
            Number(currentList.Items[currentIndex].quantity),
        0,
      ),
  ).toFixed(2);



  return (
    <>
      <div style={styles.headerContainer}>
        <Link to="/" style={styles.headerLink}>
          <IoChevronBack size={20} />
        </Link>
        <p style={styles.title}>
          {currentList.title}
        </p>
        <ListMenu shoppingListId={currentList.id} />
      </div>
      <ListTotalBar total={total} />
      {items.length === 0 ? (
        <h3 style={styles.instructions}>Click the + below to start adding items.</h3>
      ) : (
        <ListGroup as="ul" variant="flush" >
        {currentList.Items.map((i) => (
          <ShoppingItem item={i} key={i.id} shoppingListId={currentList.id} />
        ))}
      </ListGroup>
        
      )}
      
      <NewItemModal shoppingListId={currentList.id} getNewItem={setNewItem} />
    </>
  );
}

export default ShoppingList;
