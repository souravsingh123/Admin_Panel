import React from 'react'
import TestimonialCaed from './TestimonialCaed'
import testimonialData from './TestimonialData'
const Testimonial = () => {
  return (
    <>
    <div className='container-xxl'>
        <div className=' container'>
            <div className='text-center'>
                <h5 className='text-center'>TESTIMONIAL</h5>
                <h1 className='mb-5'>OUR STUDENTS SAY!</h1>
            </div>
            <div className='row g-3 mb-4'>
                {
                    testimonialData.map((t)=>{
                        return(
                            <TestimonialCaed 
                            key={t.id}
                            image={t.image}
                            title={t.title}/>
                        )
                    })
                }
            </div>
        </div>
    </div>
    
        </>
  )
}

export default Testimonial