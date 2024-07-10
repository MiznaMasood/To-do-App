import React, { useState } from 'react';
import styles from './Signup.module.css';

const Signup = ({ onLoginClick, onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your signup logic here
    onLogin(email); // Call onLogin with the email as the username
  };

  return (
    <div className={styles.signup}>
      <h1>Signup Page</h1>
      <form onSubmit={handleSubmit}>
      
        <input
          className={styles.input}
          size={30}
          type="email"
          name="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br /><br />
        <input
          className={styles.input}
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
          className={styles.input}
          maxLength={10}
          size={30}
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <br /><br />
        <button className={styles.button} type="submit">Submit</button>
        <p>
          Already have an account?{' '}
          <span onClick={onLoginClick} className={styles.link}>
            Login here
          </span>
        </p>
      </form>
    </div>
  );
};

export default Signup;
