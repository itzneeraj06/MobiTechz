import React from 'react'
import Listview from './Listview'
import alldata from '../asset/AllProduct'
const Productdetails = () => {
  return (
    
      <div className="productlist">
                {
                    alldata.map((item,i)=>{
                        if(item.price<=10000)
                        {
                          return <Listview id={item.id} model={item.model} brand={item.brand} price={item.price} />
                                
                        }
                        else{return null;} 
                        }
                        )
                }
            
    </div>
  )
}

export default Productdetails