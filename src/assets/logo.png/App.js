import React from 'react';
import Logo from './Logo'; // Correct import statement (make sure the path is correct)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />  {/* Use the Logo component */}
        <h1>Welcome to R&G Limited!</h1>
      </header>
    </div>
  );
}

export default App;
