import React, {useState} from 'react'


const App = () => {

  const [num, setNum] = useState({user:'shubh', age:24})
  const [numb, setNumb] = useState([10,20,30])

  const buttonClicked = ()=>{
    setNum(prev=>({...prev, user:'gamer', age:25}))
    
    // const newNum = {...num}
    // newNum.user = 'gamer'
    // newNum.age = 25
    // setNum(newNum); 
  }

  const btnClicked = ()=>{
    const newNumb = [...numb]
    newNumb.push('shubh');
    setNumb(newNumb);
  }


  // const [num, setNum] = useState(0);

  // function increase(){
  //   setNum(num+1);
  // }

  // function decrease(){
  //   setNum(num-1);
  // }

  // function increaseBy5(){
  //   setNum(num+5);
  // }

  return (
    <div>
      <h1>{num.user} {num.age}</h1>
      <button onClick={buttonClicked}>click</button>

      <h1>{numb}</h1>
      <button onClick={btnClicked}>click</button>

      {/* counter app */}
      {/* <h1>value of num is {num}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={increaseBy5}>Increase by 5</button> */}
    </div>
  )
}

export default App
