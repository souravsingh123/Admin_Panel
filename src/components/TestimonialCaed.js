import React from 'react'

const TestimonialCaed = (props) => {
  return (
    <>
    <div className='col-md-4'>
    <div className="card" >
  <img src={props.image} class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
   
  </div>
</div>
</div>
    </>
  )
}

export default TestimonialCaed