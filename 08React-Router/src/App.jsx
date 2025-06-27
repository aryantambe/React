import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-red-50 flex justify-around h-10 '>
        <h1>React</h1>
        <h1>React</h1>
        <h1>React</h1>
        <h1>React</h1>
      </div>
    </>
  )
}

export default App
