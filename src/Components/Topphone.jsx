import React from 'react'
import product1 from '../asset/product1.webp'
import './CSS/topphone.css'
import { Link} from 'react-router-dom'

const Topphone = (props) => {
  
  return (
    <div>
      <div className='container'>
        <div className="img"><img src={product1} alt="img not found" height={'200px'} /></div>
        <div className="heading">
          <p id='name'>{props.name}</p>
          <p id='price'><b>Rs.{props.price}</b></p>
        </div>
        <Link to={`/Fullview/${props.id}`}><button className='button1' >View details </button></Link>


      </div>
    </div>
  )
}

export default Topphone