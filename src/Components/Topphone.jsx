import React from 'react'
import product1 from '../asset/product1.webp'
import './CSS/topphone.css'
const Topphone = (props) => {
  return (
    <div>
      <div className='container'>
        <div className="img"><img src={product1} alt="img not found" height={'200px'} /></div>
        <div className="heading">
          <p id='name'>{props.name}</p>
          <p id='price'><b>{props.price}</b></p>
        </div>
        <button className='button1'>View details</button>


      </div>
    </div>
  )
}

export default Topphone