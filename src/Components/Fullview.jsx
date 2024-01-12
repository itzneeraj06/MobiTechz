import React from 'react'
import './CSS/fullview.css'
import img1 from '../asset/product1.webp';
import alldata from '../asset/AllProduct';
import { useParams } from 'react-router';
const Fullview = () => {
  
  const {id}=useParams();//useParam use karke ko ko ui pr update kiya hai
  const product=alldata.find((e)=>e.id===Number(id));//id ko product variable me store kiya hai 
    
  return (
    <div className='mainnnnn'>
      <div className='mainfullview'>
        <p>{product.brand } {product.model}</p>
        <p>release date :<b>{product.date}20-12-2023</b></p>
        <div className='innerfull'>
          <div className="leftimg">
            <img src={img1} alt="imgnot found" className='fullimg' />
          </div>
          <div className="rightinfo">


            <div className="con1">
              <div>
                <p>{product.model}</p>
                <p>Rs. {product.price}</p>
              </div>
              <div className="buybtn">
                <button>Buy Now</button>
              </div>


            </div>
            <div className="con2">
              <p className='key'>Key Specifications</p>
              <ul>
                <li><b>Processor:</b> {product.processor}</li>
                <li><b>Screen Size:</b> {product.screenSize}</li>
                <li><b>Rear Camera:</b> {product.camera}</li>
                <li><b>front camera:</b> 12mp</li>
                <li><b>Dual Sim:</b> 5G&5G</li>
                <li><b>OS:</b> IOS 17</li>
                <li><b>Battery:</b> {product.battery}</li>
                <li><b>Storage:</b> 256gb/512gb/1tb</li>

              </ul>
            </div>




          </div>

        </div>

      </div>
    </div>
  )
}

export default Fullview