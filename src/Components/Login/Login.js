import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {useAuth} from '../../App'
import "./Login.css";

const Login = () => {
  // React States
  const [errorMessages, setErrorMessages] = useState({});

  let location = useLocation()
  let navigate = useNavigate();
  let from = location.state?.from?.pathname || "/dashboard";
  let auth = useAuth();

  // User Login info
  const database = [
    {
      username: "uncinc",
      password: "letmein",
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    var { uname, pass } = document.forms[0];
    const userData = database.find((user) => user.username === uname.value);

    if (userData) {
      if (userData.password !== pass.value) {
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        sessionStorage.setItem("userSession", true)
        auth.signin({uname, pass}, () => { navigate(from, { replace: true }) })
      }
    } else {
      setErrorMessages({ name: "uname", message: errors.uname });
    }

  };

  const renderErrorMessage = (name) => {
    if (name === errorMessages.name) {
      return <div className="error">{errorMessages.message}</div>
    }
  }

  const LoginForm = () => {
    return (
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label>Username </label>
            <input type="text" name="uname" required />
            {renderErrorMessage("uname")}
          </div>
          <div className="input-container">
            <label>Password </label>
            <input type="password" name="pass" required />
            {renderErrorMessage("pass")}
          </div>
          <div className="button-container">
            <input type="submit" />
          </div>
        </form>
      </div>
    )
  }

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
