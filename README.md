ViewOrders Component
The ViewOrders component allows administrators to view a list of orders, including customer details and car information. It also provides functionality to delete an order from the list.

Features
Fetches and displays orders from an API.
Displays customer and car details in a table.
Provides a button to delete individual orders.

Installation
To use this component in your React project, follow these steps:

Clone or Download the Project: If you haven't already, clone or download the project where this component will be used.

Install Dependencies: Run the following command to install all the necessary dependencies for the project:

npm install
CSS Styling (Optional): This component imports a CSS file called ViewOrders.css. You can modify this file to change the styles for the component.


import ViewOrders from './path/to/ViewOrders';

2. Add the Component to Your JSX
Once imported, you can use the component like any other React component:



<ViewOrders />
This will render the ViewOrders component, which will display the list of orders, with the option to delete them.

How It Works
Fetching Orders: The component uses the useEffect hook to fetch order data from a local API (http://localhost:8001/orders) when the component is mounted.

js

useEffect(() => {
  fetch("http://localhost:8001/orders")
    .then((response) => response.json())
    .then((data) => setOrders(data))
}, []);
Displaying Orders: The orders state is used to store the fetched data. The component maps through the orders array and displays each order's details (Order ID, First Name, Last Name, etc.) in a table.

Deleting an Order: The deleteOrder function is triggered when the "delete" button is clicked. It sends a DELETE request to the API to remove the order and updates the state to reflect the changes.

js

const deleteOrder = (orderId) => {
  fetch(`http://localhost:8001/orders/${orderId}`, {
    method: 'DELETE',
  })
    .then(() => {
      setOrders(orders.filter((order) => order.id !== orderId));
    })
    .catch((error) => console.error('Error:', error));
};

Example Output
When the component is rendered, it will display a table with columns such as:

Order ID
First Name
Last Name
Phone Number
Email Address
Shipping Address
Car Make
Car Model
Car Price
A "Delete" button for each order

Dependencies
React: The core library for building the UI.
CSS: For styling the component (custom styles can be added in ViewOrders.css).


License
This project is licensed under the MIT License - see the LICENSE file for details.






