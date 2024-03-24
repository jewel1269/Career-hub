import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './components/Root/Root.jsx'
import Statistics from './components/Statistics/Statistics.jsx'
import Applied from './components/Navbar/Applied/Applied.jsx'
import Blog from './components/Navbar/Blog/Blog.jsx'
import Home from './components/Home.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
  {
    path: '/statistics',
    element: <Statistics></Statistics>
  },
  {
    path: 'statistics/:id',
    element: <Statistics></Statistics>
  },
  {
    path: 'applied',
    element: <Applied></Applied>
  },
  {
    path: 'applied/:id',
    element: <Applied></Applied>
  },
  {
    path: 'blog',
    element: <Blog></Blog>
  }
]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
