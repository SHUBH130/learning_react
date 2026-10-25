import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const AddToCart = () => {

    const cartSelector = useSelector((state) => state.cart.items)
    // console.log(selector);

    return (

        <div className='cart flex size-10'>
            <Link to="/cart" className="flex">
                <img src="https://img.icons8.com/material-outlined/24/ffffff/shopping-cart.png" alt="cart" className='cart-icon' />
                <span className='cart-count font-bold'>{cartSelector.length ? cartSelector.length : 0}</span>
            </Link>

        </div>


    )
}

export default AddToCart