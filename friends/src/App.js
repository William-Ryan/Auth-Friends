import React from 'react';
import { Link, Route, withRouter } from "react-router-dom"
import { getToken } from "./utils/axiosWithAuth"
import SignIn from "./components/SignIn"
import FriendsList from "./components/FriendsList"
import Logout from "./components/Logout"
import ProtectedRoute from "./utils/ProtectedRoute"
import './App.css';

function App() {
  const signedIn = getToken()
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        {!signedIn && <Link to="/signin">Sign in</Link>}
        {signedIn && <Link to="/friends-list">Friends</Link>}
        {signedIn && <Link to="/logout">Logout</Link>}
      </nav>
      
      <Route exact path="/signin" component={SignIn} />
      <ProtectedRoute exact path="/friends-list" component={FriendsList} />
      <ProtectedRoute exact path="/logout" component={Logout} />
    </div>
  );
}

export default withRouter(App);
