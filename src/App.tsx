import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import How from './components/How'
import Popular from './components/Popular'
import Want  from './components/Want'

function App():React.JSX.Element {
  return (
    <>
      <Navbar/>
      App
      <Want/>
      <How/>
      <Popular/>
      <Footer/>
    </>
  )
}

export default App
