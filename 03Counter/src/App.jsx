import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let counter=5

  return (
    <>
    <h1>React Project #2</h1>
    <h2>Counter Value: {counter}</h2>
    <button onClick={(evt)=>{alert("button clicked");alert(evt.type)}}>Increase Value</button>
    <br/>
    <button>Decrease Value</button>
    </>
  )
}

export default App
