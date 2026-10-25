import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { removeItem, clearAllItems } from './redux/slice'

const CartList = () => {

    const dispatch = useDispatch()
    const cartSelector = useSelector((state) => state.cart.items)
    const [cartItems, setCartItems] = useState(cartSelector)

    const navigate = useNavigate()

    useEffect(() => {
        setCartItems(cartSelector)
    }, [cartSelector])
    const manageQuantity = (id, q) => {
        const cartTempItems = cartSelector.map((item) => {
            return item.id == id ?
                { ...item, quantity } : item
        })

        setCartItems(cartTempItems)
    }

    const handlePlaceOrder = () => {
        localStorage.clear()
        dispatch(clearAllItems());
        navigate("/");
        alert("Order Placed");
    }

    return (
        <div className='cart-container p-10 bg-white border-2 rounded-3xl w-500 flex flex-col justify-center mx-100 my-10'>
            <div className='cart-header flex justify-between gap-20'>
                <h2 className='font-bold text-3xl text-black'>Your Cart Items</h2>
                <span className='font-bold text-3xl text-black mb-10'>{cartItems.length}  Items</span>
            </div>
            {
                cartItems.length > 0 ? cartItems.map((item) => (
                    <div key={item.id} className='cart-item flex justify-between border-b-2 border-gray-700 mb-5'>
                        <img className='size-40' src={item.thumbnail} />
                        <div className='flex gap-300'>

                            <div className='item-details flex flex-col w-90'>
                                <h1 className='title text-black font-bold text-3xl mb-6'>{item.title}</h1>
                                <p className='brand text-black font-semibold text-3xl'>{item.brand}</p>
                            </div>
                            <div className='item-actions flex flex-col '>
                                <span className='text-2xl text-black font-bold items-end flex justify-end mb-3'>${(item.quantity ? item.price * item.quantity : item.price).toFixed(2)}</span>
                                <button onClick={() => dispatch(removeItem(item))} className='btn cursor-pointer active:scale-95 bg-red-600 text-white rounded-xl w-35 h-15 font-bold text-xl'>Remove</button>
                            </div>
                        </div>


                    </div>
                ))
                    : null
            }
            <div className='text-3xl flex font-bold justify-end text-green-600'>
                Total : ${(cartItems.reduce((sum, item) => item.quantity ? sum + item.price * item.quantity : sum + item.price, 0)).toFixed(2)}
            </div>
            <button onClick={() => handlePlaceOrder()} className='btn cursor-pointer active:scale-95 px-6 py-3 bg-green-600 text-white rounded-xl w-40 h-20 font-bold text-xl'>Place Order</button>
        </div>


    )
}

export default CartList