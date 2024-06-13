import React from 'react'
import Logo from '../assets/ChatApp.png';

const AuthLayouts = ({ children }) => {
  return (
    <>
      <header className='flex justify-center items-center py-3 h-20 shadow-md bg-white'>
        <img 
          src={Logo} 
          alt="Logo" 
          width={180}
        />
      </header>

      {children}
    </>
  )
}

export default AuthLayouts;
