import React from 'react';
import {  RouterProvider, createBrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import Home from './Pages/Home';
import Productdetails from './Components/Productdetails';
const router =createBrowserRouter([
  {
    path:"",
    element:<App/>,
    children:[
      {
        path:"" ,
        element:<Home/>
      },
      {
        path:"/productdetails",
        element:<Productdetails/>
      }
    ]
  },{}
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

reportWebVitals();
