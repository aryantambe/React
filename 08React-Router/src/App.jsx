import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-amber-600'>React</div>
    </>
  )
}

export default App
