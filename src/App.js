import './App.css';
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { Outlet } from 'react-router';
function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>

  );
}

export default App;
