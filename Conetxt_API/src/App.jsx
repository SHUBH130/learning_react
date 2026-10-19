import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import Navbar from './context/Navbar'
import { PostDataContext } from './context/ThemeContext'

const App = () => {

  const data = useContext(PostDataContext)
  const [theme, setTheme] = useState('light')

  return (
    <div>
      <Navbar theme={theme}>
        <h2>{data}</h2>
      </Navbar>
    </div>
  )
}

export default App