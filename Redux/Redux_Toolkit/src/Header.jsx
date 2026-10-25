import React from 'react'
import AddToCart from './AddToCart'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className='flex justify-between p-10 bg-gray-600 text-white text-3xl'>
            <div className='logo'>
                <h2 className='font-bold text-4xl'>ShoppingHub</h2>
            </div>

            <nav className='flex gap-20 justify-between'>
                <ul className='flex gap-10 font-semibold'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/product">Products</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
                <AddToCart />
            </nav>


        </header>
    )
}

export default Header