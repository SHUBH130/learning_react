import React from 'react'

const App = () => {

  // function buttonClick(){
  //   console.log('dab gaya button');
  // }

  // function inputChanging(val){
  //   console.log(val);
  // }

  function scrollBar(val){
    console.log('value of scroll is', val);
  }

  return (
    <div onWheel={function(elem){
      // console.log(elem.deltaY);
      scrollBar(elem.deltaY);
    }}>
      {/* <button onClick={buttonClick}>click here</button>
      <button onClick={function(){
        console.log('reset button');
      }}>Reset</button>
      <input onChange={function(elem){
        inputChanging(elem.target.value);
      }} type="text" placeholder='name'/> */}

      <div className='page1'></div>
      <div className='page2'></div>
    </div>
  )
}

export default App
