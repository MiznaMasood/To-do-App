import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './CardsComponents.module.css';

const CardsComponent = () => {
  return (
    <div className={`container ${styles.cardsContainer}`}>
      <h2 className={styles.sectionTitle}>Academics</h2>
      <div className="row">
        <div className="col-md-3">
          <div className={`card ${styles.card}`}>
            <img src="/public/1.045ce5893b04f4bde993.png" className="card-img-top" alt="Let’s Talk Science" />
            <div className="card-body">
              <h5 className="card-title">Let’s Talk Science</h5>
              <a href="#" className="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className={`card ${styles.card}`}>
            <img src="/public/2.ec9d013b7d4f44fa4112.png" className="card-img-top" alt="Innovative Courses" />
            <div className="card-body">
              <h5 className="card-title">Innovative Courses</h5>
              <a href="#" className="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className={`card ${styles.card}`}>
            <img src="/public/3.0cf44447da5e6fb16e49.png" className="card-img-top" alt="Cloud Storage" />
            <div className="card-body">
              <h5 className="card-title">Cloud Storage</h5>
              <a href="#" className="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className={`card ${styles.card}`}>
            <img src="/public/4.3d31b426e478a4d304b8.png" className="card-img-top" alt="Online Education" />
            <div className="card-body">
              <h5 className="card-title">Online Education</h5>
              <a href="#" className="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsComponent;
