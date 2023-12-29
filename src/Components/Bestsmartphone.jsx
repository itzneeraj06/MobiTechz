import React from 'react'
import './CSS/bestsmartphone.css'
import Topphone from './Topphone'
const Bestsmartphone = (props) => {
    return (
        <div className='main'>

            <div className="toplistheading">
                <h2>{props.heading}</h2>
            </div>
            <div className="productlist">
                <Topphone name="Xiaomi Redmi 13C" price="8999/-"/>
                <Topphone name="Poco M6 Pro 5g" price="11299/-"/>
                <Topphone name="Realme C53" price="9279/-"/>
                <Topphone name="Poco C65" price="7947/-"/>
                <Topphone name="Samsung Galaxy A05" price="9999/-"/>
            </div>
            <div className='more'><button>More</button></div>

        </div>
    )
}

export default Bestsmartphone