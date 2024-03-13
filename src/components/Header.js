import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = (props) => {
  return (
    <>
    <div className='container-xxl py-3 bg-dark mb-5'>
        <div className='container my-5 py-5'>
            <div className='row align-items-center g-5'>
                <div className='col-lg-6 text-center text-lg-start'>
                    <h1 className='display-4 text-white'>{props.title}</h1>
                    <p className='text-white mb-4 pb-2'>{props.para}</p>
                    <NavLink to={props.visit}
                    className='btn btn-light py-md-3 px-md-5 hero btn'>
                        {props.btntext}
                    </NavLink>
                </div>
                <div className='col-lg-6 text-center text-lg-end overflow-hidden'>
                <img src={props.imagepath} className='img-fluid ' alt="headerimage" />                    
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Header