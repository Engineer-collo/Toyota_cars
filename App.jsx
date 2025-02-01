import { useState, useEffect } from 'react'

import './App.css'
import CarCollection from './src/CarCollection.jsx'
import { Routes, Route } from 'react-router-dom'
import About from './src/About.jsx'
import Navbar from './src/Navbar.jsx'
import Footer from './src/Footer.jsx'
import Login from './src/Login.jsx'
import Comments from './src/Comments.jsx'
import MakeOrder from './src/MakeOrder.jsx'
import ViewOrders from './src/ViewOrders.jsx'

function App() {
// store all cars
const[cars, setCars] = useState([])
// store search results
const [searchedCar, setSearchedCar] = useState([])
// keep track of the search input
const [searchQuery, setSearchQuery] = useState('')


  
useEffect(() => {
  fetch('http://localhost:8001/cars')
    .then((response) => response.json())
    .then((data) => {
        setCars(data)
        setSearchedCar(data)
    })
    .catch((error) => console.error('Error Fetching cars: ', error))
  },[]
)
  return (
    <>
    <Navbar searchQuery = {searchQuery} setSearchQuery={setSearchQuery} />
    
    <Routes>
      <Route path='/' element={<CarCollection cars={searchedCar} allCars={cars} searchQuery={searchQuery} setSearchedCar={setSearchedCar} />} />
      <Route path='/About' element={<About />} />
      <Route path='/Login' element={<Login/>} />
      <Route path='/Comments' element={<Comments />} />
      <Route path='/make-order' element={<MakeOrder />} />
      <Route path='/Admin' element={<ViewOrders />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
