import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { 
  createBrowserRouter, 
  RouterProvider } from 
'react-router-dom'

// component imports
import Epage from './Epage.tsx'
import { Signup } from './components/signup.tsx'
import { Login } from './components/login.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <Epage/>
  },
  {
  path: '/signup',
  element: <Signup/>,
  errorElement: <Epage/>
},
{
  path: '/login',
  element: <Login/>,
  errorElement: <Epage/>
},
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
