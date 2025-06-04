import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home/Index.jsx'
import Pessoas from './routes/Pessoas/Index.jsx'
import Recursos from './routes/Recursos/Index.jsx'
import Construcao from './routes/Construção/Index.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    children: [
      {path:'/', element:<Home/>},
      {path:'/pessoas', element:<Pessoas/>},
      {path:'/recursos', element:<Recursos/>},
      {path:'/construcao', element:<Construcao/>},
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)