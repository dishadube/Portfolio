import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import MyWork from './Components/MyWork/MyWork'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import { Toaster } from 'react-hot-toast'
import Skills from './Components/Skills/Skills'



const App = () => {
  return (
    <>
      <Navbar/>
      <Toaster 
       position='top-right'
       reverseOrder={false}
       toastOptions={{
        duration:2000,
        style:{
          background:"#333",
          color:"#fff"

        }
       }}
       
       />
      <Hero/> 
      <About/>
      <Skills/>
      <MyWork/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
