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
              <td>{order.address}</td>
              <td>{order.car.year}</td>
              <td>{order.car.model}</td>
              <td>{order.car.price}</td>
              <td><button onClick={()=>handleDelete(order.id)}>delete</button></td>
            </tr>
          ))):(
            <td>No pending Orders</td>
          )}
        </tbody>
      </table>
      </div> 

          )}
       

export default ViewOrders
