import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { API, graphqlOperation, Auth, Hub } from "aws-amplify";

import { Authenticator } from "aws-amplify-react";
import Calculator from './Components/Calculator';
import Navbar from "./Components/Navbar";
import "./App.css";


export const UserContext = React.createContext();

class App extends React.Component {
  state = {
    user: null,
    userAttributes: null
  };

  componentDidMount() {
    this.getUserData();
    Hub.listen("auth", this, "onHubCapsule");
  }

  getUserData = async () => {
    const user = await Auth.currentAuthenticatedUser();
    user
      ? this.setState({ user }, () => this.getUserAttributes(this.state.user))
      : this.setState({ user: null });
  };

  getUserAttributes = async authUserData => {
    const attributesArr = await Auth.userAttributes(authUserData);
    const attributesObj = Auth.attributesToObject(attributesArr);
    this.setState({ userAttributes: attributesObj });
  };

  onHubCapsule = capsule => {
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

 

  render() {
    const { user, userAttributes } = this.state;

    return !user ? (
      <Authenticator />
    ) : (
        < Navbar user={user}/> 
       
        
       
    );
    
  }
}

// export default withAuthenticator(App, true, [], null, theme);
export default App;
