import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'


const router=createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"about",
        element:<About/>,
        children:[
          {
            path:"testing",
            element:<Contact/>
          }
        ]
      },
      {
        path:"contact",
        element:<Contact/>
      },
      {
        path:"user/:id",
        element:<User/>
      },
      {
        path:"github",
        element:<Github/>,
        loader:githubInfoLoader,
      }
    ]
  }
]);

//Another way to define routes

// const router=createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout/>}>
//       <Route path='' element={<Home/>}>
//        ....
//      <Route/>
//   )
// )


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
