import React from 'react'
import Hero from '../Component/Hero'
import LatestCollection from '../Component/LatestCollection'
import BestSeller from '../Component/BestSeller'
import OurPolices from '../Component/OurPolices'
import NewsLatterBox from '../Component/NewsLatterBox'

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <LatestCollection></LatestCollection>
      <BestSeller></BestSeller>
      <OurPolices></OurPolices>
      <NewsLatterBox></NewsLatterBox>
    </div>
  )
}

export default Home