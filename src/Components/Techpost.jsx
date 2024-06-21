import React from 'react'
import './CSS/techpost.css'
const Techpost = (props) => {
  return (
    <div>
      <div className="techbox">
      <div id='tech4'><img src={props.p3} alt="" /></div>
        <div>
          <p id='tech1'>News</p>
          <p id='tech2'>{props.p1}</p>
          <p id='tech3'>{props.p2}</p>
        </div>
        
      </div>
    </div>
  )
}

export default Techpost