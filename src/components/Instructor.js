import React from 'react'
import InstructorsCard from './InstructorsCard'
import instructorData from './InstructorData'
const Instructor = () => {
  return (
    <>
    <div className='cointainer-xxl'>
        <div className='container'>
            <div className='text-center'>
                <h5 className='text-center'>Instructors</h5>
                <h1 className='mb-5'>Expert Instructors</h1>
            </div>
            <div className='row g-3 mb-4'>
                {
                    instructorData.map((i)=>{
                        return (
                            <InstructorsCard 
                            key={i.id}
                            image={i.image}
                            title={i.title}/>
                        )
                    })
                }
            </div>
        </div>
         </div>
    </>
  )
}

export default Instructor