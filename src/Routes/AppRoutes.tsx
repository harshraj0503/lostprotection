import React from "react";
import {Routes, Route} from 'react-router-dom';
import Landingpage from "../Pages/Landingpage";

const AppRoutes: React.FC = () => {
    
    return(
        <Routes>
            <Route path="/nav1" element={<Landingpage />} />
            <Route path="/nav2" element={<Landingpage />} />
            <Route path="/nav3" element={<Landingpage />} />
            <Route path="/" element={<Landingpage />} />
        </Routes>
    )
};

export default AppRoutes;

















// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import LandingPage from '../pages/LandingPage'; // Import your components

// const AppRoutes: React.FC = () => {
//   return (
//     <Routes>
//       <Route path="/nav1" element={<LandingPage />} />
//       <Route path="/nav2" element={<LandingPage />} />
//       <Route path="/nav3" element={<LandingPage />} />
//       <Route path="/" element={<LandingPage />} />
//     </Routes>
//   );
// };

// export default AppRoutes;
