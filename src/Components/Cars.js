import React from "react";
import ola from "../images/ola.jpg";
import uber from "../images/uber.jpg";
import { Link } from "react-router-dom";

export default function Cars() {
  return (
      <div className="container">
        <div className="row"> 
         <div className="col-6">
          <div className="curve  d-flex justify-content-center">
            <a href="https://www.olacabs.com/auth/login">
              <img src={ola} />
            </a>
          </div>
        </div>

        <div className="col-6">
          <div className="curve  d-flex justify-content-center">
          <a href="https://auth.uber.com/login/">
              <img src={uber} />
            </a>
          </div>
        </div>
      </div>
      </div>
  );
}