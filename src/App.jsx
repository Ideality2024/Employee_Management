import { useState } from 'react'
import Home from './pages/Home'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Admin from './pages/Admin'

function App() {

  return (
    // <div className=''>
    //   <Navbar />
    // <Home />
    // <Footer />
    // </div>

    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/admin' element={<Admin />} />
        <Route path="/*" element={<NotFound/>} />
      </Routes>
      <Footer />
    </Router>

  )
}

export default App
