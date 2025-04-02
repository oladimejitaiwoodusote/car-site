import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import How from './components/How'

function App():React.JSX.Element {
  return (
    <>
      <Navbar/>
      <How/>
      App
      <Footer/>
    </>
  )
}

export default App
