// import React from 'react'
import { Footer } from './components/footer/Footer'
import { Header } from './components/header/Header'
import { Home } from './components/Home'
import MySwiper from './components/MySwiper'


function App() {
  return (<>
    <div className='app-container'>
      <Header />
      <Home />
      <Footer />

      {/* <MySwiper></MySwiper> */}
    </div>
  </>)
}

export default App
