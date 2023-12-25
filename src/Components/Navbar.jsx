import React from 'react'
import './CSS/navbar.css'
import navigation_bar from '../asset/navigation-bar.png'


const Navbar = () => {
  return (
    <div>
        <div className="navbar">
            <button onClick={()=>{}}><img src={navigation_bar} alt="" height='40px' width='40px'/></button>
            <span id='nav-heading' >MobiTechz</span>
            <div className="search">
              <input type="text" placeholder='Text here' />
              <button >Search</button>
            </div>

            

        </div>


    </div>
  )
}

export default Navbar