import React from 'react'
import DataTable from 'react-data-table-component';
import HeadingBox from '../../../Component/AdminComponent/HeadingBox';
import { FaClinicMedical } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { FiEye } from "react-icons/fi";
import { customStyles } from '../../../Component/AdminComponent/CustomStyle';
const columns = [
    {
        name: 'Banner',
        selector: row => row.title,
        sortable: true,
    },
    {
        name: 'Name',
        selector: row => row.year,
        sortable: true,
    },
    {
        name: 'Email',
        selector: row => row.title,
        sortable: true,
    },

    {
        name: 'Address',
        selector: row => row.year,
        sortable: true,
    },
    {
        name: 'Actions',
        selector: row => <>
            <div className='flex gap-4'>
                <FiEye size={17} color='#02C98D'/>

                <FaRegEdit size={17}  color='#0575E6' />
                <MdOutlineDeleteOutline size={17} color='red' />
            </div>

        </>,
        sortable: true,
    },




];

const data = [
    {
        id: 1,
        title: 'Beetlejuice',
        year: '1988',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
]


function AdminAppointment() {
    return (
        <div>
            <div className='flex justify-between'>
                <HeadingBox iconimg={<FaClinicMedical color='white' size={18} />} heading="Appoitment List" />
                {/* <button className='bg-gradient-to-r from-[#02C98D] to-[#0575E6] px-1.5 
                w-30 rounded text-sm text-white body-font font-semibold cursor-pointer
                shadow-md mr-2  hover:'
                >Add Clinic</button> */}

            </div>

            <br />

            <div>
                <DataTable
                    columns={columns}
                    data={data}
                    customStyles={customStyles}
                    pagination={true}
                />
            </div>
        </div>
    )
}

export default AdminAppointment