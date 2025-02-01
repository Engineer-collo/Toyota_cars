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
      
      <h2>Car Orders</h2>
      <table>
        <thead>
          <tr>
        
            <th>Order ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone Number</th>
            <th>Customer Email Adress</th>
            <th>Shipping Adress</th>
            <th>Car Model</th>
            <th>Car Price</th>
      
            
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
              <td>{order.address}</td> 
              <td>{order.car.model}</td>
              <td>{order.car.price}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
      </div> 

          )}
       

export default ViewOrders
