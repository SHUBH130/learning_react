import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const App = () => {

// async function getData(){
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
//     console.log(response);
//   }

// const getData = async ()=>{
//   const response = await fetch('https://jsonplaceholder.typicode.com/users')

//   const data = await response.json();
//   console.log(data);
// }

  const [data, setData] = useState([])

  const getData = async()=>{
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    
    console.log(response.data);
    setData(response.data)
  }

  return (
    <div>
      <button onClick={getData}>click</button>
      <div>
        {data.map(function(elem, idx){
          return <h3>{elem.name} {idx}</h3>
        })}
      </div>
    </div>
  )
}

export default App
