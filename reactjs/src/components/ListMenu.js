import React from 'react';
import { Link } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import { useParams, useNavigate } from 'react-router-dom';
import axiosWithToken from '../API'

const styles = {
  toggler: {
    border: 'none',
    color: '#000',
    // background: 'red'
  },
  navbar: {},
  deleteButton: {
    color: 'red',
  },
};

function ListMenu({ shoppingListId }) {
  const params = useParams();
  const navigate = useNavigate();
  function handleDeleteList() {
    // open the edit title form
    if (window.confirm('Are you sure you want to delete this list? This cannot be undone.')) {
      try {
        axiosWithToken(`/shoppinglists/${shoppingListId}`, {
          method: 'DELETE'
        })
        debugger
        navigate(`/home`, {replace: true})
        
      } catch(err) {
        console.log(err)
      }
    } else {
      return;
    }
  }
  return (
    <NavDropdown
      align="end"
      id="dropdown-menu-align-end"
      variant='light'
    >
      <NavDropdown.Item>
        <Link to={`/shoppinglists/${params.id}/edit`}>Edit list name</Link>
      </NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item>
        <Button onClick={handleDeleteList} variant="link" style={styles.deleteButton}>Delete List</Button>
      </NavDropdown.Item>
    </NavDropdown>
  );
}

export default ListMenu;
 