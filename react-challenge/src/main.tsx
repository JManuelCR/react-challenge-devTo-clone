import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.scss'

const router =  createBrowserRouter([
  // {
  //   path: '/',
  //   element: <Home />,
  //   errorElement: <NotFoundPages />,
  // },
  {
    path:'/login',
    element: <Login />,
    errorElement: <NotFoundPages />,
  },
  // {
  //   path: '/register',
  //   element: <Register />,
  //   errorElement: <NotFoundPages />,
  // },
  // {
  //   path: '/post',
  //   element: <Post />,
  //   errorElement: <NotFoundPages />
  // },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
