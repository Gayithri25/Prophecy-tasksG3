
import React, { useState } from 'react';

function App() {
  // Declare a state variable called 'message' with an initial value
  const [message, setMessage] = useState('Welcome to Prophecy Technologies');

  // Function to change the message when the button is clicked
  const changeMessage = () => {
    setMessage('You are viewing the sample react application!');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>{message}</h1>
      <button onClick={changeMessage}>Click Me!</button>
    </div>
  );
}

export default App;