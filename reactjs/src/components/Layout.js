import React from 'react'
import { Outlet } from 'react-router-dom';
import MainHeader from './MainHeader';

const Layout = () => {
  return (
    <main>
      <MainHeader />
      <Outlet />
    </main>
  );
};

export default Layout;