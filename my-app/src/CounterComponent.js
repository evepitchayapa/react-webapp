import {React, useState} from 'react'

export const CounterComponent = () => {
    console.log("render counter component");
    //set initial state = 1
    const [ cntState , setCntState]= useState(1)
    let count =0;

    const increase =()=> { 
        setCntState(cntState +1)
        console.log(cntState);
    }
  return (
    <div> 
        <h1>Counter : </h1>
        <p>count : {cntState}</p> 
        <button onClick={increase}>add</button>
    </div>
  )
}
