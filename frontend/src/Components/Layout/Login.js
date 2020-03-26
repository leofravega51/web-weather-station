import React, { useEffect } from "react";
import '../../App.css'
import '../../Assets/Css/nav-style.css'
import "../../Assets/Js/nav-style"
import FacebookLogin from '../Auth/Facebook';
import GoogleLogin from '../Auth/Google';
import Navbar from './Navbar';
import { BrowserRouter, Router, Switch, Route, Link} from "react-router-dom";


export default function Login() {
 


  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">

      <a className="navbar-brand">Weather</a>
        {/* <img src="public/weather.ico"></img> */}


        <ul className="navbar-nav mr-auto">
          <li className="nav-item active mr-2">
            <Link to="/home" style={{ color : 'black'}}>Home</Link>
          </li>
          <li className="nav-item active mr-2">
            <Link to="/features" style={{color : "black"}}>Features</Link>
          </li>
        </ul>

        <div className="form-inline my-2 my-lg-0">
          <FacebookLogin />

          <GoogleLogin />
          
        </div>
    </nav>


  )};

