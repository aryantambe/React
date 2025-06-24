import { useState } from 'react'

import './App.css'

function App() {
  const [length,setLength]=useState(8);
  const [numAllowed,setNumAllowed]=useState(false);
  const [charAllowed,setCharAllowed]=useState(false);
  const [password,setPassword]=useState("");

  const passwordGenerator=()=>{}

  return (
    <>
      <h1 className='text-6xl text-center text-white mt-4  '>Password-Generator</h1>
    </>
  )
}

export default App
