import { useState, useEffect } from 'react'

import './App.css'
import CarCollection from '../CarCollection'
import Reviews from './Reviews'

function App() {
const[cars, setCars] = useState([])


  
useEffect(
  () => {
    fetch('http://localhost:3000/cars')
    .then((response) => response.json())
    .then((data) => setCars(data))
  },[]
)
  return (
    <>
    
    <CarCollection data={cars}/>
    <Reviews/>
    </>
  )
}

export default App
