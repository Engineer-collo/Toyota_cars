import { useState, useEffect } from 'react'

import './App.css'

function App() {
const[cars, setCars] = useState([])
console.log(cars)
useEffect(
  () => {
    fetch('http://localhost:8001/cars')
    .then((response) => response.json())
    .then((data) => setCars(data))
  },[]
)
  return (
    <>
      {cars.map((car) => {
        return (
          <div key={car.id}>
            <h1>{car.make}</h1>
            <img src={ car.picture}  alt={car.make}  />
            <h2>{car.model}</h2>
            <h3>{car.year}</h3>
            <h4>{car.color}</h4>
            <h5>{car.price}</h5>
          </div>
        )
      }

    
    
    
    )}
    </>
  )
}

export default App
