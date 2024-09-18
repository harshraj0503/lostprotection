import React from 'react';
import './App.css';
import { BrowserRouter, Router } from 'react-router-dom';
import AppRoutes from './Routes/AppRoutes';

const App: React.FC = () => {
  return (
   <BrowserRouter>
      <AppRoutes />

   </BrowserRouter>
  );
};

export default App;
