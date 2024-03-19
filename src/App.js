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

function App() {
  const [login, setLogin] = useState(false);
  console.log(login);
  return (
    <div>
      <Navbar login={login} setLogin={setLogin} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Login' element={<Login login={login} setLogin={setLogin} />} />
        <Route path='/signup' element={<Signup setLogin={setLogin}/>}/>
        <Route path="/productdetails" element={<Productdetails />} />
        <Route path="/Fullview" element={<p>select a product</p>} />
        <Route path="/Fullview/:id" element={<Fullview />} />
        <Route path="/ShopbyBrand" element={<ProductList />} />
        <Route path="/ShopbyBrand/:brand" element={<ProductList />} />
      </Routes >

    </div>

  );
}

export default App;
