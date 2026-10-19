import React from 'react'
import Nav2 from './Nav2'

const Navbar = ({children,theme}) => {
  return (
    <div className='navbar'>
        <h2>Sheriyans</h2>
        {children}
        <Nav2 theme={theme}/>
    </div>
  )
}

export default Navbar