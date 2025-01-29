import { useState, } from 'react';

function Login() { 
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  // Function to handle form submission
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);

 // send data to server
    fetch('http://localhost:8001/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error
    ));






    
    //clear form
    setFormData({
        username: '',
        password: ''
      });
  }

  // Function to handle form data change
  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  return (

    <div className="login-container">
    
    <form onSubmit={handleSubmit} className="login-form">
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        name="username"
        value={formData.username}
        placeholder="collinslikhomba"
        onChange={handleChange}
        required
        className="login-input"
      /> <br />
      
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        name="password"
        value={formData.password}
        placeholder="Enter Password"
        onChange={handleChange}
        required
        className="login-input"
      /> <br />
      
      <button type="submit" className="login-button">Login</button>
    </form>
    <p> </p>
    </div>
  );
}

export default Login;
