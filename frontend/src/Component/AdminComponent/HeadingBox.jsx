import React from 'react'

function HeadingBox({ iconimg, heading }) {
    return (
        <div className='flex items-center gap-2'>
            <br /><br />
            <div className='size-10 bg-gradient-to-r 
            from-[#8468FB] to-[#64C6EA] shadow-xl rounded flex items-center justify-center'>
               <div>{iconimg}</div> 
            </div>
            <span className='body-font text-gray-600 text-md font-semibold text-shadow-2xs uppercase'
            >{heading}</span>
        </div>
    )
}

export default HeadingBox