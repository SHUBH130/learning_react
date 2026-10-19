import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {

    let navigate = useNavigate()


  return (
    <div>
        <button onClick={()=>{
            navigate('/')
        }}>Home</button>

        <button onClick={()=>{
            navigate(-1)
        }}>Back</button>

        <button onClick={()=>{
            navigate(+1)
        }}>Next</button>
    </div>
  )
}

export default Navbar2