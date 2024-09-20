import React from 'react';
import './App.css';
import { BrowserRouter, Router } from 'react-router-dom';
import AppRoutes from './Routes/AppRoutes';
import { Navitem } from './Types/types';

const App: React.FC = () => {

  const navItems: Navitem[] = [
    { name: 'Nav 1', route: '/nav1' },
    { name: 'Nav 2', route: '/nav2' },
    { name: 'Nav 3', route: '/nav3' },
  ];

  return (
   <BrowserRouter>
      <AppRoutes  routes={navItems} />

   </BrowserRouter>
  );
};

export default App;
