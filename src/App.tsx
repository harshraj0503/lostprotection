import React from 'react';
import './App.css';
import { BrowserRouter, Router } from 'react-router-dom';
import AppRoutes from './Routes/AppRoutes';
import { navItems } from './component/utils/navitems';

const App: React.FC = () => {

  return (
   <BrowserRouter>
      {/* <Breadcrumb navItems={navItems}/> */}
      <AppRoutes  routes={navItems} />
    </BrowserRouter>
  );
};  

export default App;
