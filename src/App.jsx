import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import MyWork from './Components/MyWork/MyWork'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import { Toaster } from 'react-hot-toast'



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
      <Services/>
      <MyWork/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
