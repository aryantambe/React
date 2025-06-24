import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1 className='bg-white p-4 rounded-2xl text-black mb-4'>Tailwind CSS</h1>
      <Card num={123} />
      <Card num={6969} />
        
      
    </>
  )
}

export default App
