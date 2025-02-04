import { useEffect } from "react";
import { Link } from "react-router-dom";
import ViewOrders from "./ViewOrders";
import Reviews from "./Reviews";

function CarCollection({cars, allCars, searchQuery, setSearchedCar}) {
  // console.log({cars})
  useEffect(()=>{
    if(searchQuery === ""){
          setSearchedCar(allCars) //displays all cars if search is empty
        }else{
          // const filtered = cars.filter((car) => 
          //   car.name.toLowerCase().includes(searchQuery)
          setSearchedCar(cars.filter((car) => 
            car.name.toLowerCase().includes(searchQuery))
        )
        // setSearchedCar(filtered) //displays only serch resultrs
        }
  }, [searchQuery, allCars, setSearchedCar])

  return (
    <div className="main-main">
      <h1>car collection</h1>
      <div className="main">
    {cars.length === 0 ? (
      <p>no cars available</p>
    ): (cars.map((car) => {
        return (          
          <li className='car-container' key={car.id}>
            <h1>{car.name}</h1>
            <img src={ car.picture}  alt={car.make}  />
            <h5>Ksh.{car.price}</h5>
            <h3>Car model: {car.model} <br /><span>Make:{car.year}</span> </h3>
            <h4>Fuel type: {car.fuel}</h4>
            <h4>Displacement: {car.displacement}</h4>
            {/* state sends selected car's data to MakeOrder */}
            <Link to={`/make-order`} state={{car}}> 
              <button className="buyCar" >Place Order</button>
            </Link>
          </li>
    )})
      )}
    </div>

    <Reviews/>
    </div>
  );
}

export default CarCollection;