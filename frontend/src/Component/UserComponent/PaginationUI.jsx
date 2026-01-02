import React from 'react'
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
function PaginationUI({prevPage ,currentPage,nextPage}) {
    return (
        <div className='w-full my-4 flex justify-center items-center'>
            <div className='flex gap-3'>
                <button
                    className='pagination-btn' onClick={prevPage}> <MdKeyboardDoubleArrowLeft/> prev</button>
                <button
                    className='pagination-btn rounded-full
                        bg-blue-500 text-white'>{currentPage}</button>

                <button
                    className='pagination-btn' onClick={nextPage}>next <MdKeyboardDoubleArrowRight/> </button>
            </div>
        </div>
    )
}

export default PaginationUI