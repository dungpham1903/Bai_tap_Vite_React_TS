// import React from 'react'
import { Footer } from './components/footer/Footer'
import { Header } from './components/header/Header'
import Navbar from './components/header/Navbar'
import { Home } from './components/Home'


function App() {
  return (<>
    <div className='app-container'>
      <Header />
      <Home />
      <Footer />
      {/* <Navbar></Navbar> */}
    </div>
  </>)
}

export default App
