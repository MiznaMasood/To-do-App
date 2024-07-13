
import React from 'react';
import styles from './Login.module.css';

const Login = ({ clickFunc }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    
    clickFunc(); 
  };

  return (
    <div className={styles['form-container']}>
      <div className={styles['form-box']}>
        <h1>Login Page</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter email"
          />
          <br /><br />
          <input
            type="password"
            placeholder="Password"
          />
          <br /><br />
          <button className={styles['button']} type="submit">Submit</button>
          <p>
            Don't have an account?{' '}
            <span className={styles['link']} onClick={clickFunc}>
              Signup here
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

