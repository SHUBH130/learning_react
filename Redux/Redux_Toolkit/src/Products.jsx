import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, removeItem } from './redux/slice'
import {fetchProducts} from './redux/productSlice'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Products = () => {

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchProducts())
    },[]);

    const productSelector = useSelector((state)=> state.products.items)
    console.log(productSelector);

    const cartSelector = useSelector((state)=>state.cart.items)

    return (
        <div className='flex gap-20 flex-wrap p-10 justify-center'>
            {
                productSelector.length && productSelector.map((item)=>(
                    <div key={item.id} className='card w-110 h-155 border-3 border-white px-5 rounded-3xl hover:scale-105'>
                        <img className='w-100 h-90' src={item.thumbnail}/>
                        <div>
                            <div className='title text-white font-bold text-2xl mb-2'>{item.title}</div>
                            <div className='brand text-white font-semibold text-2xl mb-2'>{item.brand}</div>
                            <div className='price text-white font-bold text-2xl mb-4'>{item.price}</div>
                            {
                                cartSelector.find(cartItem => cartItem.id === item.id)?
                                <button onClick={()=> dispatch(removeItem(item))} className='btn cursor-pointer active:scale-95 px-6 py-3 bg-red-600 text-white rounded-xl w-full font-bold text-xl'>Remove From Cart</button> :
                                <button onClick={()=>dispatch(addItem(item))} className='btn hover:bg-white hover:text-black cursor-pointer active:scale-95 px-6 py-3 bg-black text-white rounded-xl w-full font-bold text-xl'>Add To Cart</button>
                            }
                        </div>
                    </div>
                )) 
            }
        </div> 


    )
}

export default Products