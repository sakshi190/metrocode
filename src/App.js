import './App.css';
import Background from './img1.jpg';
import {
  BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Amplify from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Authenticator } from "aws-amplify-react";
import awsconfig from './aws-exports';
import Navbar from './Components/Navbar';
import Calculator from './Components/Calculator'
import Home from './Components/Home';
import Cars from './Components/Cars';
import Test from './Components/Test';

// 
import { API, graphqlOperation, Auth,Hub} from 'aws-amplify';
import React, { useState, useEffect } from 'react';
import { listMetroSt2ams } from './graphql/queries';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

Amplify.configure(awsconfig);

function App() {

  const [stations, setStation] = useState([]);
  const [user, setUser] = useState("");
  const [location, setLocation] = useState("");
    

    useEffect(() => {
        // fetchStations()
        getUserData();
        getUserGeolocation();
    Hub.listen("auth", App, onHubCapsule);


    }, [])

   const getUserData = async () => {
      // const user = await Auth.currentAuthenticatedUser();
      // user ? setUser({ user }): setUser({user: null})

      Auth.currentAuthenticatedUser()
      .then(user => {
        console.log("User: ", user)
        setUser(user)
      })
      .catch(err => setUser(null))
      };

      const getUserGeolocation = () => {
        fetch(
          "https://geolocation-db.com/json/8dd79c70-0801-11ec-a29f-e381a788c2c0"
        )
          .then((response) => response.json())
          .then((data) => setLocation(data));
      };

      const onHubCapsule = capsule => {
        switch (capsule.payload.event) {
          case "signIn":
            console.log("signed in");
            this.getUserData();
            this.registerNewUser(capsule.payload.data);
            break;
          case "signUp":
            console.log("signed up");
            break;
          case "signOut":
            console.log("signed out");
            this.setState({ user: null });
            break;
          default:
            return;
        }
      };

    // Api
    // const fetchStations = async () => {

    //   const todos= await API.graphql(graphqlOperation(listMetroSt2ams));
    //   const stationList = todos.data.listMetroSt2ams.items;
    //   console.warn("data",todos)
    //     try {
    //         const stationData = await API.graphql(graphqlOperation(listMetroSt2ams));
    //         const stationList = stationData.data.listMetroSt2ams.items;
    //         console.log('list station', stationList)
    //         setStation(stationList)
    //         console.log("db",stations);
    //     } catch (error) {
    //         console.log('Error on fetching data', error)
    //     }
    // }
  return (
    
    !user ? (
      <Authenticator />
    ) :(
    <div className="App" 
    
    // slot="sign-in" style={{
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   height: '100vh',
    //   backgroundImage: `url(${Background})`,
    //   backgroundSize: '900px 500px '
    // }}
    >
     
  <header className="App-header">
    < Navbar user={user} location={location}/> 
    <Router>
    <Switch>
    <Route exact path="/">
          <Home />
    </Route>

    <Route path="/metro">
    <Calculator  user={user} location={location}/>
    </Route>

    <Route path="/ola_uber">
    <Cars />
    </Route>

    <Route path="/test">
    <Test />
    </Route>
    </Switch>
    
    </Router>
    
    </header>
      
  </div>
    )
  );
}

export default withAuthenticator(App);
