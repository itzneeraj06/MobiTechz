import React, { useState } from 'react'
import './CSS/fullview.css'
// import img1 from '../asset/product1.webp';
import ecomm1 from '../asset/ecom1.webp';
import ecomm2 from '../asset/ecom2.webp';
import ecom3 from '../asset/ecom3.png';
import alldata from '../asset/AllProduct';
import { useParams } from 'react-router';
import { FaCamera, FaMicrochip, FaDesktop, FaBatteryFull } from 'react-icons/fa';
const Fullview = () => {

  const { id } = useParams();//useParam use karke ko ko ui pr update kiya hai
  const product = alldata.find((e) => e.id === Number(id));//id ko product variable me store kiya hai 
  const [desc, setdesc] = useState(false);
  console.log(product);
  const fulldesc = () => {
    setdesc(!desc);
  }


  return (
    <div className="outerfullview">
      <div className='fullviewcontainer'>
        <div className='page1'>
          <div className="fullviewtitle">
            {product.brand}&nbsp;{product.model}
          </div>
          <div className='fullviewhome'>
            <div className="fullviewimg">
              <img src={product.img} alt="" />
            </div>
            <div className="fullviewspecs">
              <div className='fullviewpricebtn'>
                <div>Check Prices</div>
                <div>Rs.{product.price} <a href="#buynow"><button>Go to Store</button></a></div> </div>
              <div className='keyspecs'>Key Specs</div>
              <div className="viewspecs">
                <div className='vsinner'>
                  <div className='i1'><FaDesktop /></div>
                  <div className='i2'><div className='i3'>display</div>

                    <div className='i4'>{product.display.size}</div></div>
                </div>
                <div className='vsinner'>
                  <div className='i1'><FaMicrochip /></div>
                  <div className='i2'> <div className='i3'>processor</div>
                    <div className='i4'>{product.platform.processor}</div></div>
                </div>
                <div className='vsinner'>
                  <div className='i1'><FaCamera /></div>
                  <div className='i2'> <div className='i3'>front camera</div>
                    <div className='i4'>{product.camera.front.px}</div></div>
                </div>
                <div className='vsinner'>
                  <div className='i1'><FaCamera /></div>
                  <div className='i2'> <div className='i3'>rear camera</div>
                    <div className='i4'>{product.camera.rear.main}</div></div>
                </div>
                <div className='vsinner'>
                  <div className='i1'><FaMicrochip /></div>
                  <div className='i2'><div className='i3'>ram</div>
                    <div className='i4'>{product.ram}</div></div>
                </div>
                <div className='vsinner'>
                  <div className='i1'><FaMicrochip /></div>
                  <div className='i2'> <div className='i3'>storage</div>
                    <div className='i4'>{product.memory.rom}</div></div>
                </div>
                <div className='vsinner'>
                  <div className='i1'><FaBatteryFull /></div>
                  <div className='i2'><div className='i3'>battery</div>
                    <div className='i4'>{product.battery.capacity}</div></div>
                </div>
                <div className='vsinner'>
                  <div className='i1'> <FaMicrochip /></div>
                  <div className='i2'><div className='i3'>OS</div>
                    <div className='i4'>{product.platform.os}</div></div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="page2">
          <div className='page2heading'>Summary</div>
          <div className='page2desc' >
            {
              !desc ? (product.desc.substr(0, 500) + "...") : (product.desc)
            }
            {
              !desc ? (<button onClick={fulldesc}>
                show more
              </button>) : <button onClick={fulldesc}>show less</button>
            }
          </div>
        </div>
        <div className="page3">
          <div className='page3heading'>Variants</div>
          <div className='variantsbox' id='buynow'><p>4gb/64gb</p><p>6gb/64gb</p><p>6gb/128gb</p></div>
        </div>
        <div className="page4" >
          <div className='page4heading'>{product.model} price in india</div>
          <div className="storeprices">
            <p className='stores'> <p><img src={ecomm1} alt="" />{product.brand}&nbsp;{product.model} </p><p id='buy'>buynow</p></p>
            <p className='stores'> <p><img src={ecomm2} alt="" />{product.brand}&nbsp;{product.model} </p><p id='buy'>buynow</p></p>
            <p className='stores'> <p><img src={ecom3} alt="" />{product.brand}&nbsp;{product.model} </p><p id='buy'>buynow</p></p>


          </div>
        </div>
        <div className="page5">
          <div className='page5heading'>Full Specifications</div>
          <div className="fullspecs">
            <div className="general">
              <h3>General</h3>
              <p>Brand :</p>
              <p>Model :</p>
              <p>Price :</p>
              <p>Release Date :</p>
              <p>Launched in india :</p>
              <p>Form factor :</p>
              <p>Dimension :</p>
              <p>weight :</p>
              <p>Battery :</p>
              <p>Fast Charging :</p>
              <p>Wireless Charging :</p>
              <p>Colors :</p>

            </div>

            <div className="display">
              <h3>Display</h3>
              <p>Refresh Rate :</p>
              <p>Screen Size :</p>
              <p>Touch Screen :</p>
              <p>Pixel Per inch (PPI) :</p>
            </div>
            <div className="hardware">
              <h3>Hardware</h3>
              <p>Processor :</p>
              <p>RAM :</p>
              <p>Internal Storage :</p>
              <p>Expandable Storage : </p>
            </div>
            <div className="camera">
              <h3>Camera</h3>
              <p>rear camera :</p>
              <p>no of rear camera :</p>
              <p>front camera :</p>
            </div>
            <div className="software">
              <h3>Software</h3>
              <p>OS :</p>
              <p>Skin :</p>

            </div>
            <div className="connectivity">
              <h3>Connectivity</h3>
              <p>Wifi :</p>
              <p>GPS :</p>
              <p>Bluetooth :</p>
              <p>NFC :</p>
              <p>Usb type-C :</p>
              <p>headphones :</p>
              <p>no of SIM's :</p>
            </div>
            <div className="sensor">
              <h3>Sensors</h3>
              <p>Compass :</p>
              <p>Proximity Sensor :</p>
              <p>accelerometer :</p>
              <p>Gyroscope :</p>
            </div>

          </div>
        </div>


      </div>
    </div>
  )
}

export default Fullview