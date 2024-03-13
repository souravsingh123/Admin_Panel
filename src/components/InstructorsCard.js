import React from 'react'

const InstructorsCard = (props) => {
  return (
   <>
     <div className='col-md-4'>
    <div className="card" >
  <img src={props.image} class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">Designation</p>
   
  </div>
</div>
</div>
   </>
  )
}

export default InstructorsCard