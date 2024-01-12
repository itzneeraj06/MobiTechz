import React from 'react'
import './CSS/listview.css'
import { Link } from 'react-router-dom'
import img1 from "../asset/product1.webp"
const Listview = (props) => {
  
  return (
    <div className='lv1'>
      <div className="lv2">
        <div className="lv3"><img src={img1} alt="" /></div>
        <div className="lv4">
          <div className="lv5">{props.brand}{props.model}</div>
          <div className="lv6">Rs.{props.price}</div>
        </div>
        <div className="lv6">
          <Link to={`../Fullview/${props.id}`}><button>View Details</button></Link>
        </div>
      </div>
    </div>

  )
}

export default Listview