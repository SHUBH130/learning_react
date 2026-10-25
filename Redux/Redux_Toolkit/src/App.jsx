import React from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './About'
import CartList from './CartList'
import Header from './Header'
import Home from './Home'
import Products from './Products'

import { clearAllItems } from './redux/slice'

const App = () => {

  const dispatch = useDispatch()

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/product' element={<Products />}></Route>
        <Route path='/cart' element={<CartList/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
