import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react';

const user="Divya";
const reactElement=React.createElement( //THis is how react creates a element in its dom
  'a',
  {
    href:'https://google.com',
    target:'_blank'
  },
  'Click me to visit google',
  user
)
const root=createRoot(document.getElementById('root')); // Creates a react root (The starting point of the react app)
root.render(  //Fills the root with the App component we made
  <StrictMode>
    <App />
    {reactElement}
  </StrictMode>, //The strict mode warns us about any potential problems (used at the time of development)
)
