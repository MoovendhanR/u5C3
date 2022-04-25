import {Link} from "react-router-dom";
// import './style.css'
//import styled from 'styled-components';


export const Navbar = () => {
    return (
      <div style={{textAlign: 'center',margin:"10px"}} className="navbar">
        <Link className="nav-home" to="/">
          Home
        </Link>
        <Link  style={{margin: '10px'}} className="nav-list" to="/employees">
          Employee List
        </Link>
        <Link style={{margin: '10px'}} className="nav-admin" to="/admin">
          Admin
        </Link>
        {/* Show Either logout or login based on auth context. DO NOT show both */}
        <Link style={{margin: '10px'}} className="nav-logout" to="/logout">
          Logout
        </Link>
  
        <Link style={{margin: '10px'}} className="nav-login" to="/login">
          Login
        </Link>
      </div>
    );
  };