import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import './Dashboard.css'
import { useAuth } from "../../App";

export const Dashboard = () => {
  const navigate = useNavigate();
  let userSession = sessionStorage.getItem('userSession')
  let auth = useAuth()

  const handleLogout = () => {
    sessionStorage.removeItem("userSession");
    auth.signout(() => navigate("/home"));
  };

  return (
    <div className="dashboard">
      <p>This is Dashboard page</p>
      <p>Dashboard is empty</p>
      <button onClick={handleLogout} className="logoutBtn">
        <span>Logout</span>
      </button>
    </div>
  );
};
