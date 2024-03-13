import React from 'react'
import CategoryCard from './CategoryCard'
import categoryData from './CategoryData'
//import './Category.css'
const Category = () => {
  return (
    <>
    <div className=' container-xxl'>
        <div className='container'>
            <div className='text-center'>
                <h5 className='text-center'>Categories</h5>
                <h1 className='mb-5'>Courses Categories</h1>
            </div>
            <div className='row g-3 mb-4'>
                {
                    categoryData.map((c)=>{
                        return(
                            <CategoryCard
                            key={c.id}
                            image={c.image}
                            title={c.title}/>
                        )
                    })
                }
            </div>
        </div>
    </div>
    </>
  )
}

export default Category