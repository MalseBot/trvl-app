import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home, Service, Sign, Products, NavBar, Footer } from './Components'
function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Service.jsx' element={<Service />} />
          <Route path='/Sign.jsx' element={<Sign />} />
          <Route path='/Products.jsx' element={<Products />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
