import './CSS/bestsmartphone.css'
import Topphone from './Topphone.jsx'
import React from 'react'
import { Link} from 'react-router-dom'
import alldata from '../asset/AllProduct'

const Bestsmartphone = (props) => {
    

    return (


        <div className='main'>

            <div className="toplistheading">
                <h2>{props.heading}</h2>
                <hr className='hr'/>
            </div>
            <div className="productlst">
                {
                    alldata.map((item,i)=>{
                        if(item.price<=props.pricemax&&item.price>props.pricemin)
                        {
                            return <Topphone id={item.id} name={item.model} price={item.price}/>
                                
                        }
                        else{return null;} 
                        }
                        )
                }
            <div className='moree'>
                <Link to='/Productdetails' className='styled-link' onClick={() => window.scrollTo(0, 0)}>View All</Link>
            </div>
 

            </div>
            
        </div>
    )
}

export default Bestsmartphone