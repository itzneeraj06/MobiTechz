import React from 'react'
import Banner from '../Components/Banner'
import Bestsmartphone from '../Components/Bestsmartphone'
import Stories from '../Components/Stories'
import Brands from '../Components/Brands'
import Header from '../Components/Header'
const Home = () => {
  return (
    <div className='mainContainer'>
      <Header/>
      <Banner/>
      <Bestsmartphone heading="Best SmartPhone's Under 10000"/>
      <Stories heading="Tech Updates" title="Redmi Note 13s Bezel vs iPhone 14 Pro: A NOTiceable Upgrade "/>
      <Brands heading="Featured Phone Brand's"/>
    </div>
  )
}

export default Home
