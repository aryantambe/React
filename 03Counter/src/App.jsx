import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //let counter=5  This variable will not be propogated in the UI so we use hooks (useState)

  const [counter,setCounter]=useState(0)
  const increaseValue=()=>{
    if(counter==20){
      alert("Max value reached bro");
    }
    else{
    setCounter(counter+1);

    }
  }
  const decreaseValue=()=>{
    if(counter==0) {
      alert("Counter is 0 dude");
    }
    else{
    setCounter(counter-1);
    }
  }

  return (
    <>
    <h1>React Project #2</h1>
    <h2>Counter Value: {counter}</h2>
    <button onClick={increaseValue} >Increase Value</button>
    <br/>
    <button onClick={decreaseValue}>Decrease Value</button>
    <p>Created using hooks</p>
    <p>This is a footer: {counter}</p>
    </>
  )
}

export default App
