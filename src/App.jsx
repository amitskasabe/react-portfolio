import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/skills'
import Footer from './components/Footer'
const App = () => {
  return (
    <div className='dark:bg-slate-800 text-white'>
        <Navbar/>
        <Hero/>
        <Skills/>
        <Footer/>
    </div>
  )
}

export default App