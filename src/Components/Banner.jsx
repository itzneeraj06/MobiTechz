import banner1 from '../asset/banner1.webp'
import banner2 from '../asset/banner2.webp'
import banner3 from '../asset/banner3.webp'
import './CSS/banner.css'
 
const Banner =()=>{
return (
    <div className="slider-container">
      <div className="slider">
        {/* abhi is portion ka automatic slider banana hai */}
        <div className="slides"><img src={banner1} alt="" /></div>
        <div className="slides"><img src={banner2} alt="" /></div>
        <div className="slides"><img src={banner3} alt="" /></div>
      </div>
    </div>
  )
}
export default Banner;
