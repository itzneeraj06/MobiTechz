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
import { Link } from 'react-router-dom'


const Brands = (props) => {
  return (
    <div className="mainnn">
        <div className='brandsmain'>
        <h2>{props.heading}</h2>
        <div className='brandimg'>
           <Link to={`/ShopbyBrand/Apple`}> <img src={img1} alt="" /></Link>
           <Link to={`/ShopbyBrand/Lenovo`}> <img src={img2} alt="" /></Link>
           <Link to={`/ShopbyBrand/Nokia`}> <img src={img3} alt="" /></Link>
           <Link to={`/ShopbyBrand/Oneplus`}> <img src={img4} alt="" /></Link>
           <Link to={`/ShopbyBrand/Oppo`}> <img src={img5} alt="" /></Link>
           <Link to={`/ShopbyBrand/Vivo`}> <img src={img6} alt="" /></Link>
           <Link to={`/ShopbyBrand/Xiaomi`}> <img src={img7} alt="" /></Link>
           <Link to={`/ShopbyBrand/Samsung`}> <img src={img8} alt="" /></Link>
        </div>
        <button>All Brands</button>
    </div>
    </div>
  )
}

export default Brands