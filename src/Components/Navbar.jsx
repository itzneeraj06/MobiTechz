import React, { useState,useEffect } from 'react'
import './CSS/navbar.css'
import navigation_bar from '../asset/navigation-bar.png'
import { Link } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
const Navbar = ({ login, setLogin }) => {
  const navigate = useNavigate();

  const logout = () => {
    alert("do you want to logout ?")
    setLogin(false);
    navigate('/Login');

  }
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSidebarOpen(false);
      }
    };
    // call function on window scroll 
    window.addEventListener('scroll', handleScroll);
  }, []);


  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div>
      <div className="navbar">
        <button onClick={() => toggleSidebar()}><img src={navigation_bar} alt="" height='40px' width='40px' /></button>
        <Link to="/" id='nav-heading'>MobiTechz</Link>
        <div className="search">
          <input type="text" placeholder='Text here' />
          <button >Search</button>
        </div>
        {/* conditional redering */}
        {!login &&
          <div>
            <Link to={"Login"} className='loginbutton'>Login</Link>
          </div>}

        {
          login &&
          <button onClick={() => (logout())} className='logout'><div className='profileicon'><FaUser /></div></button>
        }



      </div>
      {isSidebarOpen && (

        <div className="sidebar">

          <button onClick={toggleSidebar} className='closebutton'>Close</button>
          <h3>Mobi<span id='spanhead'>techz</span></h3>
            <ul>
              
            <li><Link to='/' onClick={()=>toggleSidebar() }className='link'>Home</Link></li>
            <li><Link to='https://mobitechzblogs.netlify.app/' onClick={()=>toggleSidebar() }target='_blank' className='link'>Blogs</Link></li>
            </ul>


          

        </div>
      )}


    </div>
  )
}

export default Navbar