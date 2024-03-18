import React from 'react';
import {  RouterProvider, createBrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import Home from './Pages/Home';
import Productdetails from './Components/Productdetails';
import Fullview from './Components/Fullview';
import ProductList from './Components/ProductList';
import Login from './Components/Login';
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
      },
      {
        path:"/Fullview",
        element:<Fullview/>,
        children:[
          {
            path:":id",
            element:<Fullview />
          }
        ]
      },
      {
        path:"/ShopbyBrand",
        element:<ProductList/>,
        children:[
          {
            path:":brand",
            
            element:<ProductList/>
          }
        ]
      },
      {
        path:"/Login",
        element:<Login/>,
      }
      
      ]
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

reportWebVitals();
