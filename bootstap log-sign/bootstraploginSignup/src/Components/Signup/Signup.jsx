// Signup.js
import React, { useState } from 'react';
import styles from './Signup.module.css';

const Signup = ({ clickFunc }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    clickFunc(); 
  };

  return (
    <div className={styles['form-container']}>
      <div className={styles['form-box']}>
        <h1>Signup Page</h1>
        <form onSubmit={handleSubmit}>
          <input
            size={30}
            type="email"
            name="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br /><br />
          <input
            maxLength={10}
            size={30}
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br /><br />
          <input
            maxLength={10}
            size={30}
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <br /><br />
          <button className={styles['button']} type="submit">Submit</button>
          <p>
            Already have an account?{' '}
            <span className={styles['link']} onClick={clickFunc}>
              Login here
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;


