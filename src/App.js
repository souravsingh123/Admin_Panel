import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Course from './pages/Course'
import Nomatch from './components/Nomatch'
import Navbar from './components/Navbar'
import {Routes,Route}  from 'react-router-dom'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/course' element={<Course/>}/>
    <Route path='*' element={<Nomatch/>}/>
    </Routes>
    </>
  )
}

export default App
