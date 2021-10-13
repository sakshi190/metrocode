import React, { useState, useEffect } from "react";

import axios from "axios";
import { API, graphqlOperation } from "aws-amplify";
import { request } from "amplify";

//import { listMetroSt2ams } from "../graphql/queries";
import Amplify, { Storage, Auth } from "aws-amplify";
import awsmobile from "../aws-exports";
import { propStyle } from "aws-amplify-react";

function Calculator({ user }) {
  const [stations, setStation] = useState([]);
  const [totalAmount, settotalAmount] = useState([]);

  const [srcId, setsrcId] = useState();
  const [destId, setdestId] = useState();

  const [srcStation, setsrcStation] = useState([]);
  const [destStation, setdestStation] = useState([]);
  const [recUser, setrecUser] = useState([]);
  const [selectedCity, setSelectedCity] = useState([]);

  var Cities = [
    { id: "", name: "--Select City--" },
    { id: "1", name: "Banglore" },
    { id: "2", name: "Mumbai" },
    { id: "3", name: "Hyderabad" },
  ];

  var Banglore = [
    { id: "", name: "--Select Area--" },
    { id: "1", name: "Vijaynagar" },
    { id: "2", name: "Attiguppe" },
    { id: "3", name: "Jalahalli" },
    { id: "4", name: "Jayanagar" },
  ];
  var Mumbai = [
    { id: "", name: "--Select Area--" },
    { id: "1", name: "Mum1" },
    { id: "2", name: "Mum2" },
    { id: "3", name: "Mum3" },
    { id: "4", name: "Mum4" },
  ];
  var Hyderabad = [
    { id: "", name: "--Select Area--" },
    { id: "1", name: "Hyd1" },
    { id: "2", name: "Hyd2" },
    { id: "3", name: "Hyd3" },
    { id: "4", name: "Hyd4" },
  ];
  useEffect(() => {
    //fetchStations();
  }, []);

  //Api
  // const fetchStations = async () => {
  //   try {
  //     const stationData = await API.graphql(graphqlOperation(listMetroSt2ams));
  //     const stationList = stationData.data.listMetroSt2ams.items;
  //     console.log("list station", stationList);
  //     setStation(stationList);
  //     console.log("db", stations);
  //   } catch (error) {
  //     console.log("Error on fetching data", error);
  //   }
  // };

  // var source = [
  //   { id: "", name: "--Select Area--" },
  //   { id: "1", name: "Vijaynagar" },
  //   { id: "2", name: "Attiguppe" },
  //   { id: "3", name: "Jalahalli" },
  //   { id: "4", name: "Jayanagar" },
  // ];
  var destination = [
    { id: "", name: "--Select Area--" },
    { id: "1", name: "Vijaynagar" },
    { id: "2", name: "Attiguppe" },
    { id: "3", name: "Jalahalli" },
    { id: "4", name: "Jayanagar" },
  ];

  var price = [
    [0, 0, 0, 0, 0],
    [0, 0, 10, 15, 20],
    [0, 25, 0, 15, 10],
    [0, 20, 25, 0, 10],
    [0, 15, 20, 25, 0],
  ];

  var sCity;
  var x;
  function selCity(e) {
    sCity = e.target.value;
    if (sCity === "Banglore") {
      x = Banglore;
    } else if (sCity === "Mumbai") {
      x = Mumbai;
    } else {
      x = Hyderabad;
    }

    console.log("city-", x);
    setSelectedCity(x);
  }

  var SrcselStation;
  var total;

  var sourceValue;
  var sourceName;
  function fromStation(e) {
    // console.log("eve",e.target.value);
    // SrcselStation = e.target.value;
    // console.warn("fromstation", SrcselStation)
    // sourceValue = SrcselStation;
    // console.log("fromId", sourceValue);
    const sorcId = e.target.value;
    console.log("id", sorcId);
    sourceValue = sorcId;

    setsrcId(sourceValue);
    const srcName = selectedCity.find((s) => s.id === sorcId);
    sourceName = srcName.name;
    setsrcStation(sourceName);
    console.log("src", sourceName);
  }

  var destselStation;
  var destinationValue;
  var destinationName;

  function toStation(e) {
    // console.log("eve",e.target.value);
    const dstId = e.target.value;
    console.log("id", dstId);
    destinationValue = dstId;

    setdestId(destinationValue);
    const dstName = selectedCity.find((s) => s.id === dstId);
    destinationName = dstName.name;
    setdestStation(destinationName);
    console.log("dest", destinationName);

    calculation();
  }

  function calculation() {
    total = price[srcId][destinationValue];
    console.log("arraTotol", total);
    settotalAmount(total);
  }

  function buildForm({ action, params }) {
    const form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("action", action);

    Object.keys(params).forEach((key) => {
      const input = document.createElement("input");
      input.setAttribute("type", "hidden");
      input.setAttribute("name", key);
      input.setAttribute("value", stringifyValue(params[key]));
      form.appendChild(input);
    });

    return form;
  }

  function post(details) {
    const form = buildForm(details);
    document.body.appendChild(form);
    form.submit();
    form.remove();
  }

  function isDate(val) {
    // Cross realm comptatible
    return Object.prototype.toString.call(val) === "[object Date]";
  }

  function isObj(val) {
    return typeof val === "object";
  }

  function stringifyValue(val) {
    if (isObj(val) && !isDate(val)) {
      return JSON.stringify(val);
    } else {
      return val;
    }
  }

  const getData = (data) => {
    return fetch("http://localhost:4000/paynow", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .catch((err) => console.log(err));
  };

  const makePayment = async () => {
    getData({
      amount: totalAmount,
      sourceStation: srcStation,
      destinationStation: destStation,
      name: "kiran",
      email: "hari63@gmail.com",
      phone: "985432387",
    }).then((response) => {
      var information = {
        action: "https://securegw-stage.paytm.in/order/process",
        params: response,
      };
      post(information);
    });

    const userDetais = {
      userName: user.username,
      from: srcStation,
      to: destStation,
      price: totalAmount,
      datetime: new Date().toLocaleString(),
    };

    const file = {
      bucket: awsmobile.aws_user_files_s3_bucket,
      region: awsmobile.aws_project_region,
    };

    try {
      // Upload the file to s3 with public access level.
      // const visibility = "public";
      // const { identityId } = await Auth.currentCredentials();
      // const filename = `/${visibility}/${identityId}/${Date.now()}`;

      // await Storage.put('./user1.json',file , {
      //             level: 'public',
      // }).then (result => console.log("resultt--",result))

      // Retrieve the uploaded file to display
      // const recUser = await Storage.get(filename, { level: 'public' })
      // setrecUser(recUser);
      // console.log("recUser",recUser)

      const pushS3 = () => {
        Storage.put(`userDetails/${JSON.stringify(userDetais)}`, {
          contentType: JSON.stringify(userDetais),
        })
          .then((result) => {
            console.log(result);
          })
          .catch((err) => {
            console.log(err);
          });
      };

      pushS3();
    } catch (err) {
      console.log(err);
    }
    console.log("userDetailss", userDetais);
  };

  // {JSON.stringify(item)}
  var sourceData = selectedCity.map((item, i) => {
    return (
      <option key={i} value={item.id}>
        {item.name}
      </option>
    );
  });
  console.log("source", sourceData);

  var distData = selectedCity.map((item, i) => {
    return (
      <option key={i} value={item.id}>
        {item.name}
      </option>
    );
  });

  var City = Cities.map((item, i) => {
    return (
      <option key={i} value={item.name}>
        {item.name}
      </option>
    );
  });

  return (
    <div className="d-flex justify-content-center mt-5 ">
      <div className="box">
        <div className="sel">
          <label>Select City</label>
          <div className="form-group">
            <select className="form-control" onChange={selCity}>
              {City}
            </select>
          </div>
        </div>
        <hr />
        <div className="form-group">
          <label>From Station</label>
          <select className="form-control" onChange={fromStation}>
            {sourceData}
          </select>
        </div>

        <div className="form-group">
          <label>To Station</label>
          <select className="form-control" onChange={toStation}>
            {distData}
          </select>
        </div>

        <div>
          <p>
            Total Amount: <span>{totalAmount}</span>
          </p>
        </div>

        <div className="d-flex justify-content-end">
          <button className="btn btn-success" onClick={makePayment}>
            PAY USING PAYTM
          </button>
        </div>
      </div>
    </div>
  );
}
export default Calculator;
