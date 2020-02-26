import React from 'react';
import { Link, Route } from "react-router-dom"
import SignIn from "./components/SignIn"
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/signin">Sign in</Link>
        <Link to="/friends-list">Friends</Link>
        <Link to="">Logout</Link>
      </nav>
      
      <Route exact path="/signin" component={SignIn} />
    </div>
  );
}

export default App;
