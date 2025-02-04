import React from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import './MakeOrder.css'


// the useLocation retrieves car details from the navigation state
const MakeOrder = () => {
    const location = useLocation();
    const car = location.state?.car; //passes the car details

    // states of user input
    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [address, setAddress] = useState('')

    // need a handleSubmit here for the form
    const handleOrder = (e) => {
         e.preventDefault()
        //console.log("Order Submitted: ", {firstname, lastname, email, phoneNumber, address, car})
        const order = {firstname, lastname, email, phoneNumber, address, car}
//console.log("Final order:" ,order)



fetch("http://localhost:8001/orders", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(order)
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error("Error:", error));



setFirstName( "")
setLastName( "")
setEmail( "")
setPhoneNumber( "")
setAddress( "")

alert("order successfully placed");

    }


  return (
    <div className='make-order'>
        <h1>complete your order</h1>
        <div className="order-container">
            <form action="" className="order-form" onSubmit={handleOrder}>
                <h3>Enter Delivery Details</h3>
                <div className="input-div">
                    <span><label htmlFor="email">Email Address</label>*</span>
                    <input 
                        type="text" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='example@example.com'
                        required
                    />
                </div>
                <div className="name-div">
                    <div className="input-div">
                        <span><label htmlFor="firstName">First Name</label>*</span>
                        <input 
                            type="text"
                            value={firstname}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder='First Name'
                            required
                        />
                    </div>
                    <div className="input-div">
                        <span><label htmlFor="lastName">Last Name</label>*</span>
                        <input 
                            type="text"
                            value={lastname}
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder='Last Name'
                            required
                        />
                    </div>
                </div>
                <div className="input-div">
                    <span><label htmlFor="phoneNo">Phone Number</label>*</span>
                    <input 
                        type="text" 
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder='+254 712 345 678'
                        required
                    />
                </div>
                <div className="input-div">
                    <span><label htmlFor="location">Location</label>*</span>
                    <input 
                        type="text" 
                        value={address}
                        onChange={(e) => setAddress(e.target.value)} 
                        placeholder='Location'
                        required
                    />
                </div>
                <button className='orderSubmitBtn'>submit</button>
            </form>

            {/* display the car ordered */}
            {car ? (
                <div className="your-order">
                    <h2>{car.name}</h2>
                    <img src={car.picture} alt="" />
                    <h3>Ksh. {car.price}</h3>
                    <h4>Year: {car.year} <br /> Fuel: {car.fuel}</h4>
                </div>
            ): (
                <p>Select a vehicle</p>
            )}
        </div>
    </div>
  )
}

export default MakeOrder