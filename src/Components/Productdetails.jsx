import React from 'react'
import Listview from './Listview'
import alldata from '../asset/AllProduct'
import './CSS/listview.css'
import { useParams } from 'react-router'
const Productdetails = () => {
  const {price}=useParams();

  return (
    <div><div className="pl2">
      <h3>Shop By Price under {price}</h3>
    </div>

      <div className="productlist">
        {
          alldata.map((item, i) => {
            if (item.price <= price&&item.price>=price-5000) {
              return <Listview id={item.id} model={item.model} brand={item.brand} price={item.price} release={item.release.date} screen={item.display.size} processor={item.platform.processor} battery={item.battery.capacity} camera={item.camera.rear.main} img={item.img} />

            }
            else { return null; }
          }
          )
        }

      </div>
    </div>)
}

export default Productdetails