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

  // function to delete an order
  const handleDelete = (id) =>{
    fetch(`http://localhost:8001/orders/${id}`,{
      method: 'DELETE',
    })
    .then((response) => {
      if(response.ok){
        setOrders(orders.filter(order => order.id !== id))
      }
    })
    .catch((error) => console.error('error deleting', error))
  }

  return (
    <div className='orders'>
      <h1>Admin Dashboard</h1>
      
<<<<<<< HEAD
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
      
            
=======
      <h2>orders</h2>
      <table>
        <thead>
          <tr>        
            <th>OrderID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Shipping Address</th>
            <th>Make</th>
            <th>Model</th>
            <th>Price</th>
            <th>Available</th>
>>>>>>> b0b1465b10e4ace5944c8361503bea393c12d594
          </tr>
        </thead>
        <tbody>
          {orders.length > 0 ? (orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.firstname}</td>
              <td>{order.lastname}</td>
              <td>{order.phoneNumber}</td>
              <td>{order.email}</td>
<<<<<<< HEAD
              <td>{order.address}</td> 
              <td>{order.car.model}</td>
              <td>{order.car.price}</td>
              
=======
              <td>{order.address}</td>
              <td>{order.car.year}</td>
              <td>{order.car.model}</td>
              <td>{order.car.price}</td>
              <td><button onClick={()=>handleDelete(order.id)}>delete</button></td>
>>>>>>> b0b1465b10e4ace5944c8361503bea393c12d594
            </tr>
          ))):(
            <td>No pending Orders</td>
          )}
        </tbody>
      </table>
      </div> 

          )}
       

export default ViewOrders
