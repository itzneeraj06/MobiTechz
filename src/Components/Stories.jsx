import React from 'react'
import '../Components/CSS/stories.css'
import imgupdate from '../asset/updates.webp'
const Stories = (props) => {
  return (
    <div className='mainn'>
        <h1>{props.heading}</h1>
        <div className="cart">
            <div className='innercart'>
                <img src={imgupdate} alt="" height='140px' width='210px' />
                <p>{props.title}</p>
            </div>
            <div className='innercart'>
                <img src={imgupdate} alt="" height='140px' width='210px' />
                <p>{props.title}</p>
            </div>
            <div className='innercart'>
                <img src={imgupdate} alt="" height='140px' width='210px' />
                <p>{props.title}</p>
            </div>
            <div className='innercart'>
                <img src={imgupdate} alt="" height='140px' width='210px' />
                <p>{props.title}</p>
            </div>
            <div className='innercart'>
                <img src={imgupdate} alt="" height='140px' width='210px' />
                <p>{props.title}</p>
            </div>
            <div className='innercart'>
                <img src={imgupdate} alt="" height='140px' width='210px' />
                <p>{props.title}</p>
            </div>
            <div className='innercart'>
                <img src={imgupdate} alt="" height='140px' width='210px' />
                <p>{props.title}</p>
            </div>
            <div className='innercart'>
                <img src={imgupdate} alt="" height='140px' width='210px' />
                <p>{props.title}</p>
            </div>

            
        </div>

    </div>
  )
}

export default Stories