import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Route from './src/Router/Route.jsx'
import AuthProvider from './src/provider/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

     <AuthProvider>
       <RouterProvider router={Route}>

      </RouterProvider>
     </AuthProvider>

  </StrictMode>,
)
