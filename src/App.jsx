import { useState, useEffect } from 'react'

import './App.css'
import CarCollection from '../CarCollection'

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
    
    <CarCollection data={cars}/>
    </>
  )
}

export default App
