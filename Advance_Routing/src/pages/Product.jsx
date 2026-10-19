import React from 'react'
import {Link, Outlet} from 'react-router-dom'

const Product = () => {
  return (
    <div>
        <div>
        <Link to='/product/men'>Men</Link>
        <Link to='/product/women'>Women</Link>
        </div>
        <Outlet/>
        <h2>Product</h2>
    </div>
  )
}

export default Product