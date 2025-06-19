import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
const root=createRoot(document.getElementById('root')); // Creates a react root (The starting point of the react app)
root.render(  //Fills the root with the App component we made
  <StrictMode>
    <App />
  </StrictMode>, //The strict mode warns us about any potential problems (used at the time of development)
)
