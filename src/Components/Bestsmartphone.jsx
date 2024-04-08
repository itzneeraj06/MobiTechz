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
            </div>
            <div className="productlst">
                {
                    alldata.map((item,i)=>{
                        if(item.price<=10000)
                        {
                            return <Topphone id={item.id} name={item.model} price={item.price}/>
                                
                        }
                        else{return null;} 
                        }
                        )
                }
             

            </div>
            <div className='more'>
                <Link to='/Productdetails' onClick={() => window.scrollTo(0, 0)}>more</Link>
            </div>

        </div>
    )
}

export default Bestsmartphone