import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homepage from './pages/Homepage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ServicesCatPage from './pages/ServicesCatPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    Component: Homepage
  },
  {
    path: '/aboutpage',
    Component: AboutPage
  },
  {
    path: '/servicecatpage',
    Component: ServicesCatPage
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
