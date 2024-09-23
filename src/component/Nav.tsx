import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { navItems } from './utils/navitems';
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import '../styles/nav.css'; 


const Nav: React.FC = () => {
    const [isCollapsed , setIsCollapsed] = useState(false);

    const togglesNavbar = () => {  //Change iscollapsed 
      setIsCollapsed(!isCollapsed)
    };

  return (
    <nav className={`nav-container ${isCollapsed ?'collapsed': ''}`}>
      <ul>
        <li className= 'toggle-icon' onClick={togglesNavbar}>
          {isCollapsed ?(
            <AiOutlineMenuUnfold className='nav-icon'/>
          ): (
            <AiOutlineMenuFold className='nav-icon' />
          )}
        </li>
        {!isCollapsed && navItems.map((item)=>(
            <li key={item.path} className='nav-item'>
              <Link to={item.path}>
                {item.name}
              </Link>
            </li>
          ))}
      </ul>
      
    </nav> 
  )
}

export default Nav;
