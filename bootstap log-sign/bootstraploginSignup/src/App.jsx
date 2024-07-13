import React, { useState } from 'react';
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const toggle = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div className="container">
      {isLoggedIn ? <Login clickFunc={toggle} /> : <Signup clickFunc={toggle} />}
    </div>
  );
};

export default App;


