import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EditProfile from './components/EditProfile';
import ShoppingList from './pages/ShoppingList';
import ListTitleForm from './components/ListTitleForm';
import SignIn from './pages/SignIn';
import RegistrationPage from './pages/RegistrationPage';
import EditItemForm from './components/EditItemForm';
import { Container } from 'react-bootstrap';
import Profile from './components/Profile';
import Layout from './components/Layout';
import RequireAuth from './components/RequireAuth';

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* public routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<SignIn />} />

          {/* protected routes */}
          <Route element={<RequireAuth />}>
            {/* <Route path="/home" element={<HomePage />} /> */}
            <Route path="/profile/edit" element={<EditProfile />} />
            <Route path="/profile" element={<Profile />} />
            <Route path={`/shoppinglists/:id`} element={<ShoppingList />} />
            <Route
              path="/newlist"
              element={
                <ListTitleForm pageTitle="Create List" isEditing={false} />
              }
            />
            <Route path="/edititem/:id" element={<EditItemForm />} />
            <Route
              path="/shoppinglists/:id/edit"
              element={<ListTitleForm pageTitle="Edit List" isEditing={true} />}
            />
          </Route>
        </Route>
      </Routes>
    </Container>
  );
}

export default App;
