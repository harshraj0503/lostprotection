import React from 'react';
import { Navitem } from '../Types/types';
import { Link } from 'react-router-dom';

const navItems: Navitem[] = [
    { name: 'Nav 1', route: '/Nav1' },
    { name: 'Nav 2', route: '/Nav2' },
    { name: 'Nav 3', route: '/Nav3' },
  ];


const Nav: React.FC = () => {

  return (
    <nav className='w-40 border-4 border-black'>
         <ul>
        {navItems.map((item) => (
          <li key={item.route} className="mb-2">
            <Link to={item.route}>{item.name}</Link>
          </li>
        ))}
      </ul> 
    </nav>
  )
}

export default Nav;
