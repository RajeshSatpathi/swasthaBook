import React from 'react'

function HeadingCard({heading,subheading}) {
  return (
     <div className='flex  items-center flex-col my-5'>
            <div className='bg-blue-600 w-50 text-center text-white rounded-3xl'>
                <h2 className='text-md'> {heading}</h2>  
            </div>
             <h3 className='md:text-4xl text-xl font-semibold'>{subheading}</h3>
        </div>
  )
}

export default HeadingCard