
import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './pages/About'
import CourseDetails from './pages/CourseDetails'
import Courses from './pages/Courses'
import Home from './pages/Home'
import Men from './pages/Men'
import NotFound from './pages/NotFound'
import Product from './pages/Product'
import Women from './pages/Women'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/courses/:courseId' element={<CourseDetails/>}/>
        <Route path='/product' element={<Product/>}>
        <Route path='men' element={<Men/>}/>
        <Route path='women' element={<Women/>}/>
        </Route>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default App