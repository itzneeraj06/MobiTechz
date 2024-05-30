import React from 'react'
import { Link } from 'react-router-dom';
import './CSS/flagship.css'
const Flagship = (props) => {
  const bgimg = props.link;
  return (
    <div className='bgimgflagshipparent'>

      <div className="bgimgflagshipinner">

        <p id='head1'><span>#1</span> in {props.heading}</p>
        <div className="kyapya">
          <img src={bgimg} alt="" className='bgimgflagship' />
        </div>
        <div className="dekh">
          <p id='model'>{props.title}</p>
          <Link to={`/Fullview/${props.id}`} onClick={() => window.scrollTo(0, 0)}><p id='bottomcaption'>Full Specs</p></Link>

        </div>
      </div>


    </div >
  )
}

export default Flagship;