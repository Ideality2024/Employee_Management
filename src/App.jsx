import { useState } from 'react'
import Home from './pages/Home'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Admin from './pages/Admin'
import About from './pages/About'
import EditEmpolyee from './layout/EditEmployee'
import Contact from './pages/Contact'
import RemoveEmployee from './layout/RemoveEmployee'
import { Toaster } from 'react-hot-toast'
import EmpProfile from './layout/EmpProfile'
import ClipLoader from "react-spinners/ClipLoader";

function App() {

  return (
    <Router>
      <Navbar />
      <Toaster />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/add-employee' element={<EditEmpolyee />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/edit-employee' element={<EditEmpolyee />} />
        <Route path='/edit-employee/:id' element={<EditEmpolyee />} />
        <Route path="/delete-employee" element={<RemoveEmployee />} />
        <Route path="/delete-employee/:id" element={<EmpProfile />} />
        <Route path="/:id" element={<EmpProfile />} />
        <Route path="/loader" element={<ClipLoader color="#36d7b7" />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>

  )
}

export default App
