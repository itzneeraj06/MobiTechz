import React from 'react'
import Banner from '../Components/Banner'
import Bestsmartphone from '../Components/Bestsmartphone'
import Stories from '../Components/Stories'
import Brands from '../Components/Brands'
import Header from '../Components/Header'
import Heading from '../Components/Heading'
import Imgbox from '../Components/Imgbox'
import img from '../asset/banner7.webp'
import img2 from '../asset/banner5.webp'
import News from '../Components/News'
import YoutubeBox from '../Components/YoutubeBox'
import Flagship from '../Components/Flagship'
const Home = () => {
  
  return (
    <div className='mainContainer'>
      
      <Header/>
      <Banner/>
      <News/>
      <Heading heading="Sale of the Day"/>
      <Imgbox img={img}/>
      <Flagship heading='Flagship Phones'link='https://fdn.gsmarena.com/imgroot/reviews/24/samsung-galaxy-s24-ultra/-728x314/gsmarena_003.jpg' title='Samsung Galaxy S24 Ultra' id='24'/>
      {/* <Flagship heading='Gaming Phones'link='https://fdn.gsmarena.com/imgroot/reviews/23/asus-rog-phone-8-pro/-728x314/gsmarena_001.jpg' title='Asus ROG Phone 8 Pro' id='1'/> */}
      {/* <Flagship heading='Camera Phones'link='https://fdn.gsmarena.com/imgroot/reviews/24/xiaomi-14-ultra/-728x314/gsmarena_002.jpg' title='Xiaomi 13T Pro' id='1'/> */}
      <Heading heading="Trending on Youtube"/>
      <YoutubeBox/>
      <Heading heading="Shop By Price"/>
      <Bestsmartphone heading="Under ₹10000" pricemax="10000" pricemin="5000"/>
      <Bestsmartphone heading="Under ₹15000" pricemax="15000" pricemin="10000"/>
      <Bestsmartphone heading="Under ₹20000" pricemax="20000" pricemin="15000"/>
      <Heading heading="Latest Launches"/>
      <Imgbox img={img2}/>
      <Stories heading="Tech Updates"/>
      <Brands heading="Featured Phone Brand's"/>
    </div>
  )
}

export default Home
