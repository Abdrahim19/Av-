import React from 'react'
import ReactDOM from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
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
