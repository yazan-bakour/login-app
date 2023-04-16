import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../App";
import "./Home.css";

export const Home = () => {
  const navigate = useNavigate();

  let auth = useAuth();
  const user = auth.user

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="homepage">
      <p>This is Home page</p>
      {
        user === null &&
        <button onClick={handleLogin} className="loginBtn">
          <span>Login</span>
        </button>
      }
    </div>
  );
};
