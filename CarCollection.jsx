function CarCollection({data}) {
  return (
    <div className='main'>
    {data.map((car) => {
        return (
          <ul >
          <li className='car-container' key={car.id}>
            
            <h1>{car.name}</h1>
            <img src={ car.picture}  alt={car.make}  />
            <h5>Ksh.{car.price}</h5>
            <h2>model: {car.model} </h2>
            <h3>Year: {car.year}</h3>
            <h4>Fuel type: {car.fuel} Displacement:{car.displacement} </h4>
            <button className="buyCar">Buy car</button>
            
          </li>
          </ul>
        )
        }
    )}
    
    </div>
  );
}

export default CarCollection;