
import { Outlet, NavLink, useLocation } from "react-router-dom";
import { headerTextManager } from '../../Helper/helper'
import './Layout.css'
import { useAuth } from "../../App";

const Layout = () => {
  let userSession = sessionStorage.getItem("userSession");
  let auth = useAuth()
  let location = useLocation()
  const user = auth?.user
  const pageName = headerTextManager(location, user)

  return (
    <div className="main">
      <div className="header">
        <NavLink to={`/${pageName?.link}`} >
          <p>{pageName?.name}</p>
        </NavLink>
      </div>

      <div className="bodyLaout"><Outlet /></div>

    </div>
  );
};

export default Layout;
