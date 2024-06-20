import React from 'react'
import './CSS/listview.css'
import { Link } from 'react-router-dom'
import { FaCamera, FaMicrochip, FaDesktop, FaBatteryFull, FaArrowRight } from 'react-icons/fa';

const Listview = (props) => {

  return (
    <div className='list1'>
      <div className="l11">
        <div className='l111'>
          <div className="l1111">
            <img src={props.img} alt="aaaa" id='pimg' />
          </div>
          <div className='l1112'>
            +
          </div>
        </div>
        <div className='l112'>
          <div className='l1121'>{props.brand} {props.model}</div>
          <div className='l1122'>
            <div className='l11221'>
              <div className='l112211'>
                <FaDesktop size={20} />
              </div>
              <div className='l112212'>
                <p className='l1122121'>Display</p>
                <p className='l1122122'>{props.screen}</p>
              </div>
            </div>
            <div className='l11221'>
              <div className='l112211'>
                <FaMicrochip size={20} />
              </div>
              <div className='l112212'>
                <p className='l1122121'>Processor</p>
                <p className='l1122122'>{props.processor}</p>
              </div>
            </div>
            <div className='l11221'>
              <div className='l112211'>
                <FaCamera size={20} />
              </div>
              <div className='l112212'>
                <p className='l1122121'>Camera</p>
                <p className='l1122122'>{props.camera}</p>
              </div>
            </div>
            <div className='l11221'>
              <div className='l112211'>
                <FaBatteryFull size={20} />
              </div>
              <div className='l112212'>
                <p className='l1122121'>Battery</p>
                <p className='l1122122'>{props.battery}</p>
              </div>
            </div>
          </div>
          <div className='l1123' >
            <Link to={`/Fullview/${props.id}`} onClick={() => window.scrollTo(0, 0)} >more specs &nbsp;&nbsp;<FaArrowRight /></Link></div>
        </div>
      </div>
      <div className='l12'>
        <div className='l121'>release date <br />{props.release}</div>
        <div className='l122'>
          <div className='l1221'>RS. {props.price}</div>
          <button className='l1222'>Buy Now</button></div>
      </div>
      <div className='l13'>show similar </div>
    </div>

  )
}

export default Listview
