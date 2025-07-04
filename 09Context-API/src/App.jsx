import { useState } from 'react'
import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Login from './Components/Login';
import Profile from './Components/Profile';




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Hello </h1>
    <UserContextProvider>
    <Login />
    <Profile />
    </UserContextProvider>
    </>
  )
}

export default App
