import React from 'react';
// import Carousel from '../Carousel/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Header.module.css';

const Header = () => {
  
  return (
    <>
  
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top" style={{  zIndex: 1010 }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="/download.png" alt="Brand Logo" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Home
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a className="dropdown-item" href="#">Home One</a></li>
                  <li><a className="dropdown-item" href="#">Home Two</a></li>
                  <li><a className="dropdown-item" href="#">Home Three</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Pages
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a className="dropdown-item" href="#">About</a></li>
                  <li><a className="dropdown-item" href="#">Instructor</a></li>
                  <li><a className="dropdown-item" href="#">Profile</a></li>
                  <li><a className="dropdown-item" href="#">Login</a></li>
                  <li><a className="dropdown-item" href="#">Signup</a></li>
                  <li><a className="dropdown-item" href="#">Events</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Courses
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a className="dropdown-item" href="#">Course</a></li>
                  <li><a className="dropdown-item" href="#">Right Sidebar</a></li>
                  <li><a className="dropdown-item" href="#">Courses List</a></li>
                  <li><a className="dropdown-item" href="#">Course Single</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Blog
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a className="dropdown-item" href="#">Blog</a></li>
                  <li><a className="dropdown-item" href="#">Blog Single</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search Course" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
   
     


    </>
  );
};

export default Header;
