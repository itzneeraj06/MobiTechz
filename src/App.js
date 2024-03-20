import './App.css';
import Navbar from './Components/Navbar'
import { useState } from 'react';
import Home from './Pages/Home';
import Productdetails from './Components/Productdetails';
import Fullview from './Components/Fullview';
import ProductList from './Components/ProductList';
import Login from './Components/Login';
import Signup from './Components/Signup';
import { Route, Routes } from 'react-router';
import PrivateRoute from './Logic/PrivateRoute';
import { ToastContainer } from 'react-toastify';

function App() {
  const [login, setLogin] = useState(false);
  console.log(login);
  return (
    <div>
      <Navbar login={login} setLogin={setLogin} />
      <Routes>

        <Route path='/' element={<PrivateRoute login={login}><Home/></PrivateRoute>} />
        <Route path="/productdetails" element={<PrivateRoute login={login}><Productdetails /></PrivateRoute>} />
        <Route path="/Fullview" element={<PrivateRoute login={login}><p>select a product</p></PrivateRoute>} />
        <Route path="/Fullview/:id" element={<PrivateRoute login={login}><Fullview /></PrivateRoute>} />
        <Route path="/ShopbyBrand" element={<PrivateRoute login={login}><ProductList /></PrivateRoute>} />
        <Route path="/ShopbyBrand/:brand" element={<PrivateRoute login={login}><ProductList /></PrivateRoute>} />
        <Route path='/Login' element={<Login login={login} setLogin={setLogin} />} />
        <Route path='/signup' element={<Signup setLogin={setLogin} />} />
        
      </Routes >
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light" />


    </div>

  );
}

export default App;
