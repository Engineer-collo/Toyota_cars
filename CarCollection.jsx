function CarCollection({cars}) {
  return (
    <div className="main">
    {cars.length > 0 ? (cars.map((car) => {
        return (
          <ul className='main'>
          <li className='car-container' key={car.id}>
            
            <h1>Car name:{car.name}</h1>
            <img src={ car.picture}  alt={car.make}  />
            <h5>Ksh.{car.price}</h5>
            <h2>Car model:{car.model}</h2>
            <h3>Make:{car.year}</h3>
            <h4>Fuel type:{car.fuel}</h4>
            <h4>Displacement:{car.displacement}</h4>
            <button className="buyCar">Place Order</button>
            
          </li>
          </ul>
    )}))
         : (
          <h1> 404! Not Found</h1>
        )}
    
    
    </div>
  );
}

export default CarCollection;