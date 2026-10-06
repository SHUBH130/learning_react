import React from 'react'
import Card from './components/Card'
import Navbar from './components/navbar'

const App = () => {
  return (
    <div>
      {/* {Card()} */}
      <Navbar/>
      <Card user='shubh' age={25} about='currently learning frontend and working in accenture'/>
      <Card user='raj' age={28} about='currently learning backend and working in wipro'/>
    </div>
  )
}

export default App
