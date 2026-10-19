import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const App = () => {

  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  function aChanging(){
    console.log('a is changing');
  }

  function bChanging(){
    console.log('b is changing');
  }

  useEffect(function(){
    aChanging()
    console.log('use effect is running');
  },[a])

  useEffect(function(){
    bChanging()
    console.log('use effect is running');
  },[b])

  return (
    <div>
      <h2>a is {a}</h2>
      <h2>b is {b}</h2>
      <button onClick={()=>{
        setA(a+1)
      }}>a change</button>
      <button onClick={()=>{
        setB(b-1)
      }}>b change</button>
    </div>
  )
}

export default App