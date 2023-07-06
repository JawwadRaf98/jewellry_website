import React from 'react'
import FifthBanner from './components/FifthBanner'
import FourthBanner from './components/FourthBanner'
import Main from './components/Main'
import SecondBanner from './components/SecondBanner'
import ThirdBanner from './components/ThirdBanner'
import video from "../Assets/jewellery.mp4";
import MainVideo from './components/MainVideo'

const index = () => {
  return (
    <>
    <MainVideo />
    <Main />
    <SecondBanner />
    <ThirdBanner />
    <FourthBanner />
    <FifthBanner />
    </>
  )
}

export default index
