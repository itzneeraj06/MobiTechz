import React from 'react'
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
  return (
    <div>
      <div className="navbar">
        <button onClick={() => { }}><img src={navigation_bar} alt="" height='40px' width='40px' /></button>
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


    </div>
  )
}

export default Navbar