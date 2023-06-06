import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './Components/Home';
import MovieDetails from './Components/MovieDetails';
import BookMovie from './Components/BookMovie';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://api.tvmaze.com/search/shows?q=all')
      },
      {
        path:'/movie/:id',
        element: <MovieDetails></MovieDetails>,
        loader: ({params}) => fetch(`https://api.tvmaze.com/shows/${params.id}`)
      },
      {
        path:'/book/:id',
        element: <BookMovie></BookMovie>,
        loader: ({params}) => fetch(`https://api.tvmaze.com/shows/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
