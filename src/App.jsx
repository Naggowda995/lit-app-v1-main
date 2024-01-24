import React, { useState } from 'react';
import registerClient from './Hr_lap/Client lap/Regestration/Client_Registration'; // Replace with the actual path

const RegistrationComponent = () => {
  const [clientData, setClientData] = useState({
    // Your client registration form fields here
  });

  const handleRegister = async () => {
    try {
      await registerClient(clientData);
      // Additional logic after successful registration if needed
    } catch (error) {
      // Handle the error, show an error message, etc.
      console.error('Client registration failed:', error.message);
    }
  };

  return (
    <div>
      {/* Your registration form here */}
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default RegistrationComponent;
