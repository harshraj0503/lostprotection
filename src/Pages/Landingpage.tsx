import React from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../component/Header';
import Nav from '../component/Nav';
import { LandingPageProps } from '../Types/types';

const Landingpage: React.FC<LandingPageProps> = ({children}) => {
    // const location = useLocation();
    // const currentPage = location.pathname.substring(1);

  return (
    <div>
        <Header />
        <div className='landing-container'>
            <Nav  />
            <div className='main-content'>
                {/* <h2 className='main-heading'>{currentPage}</h2> */}
                {children}
            </div>
        </div>
    </div>
  )
} 

export default Landingpage
