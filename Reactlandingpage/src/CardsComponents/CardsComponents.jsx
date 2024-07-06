import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './CardsComponents.module.css';


const CardsComponent = () => {
  const cards = [
    { src: '/public/1.045ce5893b04f4bde993.png', title: 'Let’s Talk Science' },
    { src: '/public/2.ec9d013b7d4f44fa4112.png', title: 'Innovative Courses' },
    { src: '/public/3.0cf44447da5e6fb16e49.png', title: 'Cloud Storage' },
    { src: '/public/4.3d31b426e478a4d304b8.png', title: 'Online Education' }
  ];

  return (
    <div className={`container ${styles.cardsContainer}`}>
      <h2 className={styles.sectionTitle}>Academics</h2>
      <img src="/public/underline.png" alt="" />
      <div className="row justify-content-center">
        {cards.map((card, index) => (
          <div className="col-md-3 col-sm-6" key={index}>
            <div className={`card ${styles.card}`}>
              <img src={card.src} className={`card-img-top ${styles.cardImage}`} alt={card.title} />
              <div className={`card-body ${styles.cardBody}`}>
                <h5 className={`card-title ${styles.cardTitle}`}>{card.title}</h5>
                <a href="#" className={`btn btn-primary ${styles.cardButton}`}>Learn More</a>

                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsComponent;