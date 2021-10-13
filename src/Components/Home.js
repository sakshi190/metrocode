import React from "react";
import bounce from "../images/bounce.jpg";
import map from "../images/metromap.PNG";
import olaUber from "../images/OlaUber.jpg";
import metro from "../images/smetro_logo.PNG";
import parking from "../images/parking.PNG";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg">
      <div className="container">
      <div className="row bg">
        <div className="col-12">
          <div className="curve  d-flex justify-content-center ">
            <Link className="decorate" to="/metro">
              <img src={metro} />
            </Link>
          </div>
        </div>

        <div className="col-6">
          <div className="curve  d-flex justify-content-center">
            <a href="https://english.bmrc.co.in/TravelInfos">
              <img src={map} />
            </a>
          </div>
        </div>

        <div className="col-6">
          <div className="curve  d-flex justify-content-center">
            <a href="https://bounceshare.com/web/login">
              <img src={bounce} />
            </a>
          </div>
        </div>

        <div className="col-6">
          <div className="curve  d-flex justify-content-center">
            <Link to="/ola_uber">
              <img src={olaUber} />
            </Link>
          </div>
        </div>

        <div className="col-6">
          <div className="curve  d-flex justify-content-center">
            <a href="">
              <img src={parking} />
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
