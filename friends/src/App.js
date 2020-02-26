import React from 'react';
import { Link, Route } from "react-router-dom"

import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="">Sign in</Link>
        <Link to="">Friends</Link>
        <Link to="">Logout</Link>
      </nav>
    </div>
  );
}

export default App;
