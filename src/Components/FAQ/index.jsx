import React from 'react'
import MainVideo from '../About/components/MainVideo'
import Banner from './components/Banner'
import QUICKACTIONS from './components/QUICKACTIONS'
import SELECTACATEGORY from './components/SELECTACATEGORY'
import STILLNEEDHELP from './components/STILLNEEDHELP'

const index = () => {
  return (
    <>
    <MainVideo/>
      <Banner />
      <QUICKACTIONS />
      <SELECTACATEGORY />
      <STILLNEEDHELP />
    </>
  )
}

export default index
