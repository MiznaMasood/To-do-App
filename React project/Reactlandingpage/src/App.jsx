import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Header/Header';
import CarouselComponent from './Carousel/Carousel';
import CardsComponents from './CardsComponents/CardsComponents';

const App = () => {
  return (
    <>
      <Header />
      <CarouselComponent />
      <CardsComponents />
    </>
  );
};

export default App;
