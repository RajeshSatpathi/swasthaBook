import React, { useEffect, useState } from 'react'
import HeadingBox from "../../../Component/AdminComponent/HeadingBox"
import { MdCategory } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux"
import { GETCategoryAPI } from '../../../Features/AdminFeature/SpecializationSlice';
function AdminCategory() {
  const [inputCategory, setInputCategory] = useState("");
  const { specialization } = useSelector((state) => state.specialization);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputCategory)
    setInputCategory("")
  }

  useEffect(() => {
    dispatch(GETCategoryAPI()).then((data) => {
      // console.log(data)
    })
  }, [dispatch])
  return (
    <div>
      <HeadingBox iconimg={<MdCategory size={25} color='white' />} heading="Category" />
      <form action="" className='flex items-center  justify-center' onSubmit={handleSubmit}>
        <div className=''>
          <label htmlFor="" className='body-font text-shadow-2xs'>Category Name <span className='text-red-600'>*</span></label><br />
          <input type="text" placeholder='category name'
            className='border border-gray-300 p-2 w-100 rounded '
            value={inputCategory}
            onChange={(e) => setInputCategory(e.target.value)}
          />
        </div>
        <div>
          <button className='bg-purple-500 
          text-sm mt-5 mx-2 cursor-pointer hover:bg-purple-700
          p-2.5 rounded text-white'>Add Category</button>
        </div>
      </form>
      <br /><br />
      {/* show category section  */}
      <div className='flex flex-wrap gap-5'>
        {
          specialization?.map((item) => (
            <div className='bg-white shadow-md flex justify-between gap-5 items-center p-5 w-80  rounded  h-15 '>
              <AiOutlineCheckCircle size={25} color='green' />
              <span className='body-font text-shadow-2xs'>{item?.name} </span>
              <div className='flex gap-2'>
                <Link><FaRegEdit color='purple' /></Link>
                <Link><MdOutlineDeleteOutline color='red' /></Link>
              </div>
            </div>

          ))
        }
      </div>


    </div>
  )
}

export default AdminCategory