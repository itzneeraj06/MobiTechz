import React from 'react'
import './CSS/brands.css'
import img1 from '../asset/brands1.png'
import img2 from '../asset/brands2.jpg'
import img3 from '../asset/brands3.png'
import img4 from '../asset/brands4.jpg'
import img5 from '../asset/brands5.jpg'
import img6 from '../asset/brands6.jpg'
import img7 from '../asset/brands7.jpg'
import img8 from '../asset/brands8.jpg'


const Brands = (props) => {
  return (
    <div className="mainnn">
        <div className='brandsmain'>
        <h2>{props.heading}</h2>
        <div className='brandimg'>
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
            <img src={img5} alt="" />
            <img src={img6} alt="" />
            <img src={img7} alt="" />
            <img src={img8} alt="" />


        </div>
        <button>All Brands</button>
    </div>
    </div>
  )
}

export default Brands