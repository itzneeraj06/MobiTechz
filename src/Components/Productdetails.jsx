import React from 'react'
import Listview from './Listview'
import alldata from '../asset/AllProduct'
import './CSS/listview.css'
const Productdetails = () => {
  return (
    <div><div className="pl2">
      <h3>Shop By Price under 10000 </h3>
    </div>

      <div className="productlist">
        {
          alldata.map((item, i) => {
            if (item.price <= 10000) {
              return <Listview id={item.id} model={item.model} brand={item.brand} price={item.price} release={item.release} screen={item.screenSize} processor={item.processor} battery={item.battery} camera={item.camera} />

            }
            else { return null; }
          }
          )
        }

      </div>
    </div>)
}

export default Productdetails