import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Header/Header';
import CarouselComponent from './Carousel/Carousel';
import CardsComponents from './CardsComponents/CardsComponents';
import Welcome from './Welcome/Welcome'
import Campus from './Campus/Campus'
import Courses from './PopularCourses/Courses'
import Learners from './Learners/Learners';
import Events from './UpcomingEvents/Events';
import Review from './assets/Review/Review';
import NewsAndBlogs from './NewsBlogs/NewsAndBlogs';

const App = () => {
  return (
    <>
      <Header />
      <CarouselComponent />
      <CardsComponents />
      <Welcome />
      <Campus />
      <Courses />
      <Learners />
      <Events />
      <Review />
      <NewsAndBlogs />
    </>
  );
};

export default App;
