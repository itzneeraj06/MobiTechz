import React from 'react'
import './CSS/header.css'

const Header = ({ status, setStatus }) => {
  //status update from home.jsx
  return (
    <div className="header">
      <div className='header1'>
        <ul>
          <li className={status === "mobile" ? "borderbottom" : ""} onClick={() => { setStatus("mobile") }}>Mobile</li>
          <li className={status === "laptop" ? "borderbottom" : ""} onClick={() => { setStatus("laptop") }}>Laptop</li>
          <li className={status === "tv" ? "borderbottom" : ""} onClick={() => { setStatus("tv") }}>Tv</li>
          <li className={status === "appliances" ? "borderbottom" : ""} onClick={() => { setStatus("appliances") }}>Appliances</li>
          <li className={status === "audio" ? "borderbottom" : ""} onClick={() => { setStatus("audio") }}>Audio & Wearable</li>
          <li className={status === "accessories" ? "borderbottom" : ""} onClick={() => { setStatus("accessories") }}>Accessiories</li>
          <li className={status === "updates" ? "borderbottom" : ""} onClick={() => { setStatus("updates") }}>Updates</li>
        </ul>

      </div>
    </div>
  )
}

export default Header