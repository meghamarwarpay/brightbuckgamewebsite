import Header from '@/Layout/Header'
import React from 'react'
import BannerCarousel from './BannerCarousel'
import AboutUs from './AboutUs'
import HowToPlay from './HowToPlay'
import Play from './Play'
import Features from './Features'
import Counter from './Counter'
import JoinUs from './JoinUs'
import Footer from '@/Layout/Footer'
import Copyright from '@/Layout/Copyright'

function HomeComponent() {
  return (
    <div>
        <Header/>
        <BannerCarousel/>
        <AboutUs/>
        <HowToPlay/>
        <Play/>
        <Features/>
        <Counter/>
        <JoinUs/>
        <Footer/>
        <Copyright/>
    </div>
  )
}

export default HomeComponent