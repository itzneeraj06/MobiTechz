import React from 'react'
import './CSS/navbar.css'
import navigation_bar from '../asset/navigation-bar.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <button onClick={() => { }}><img src={navigation_bar} alt="" height='40px' width='40px' /></button>
        <Link to="/"><span id='nav-heading' >MobiTechz</span></Link>
        <div className="search">
          <input type="text" placeholder='Text here' />
          <button >Search</button>
          <div>
            <Link to={"Login"}>Login</Link>
          </div>

        </div>



      </div>


    </div>
  )
}

export default Navbar