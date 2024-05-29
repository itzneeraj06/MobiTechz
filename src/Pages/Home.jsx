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
const Home = () => {
  return (
    <div className='mainContainer'>
      <Header/>
      <Banner/>
      <News/>
      <Heading heading="Sale of the Day"/>
      <Imgbox img={img}/>
      <Heading heading="Trending on Youtube"/>
      <YoutubeBox/>
      <Heading heading="Shop By Price"/>
      <Bestsmartphone heading="Under ₹10000" pricemax="10000" pricemin="5000"/>
      <Bestsmartphone heading="Under ₹15000" pricemax="15000" pricemin="10000"/>
      <Bestsmartphone heading="Under ₹20000" pricemax="20000" pricemin="15000"/>
      <Heading heading="Latest Launches"/>
      <Imgbox img={img2}/>
      <Stories heading="Tech Updates" title="Redmi Note 13s Bezel vs iPhone 14 Pro: A NOTiceable Upgrade "/>
      <Brands heading="Featured Phone Brand's"/>
    </div>
  )
}

export default Home
