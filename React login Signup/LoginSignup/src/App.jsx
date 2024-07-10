import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Signup from './Signup/Signup'
import Login from './Login/Login'
import './App.css'



//  const App = () => {
//   let [isSignup, setIsSignup] = useState(true); // State to track whether to show Signup or Login form

//   const SignupClick = () => {
//     setIsSignup(true);
//   };

//   const LoginClick = () => {
//     setIsSignup(false);
//   };

//   return (
//     <div className="app">
//       {isSignup ?
      
//       <Signup onLoginClick={LoginClick} /> 

//       :

//        <Login onSignupClick={SignupClick} />}
//     </div>
//   );
// };

// export default App;


const App = () => {
  const [isSignup, setIsSignup] = useState(true); // State to track whether to show Signup or Login form
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
  const [username, setUsername] = useState(''); // State to store the username

  const handleSignupClick = () => {
    setIsSignup(true);
  };

  const handleLoginClick = () => {
    setIsSignup(false);
  };

  const handleLogin = (username) => {
    setUsername(username);
    setIsLoggedIn(true);
  };

  return (
    <div >
      {isLoggedIn ? (
        <>
          <h1>Welcome {username}</h1>
          <h1>Dashboard</h1>
        </>
      ) : isSignup ? (
        <Signup onLoginClick={handleLoginClick} onLogin={handleLogin} />
      ) : (
        <Login onSignupClick={handleSignupClick} onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
