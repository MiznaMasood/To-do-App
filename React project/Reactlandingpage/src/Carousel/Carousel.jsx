import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Carousel.module.css';

const CarouselComponent = () => {
  return (
    <Carousel className={styles.carouselContainer}>
      <Carousel.Item>
        <div className={styles.carouselItemContent}>
          <img
            className="d-block w-100"
            src="public/1.ddb463a076b58bbe0ea3.jpg"
            alt="First slide"
          />
          <Carousel.Caption className={styles.carouselCaption}>
            <p className={styles.tagline}>Great Quality Social Life</p>
            <h1>Discover the world of possible university.</h1>
            <button className="btn btn-primary">Admissions</button>
            <button className="btn btn-outline-light ms-3">Watch Video Intro</button>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className={styles.carouselItemContent}>
          <img
            className="d-block w-100"
            src="public/2.924b429a0601a89b04e1.jpg"
            alt="Second slide"
          />
          <Carousel.Caption className={styles.carouselCaption}>
            <p className={styles.tagline}>Great Quality Social Life</p>
            <h1>Discover the world of possible university.</h1>
            <button className="btn btn-primary">Admissions</button>
            <button className="btn btn-outline-light ms-3">Watch Video Intro</button>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;

