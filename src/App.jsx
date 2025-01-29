import { useState, useEffect } from 'react'

import './App.css'
import CarCollection from '../CarCollection'
import { Routes, Route } from 'react-router-dom'
import About from './About'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import Login from './Login.jsx'
import Comments from '../Comments.jsx'

function App() {
const[cars, setCars] = useState([])


  
useEffect(
  () => {
    fetch('http://localhost:8001/cars')
    .then((response) => response.json())
    .then((data) => setCars(data))
  },[]
)
  return (
    <>
    <Navbar />

  
    <Routes>

      <Route path='/' element={<CarCollection data={cars} />} />
      <Route path='/About' element={<About />} />
      <Route path='/Login' element={<Login/>} />
      <Route path='/Comments' element={<Comments />} />


    </Routes>
    <Footer />
    </>
  )
}

export default App
