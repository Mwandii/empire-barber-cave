import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homepage from './pages/Homepage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ServicesPage from './pages/ServicesPage.jsx'

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
    path: '/servicepage',
    Component: ServicesPage
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
