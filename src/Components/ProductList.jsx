import React from 'react'
import alldata from '../asset/AllProduct'
import Listview from './Listview'
import { useParams } from 'react-router'
const ProductList = () => {
    const {brand}=useParams();
  const shopbybrand = alldata.find((e)=>e.brand===(brand));
  return (
    <div>
        <div className="pl1">
            <div className="pl2">
                <h3>Shop By Brand {shopbybrand.brand}</h3>
            </div>
            <div className="pl3">
                {
                    alldata.map((item,i)=>{
                        if(item.brand===shopbybrand.brand)
                        {
                            return <Listview id={item.id} model={item.model} brand={item.brand} price={item.price}/>
                        }else{
                            return null
                        }
                     })
                }
            </div>
            
            
        </div>


    </div>
  )
}

export default ProductList