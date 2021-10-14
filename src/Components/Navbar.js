import React, { useState, useEffect } from "react";
import { AmplifySignOut } from "@aws-amplify/ui-react";
import synlogo from "../images/synke.PNG";



function Navbar({ user, location }) {

  const [place, setPlace] = useState("")

  useEffect(() => {
   console.log("place--", place)
  }, []);
 
 
  return (

    
    
      <nav className="navbar navbar-light bg-secondary">
        
       

        <ul>
          <div className="d-flex justify-content-start">
            <li className="nav-item">
            <img className="logo" src={synlogo} alt="logo" />
              <span className="navbar-brand mb-0 text-white white">S-Metro</span>
              
              </li>
              <li className="nav-item"></li>
              <li className="nav-item"></li>
          </div>
        </ul>
        <ul>
          <div className="d-flex justify-content-end">
           <li>
           <div className="white">Hello, {user.username}</div>
              <div className="white1">Location:{location.city}</div>
             < AmplifySignOut/>
           </li>
          </div>
        </ul>
      </nav>
    
  );
}

export default Navbar;
