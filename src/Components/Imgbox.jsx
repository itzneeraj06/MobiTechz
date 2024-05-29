import React from 'react'
import './CSS/imgbox.css'
const Imgbox = (props) => {
  return (
    <div className='imgparent'>
        <div className='imginner'>
            <img src={props.img} alt="" />
        </div>
    </div>

  )
}

export default Imgbox