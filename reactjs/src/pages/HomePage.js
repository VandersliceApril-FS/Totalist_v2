import React, { useContext } from 'react';
import ListsCollection from '../components/ListsCollection';

import Container from 'react-bootstrap/Container';
import AuthContext from '../context/AuthProvider';
import LandingPage from './LandingPage';

function HomePage() {
  const {
    auth: { token },
  } = useContext(AuthContext);

  return <Container>{token ? <ListsCollection /> : <LandingPage />}</Container>;
}

export default HomePage;
