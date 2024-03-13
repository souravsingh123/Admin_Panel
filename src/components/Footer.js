import React from "react";
import { NavLink } from "react-router-dom";
//import '../App.css'
const Footer = () => {
  return (
    <>
      <div className="container-xxl py-3 bg-dark  mb-5">
        {/* <div className="container my-3 py-1">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 text-center text-lg-start"> */}


            <nav class="navbar navbar-expand-lg bg-dark  ">
          <div className="container-fluid"> 
  
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto ">
        <li className="nav-item">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="/about">About</NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="/course">Course</NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
    </div>
    </nav>



              <h2 className="display-4  text-white">E-learning</h2>
              <p className="text-white  mb-4 pb-2">
                To get more information Contact US.
              </p>
              <h3 className=" text-white text-center">JOIN OUR COURSES</h3>
            </div>
           

            {/* <div className="navbar navbar-expand-lg bg-body-teritiary ">
              
              <h5 className="navbar-nav text-lg-center">
                <ul className="navbar-nav text-lg-center ">
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>
                  <NavLink to="/about">About</NavLink>
                  </li>
                  <li>
                    <NavLink to="/course">Course</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact">Contact</NavLink>
                  </li>
                </ul>
              </h5> */}
            {/* </div>
          </div>
        </div> */}
      {/* </div> */}
     

    </>
  );
};


export default Footer;
