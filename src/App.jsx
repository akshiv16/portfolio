import React from 'react'
import Navbar from './Componenets/Navbar/Navbar'
import Profile from './Componenets/Profile/Profile'
import About from './Componenets/About/About'
import Services from './Componenets/Servcies/Services'
import Mywork from './Componenets/Mywork/Mywork'
import Contact from './Componenets/Contact/Contact'
import Footer from './Componenets/Footer/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <Profile/>
      <About/>
      <Services/>
      <Mywork/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
