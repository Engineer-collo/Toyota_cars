import React, { useState, useEffect } from 'react';
import "./ViewOrders.css"
const ViewOrders = () => {
//   const [cars, setCars] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
  fetch("http://localhost:8001/orders")
   .then((response) => response.json())
    .then((data) => setOrders(data))
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      
      <h2>Cars List</h2>
      <table>
        <thead>
          <tr>
        
            <th>OrderID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone Number</th>
            <th>Email Adress</th>
            <th>Shipping Adress</th>
            <th>Make</th>
            <th>Model</th>
            <th>Price</th>
            <th>Available</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.firstname}</td>
              <td>{order.lastname}</td>
              <td>{order.phoneNumber}</td>
              <td>{order.email}</td>
              <td>{order.adress}</td>
              <td>{order.car.make}</td>
              <td>{order.car.model}</td>
              <td>{order.car.price}</td>
              <td>{order.available ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div> 

          )}
       

export default ViewOrders
