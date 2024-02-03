import { useState } from 'react'
import Home from './pages/Home'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Admin from './pages/Admin'
import About from './pages/About'
import EditEmpolyee from './layout/EditEmployee'
import Contact from './pages/Contact'

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/add-employee' element={<EditEmpolyee />} />
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/edit-employee' element={<EditEmpolyee/>}/>
        <Route path="/*" element={<NotFound/>} />
      </Routes>
      <Footer />
    </Router>

  )
}

export default App
