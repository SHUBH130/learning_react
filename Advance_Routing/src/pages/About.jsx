import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {

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
        <h2>About</h2>
    </div>
  )
}

export default About