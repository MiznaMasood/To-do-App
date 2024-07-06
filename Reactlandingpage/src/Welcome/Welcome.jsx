import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap'; 
import styles from './Welcome.module.css'; 

const Welcome = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-7">
        <img src= '/public/ab.fcda2469b98ffc37a148.png' />

        </div>
        <div className="col-md-5">
          <h1 className={styles.welcome}>
            Welcome to <br />
            <span className={styles.span}>Echooling Learning Platform</span>
          </h1>
          <p className={styles.para}>
            Education is both the act of teaching knowledge to others and
            the act of receiving knowledge from someone else.
          </p>
          <p>Have Question ? <a href="#">Get Free Guide</a></p>
          <hr />
          <p>
            Education also refers to the knowledge received through schooling instruction
            and to the institution of teaching as a whole. The main purpose of education
            is the integral development of a person.
          </p>
          <Button variant="outline-dark" className="px-3 py-2">
            Read More 
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;

