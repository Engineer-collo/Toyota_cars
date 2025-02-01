import { useState, useEffect } from 'react'

import './App.css'
import CarCollection from '../CarCollection'
import { Routes, Route } from 'react-router-dom'
import About from './About'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import Login from './Login.jsx'
import Comments from '../Comments.jsx'
import Contact from './Contact.jsx'


function App() {
const[cars, setCars] = useState([])

// state to keep track of seach input
const [searchInput, setSearchInput] = useState([])

const handleSearch = (query) => {
  if (!query) {
    setSearchInput(cars);
  } else {
    const results = cars.filter((car) =>
      car.name.toLowerCase().includes(query.toLowerCase())
    );
    setSearchInput(results);
  }
};


  
useEffect(
  () => {
    fetch('http://localhost:8001/cars')
    .then((response) => response.json())
    .then((data) => {
      setCars(data)
      setSearchInput(data)
    }
    )

  },[]
)
  return (
    <>
    <Navbar 
      onSearch={handleSearch}
    />

      {/* //data={cars}  */}
  
    <Routes> 

      <Route path='/' element={<CarCollection cars = {searchInput} />} />
      <Route path='/About' element={<About />} />
      <Route path='/Login' element={<Login/>} />
      <Route path='/Comments' element={<Comments />} />
      <Route path ='/Contact' element={<Contact />} />
      <Route path='/Admin' element={<messages />} />


    </Routes>
    <Footer />
    </>
  )
}

export default App
