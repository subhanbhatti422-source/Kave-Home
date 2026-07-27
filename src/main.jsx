import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/Home/Home'
import About from './pages/About/About'
import Stores from './pages/Stores/Stores'
import Shop from './pages/Shop/Shop'
import Contact from './pages/Contact/Contact'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/about',
      element: <About />,
    },
    {
      path: '/stores',
      element: <Stores />,
    },
    {
      path: '/shop',
      element: <Shop />,
    },
{
    path: '/contact',
element: <Contact/>
}    
  ],
  {
    basename: "/Kave-Home",
  }
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)