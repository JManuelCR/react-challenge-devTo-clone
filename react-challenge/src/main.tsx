import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './pages/Login'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.scss'
import CeratePost from './pages/CreatePost'
import Post from './pages/Post'

const router =  createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    // errorElement: <NotFoundPages />,
  },
  {
    path:'/login',
    element: <Login />,
    // errorElement: <NotFoundPages />,
  },
  {
    path: '/signup',
    element: <SignUp />,
    // errorElement: <NotFoundPages />,
  },
  {
    path: '/create',
    element: <CeratePost />,
    // errorElement: <NotFoundPages />
  },
  {
    path: '/post',
    element: <Post />,
    // errorElement: <NotFoundPages />
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
