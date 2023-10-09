import React, { useState } from 'react';

function AuthComponent() {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Simulated authentication - replace with your actual authentication logic
    if (authenticateUser(email, password)) {
      alert("Login successful! Redirecting to the main page...");
      // You can redirect the user to the main page using React Router or other routing methods
    } else {
      alert("Invalid email/username or password. Please try again.");
    }
  };

  const handleRegistration = (event) => {
    event.preventDefault();
   const username = document.getElementById("username").value;
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;

    // Simulated user registration - replace with your actual registration logic
    if (registerUser(username, email, password)) {
      alert("Account registered successfully. You can now log in.");
      setIsLoginForm(true); // Automatically switch to the login form
    } else {
      alert("Registration failed. Please try again.");
    }
  };

  // Simulated user authentication function (replace with actual logic)
  function authenticateUser(email, password) {
    // Replace with your actual authentication logic, e.g., make an AJAX request to a server
    // Return true if authentication is successful, false otherwise
    return email === "user@example.com" && password === "password";
  }

  // Simulated user registration function (replace with actual logic)
  function registerUser(username, email, password) {
    // Replace with your actual registration logic, e.g., make an AJAX request to a server
    // Return true if registration is successful, false otherwise
    return true; // Simulated success
  }

  return (
    <div className="bg-blue-100 min-h-screen flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-md p-8 w-96 text-center">
        <h1 className="text-2xl font-semibold text-blue-600">GRABZZZ</h1>
        <span className="text-4xl font-bold text-blue-600"></span>
        <h1 className="text-2xl font-semibold text-blue-600">{isLoginForm ? 'Login' : 'Sign Up'}</h1>
        {isLoginForm ? (
          <form className="text-left" onSubmit={handleSubmit}>
             <input type="text" id="email" placeholder="Email" required />
          <input type="password" id="password" placeholder="Password" required />

            <button className="bg-blue-600 text-white rounded-md py-2 px-4 text-lg font-semibold mt-4 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600" type="submit">Login</button>
          </form>
        ) : (
          <form className="text-left" onSubmit={handleRegistration}>
  <input type="text" id="username" placeholder="Username" required />
          <input type="text" id="signup-email" placeholder="Email" required />
          <input type="password" id="signup-password" placeholder="Password" required />
            <button className="bg-blue-600 text-white rounded-md py-2 px-4 text-lg font-semibold mt-4 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600" type="submit">Sign Up</button>
          </form>
        )}
        <p>
          {isLoginForm ? 'Don’t have an account? ' : 'Already have an account? '}
          <span className="text-blue-600 cursor-pointer" onClick={toggleForm}>Sign {isLoginForm ? 'up' : 'in'}</span>
        </p>
      </div>
    </div>
  );
}

export default AuthComponent;
