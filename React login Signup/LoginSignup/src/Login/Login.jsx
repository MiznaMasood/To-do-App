import React, { useState } from 'react';
import style from './Login.module.css';

const Login = ({ onSignupClick, onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
   
    onLogin(email); 
  };

  return (
    <div className={style.login}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          className={style.input}
        
          size={30}
          type="email"
          name="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br /><br />
        <input
          className={style.input}
          // maxLength={10}
          size={30}
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br /><br />
        <button className={style.button} type="submit">Submit</button>
        <p>
          Don't have an account?{' '}
          <span onClick={onSignupClick} className={style.link}>
            Register here
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
