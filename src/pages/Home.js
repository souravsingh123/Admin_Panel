import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import headerimg from '../images/img1.jpg'
import Service from '../components/Service'
import Category from '../components/Category'
import Testimonial from '../components/Testimonial'
import Instructor from '../components/Instructor'
const Home = () => {
  return (
    <>
    
    <Header
    title='Get educated online from your home'
    para='It has long been a subject of discussion whether topic name or not. In my opinion, the  former notion has severel'
    imagepath={headerimg}
    btntext='Join Now'
    visit=" course"/>
    <Service/>
    <Category/>
    <Testimonial/>
    <Instructor/>
    <Footer/>
    </>
  )
}

export default Home