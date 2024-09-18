import React from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../component/Header';
import Nav from '../component/Nav';

const Landingpage: React.FC = () => {
    const location = useLocation();
    const currentPage = location.pathname.substring(1);

  return (
    <div>
        <Header />

        <div className='flex'>
            <Nav  />
            <div className='bg-yellow-500 w-screen h-screen  flex border-4 border-black justify-center items-center '>
                <h2 className='text-lg font-bold'>{currentPage}</h2>
            </div>
        </div>
    </div>
  )
}

export default Landingpage
