import React from 'react'
import alldata from '../asset/AllProduct'
import Listview from './Listview'
import { useParams } from 'react-router'
const ProductList = () => {
    const { brand } = useParams();
    // console.log(brand);
    const shopbybrand = alldata.find((e) => e.brand === (brand));
    if(!shopbybrand){
        //yadi brands ke products available nhi ho 
        return null;

    }

    return (
        <div>
            <div className="pl1">
                <div className="pl2">
                    <h3>Shop By Brand {shopbybrand.brand}</h3>
                </div>
                <div className="pl3">
                    {
                        alldata.map((item, i) => {
                            if (item.brand === shopbybrand.brand) {
                                return <Listview id={item.id} model={item.model} brand={item.brand} price={item.price} release={item.release} screen={item.screenSize} processor={item.processor} battery={item.battery} camera={item.camera}/>
                            } else {
                                return null;
                            }
                        })
                    }

                 
                </div>


            </div>


        </div>
    )
}

export default ProductList