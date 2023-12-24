import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import ErrorBoundary from './components/commen/ErrorBoundary'
import App from './App'

const router = createBrowserRouter([
  {element:<App /> , path: '/' , errorElement:<ErrorBoundary />}
])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
