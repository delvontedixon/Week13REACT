import React, { useState } from "react";
import "./LoginForm.js";
import "./Navigate.js";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your authentication logic here
    console.log("Username:", username);
    console.log("Password:", password);

    // Reset the form after submission (optional)
    setUsername("");
    setPassword("");
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={handleUsernameChange}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;

/*Coding Steps:
Using create-react-app, create a new React project. Create a LoginForm component that contains the following:
Username and password input fields, an h3 that says Log In, with a border. Style the component using the default generated CSS file.
Create a Navigation component that contains links styled like a navbar.
The links don't have to go anywhere.
Put the Navigation component at the top of the page and the LoginForm in the center of the page.*/
