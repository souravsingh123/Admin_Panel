import React from 'react'
import {NavLink} from 'react-router-dom'
const CategoryCard = (props) => {
  return (
   <>
   
   <div className='col-md-4 '>
   <div className="card " >
  <img src={props.image}  class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 class="card-title">{props.title}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <NavLink to="#" class="btn btn-primary">Read More</NavLink>
  </div>
</div>
</div>
   </>
  )
}

export default CategoryCard