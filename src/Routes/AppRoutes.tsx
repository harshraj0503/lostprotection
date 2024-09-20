import React from "react";
import {Routes, Route} from 'react-router-dom';
import Landingpage from "../Pages/Landingpage";
import { AppRoutesProps } from "../Types/types";

const AppRoutes: React.FC<AppRoutesProps> = ({ routes}) => {
    
    return(
        <Routes>
            {routes.map((item)=>(
                <Route 
                key={item.route}
                path={item.route}
                element={<Landingpage />}
                />
            ))}
            <Route path="/" element={<Landingpage />} />
        </Routes>
       

    )
};

export default AppRoutes;








