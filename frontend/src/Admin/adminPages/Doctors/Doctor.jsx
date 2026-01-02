import React, { useEffect } from "react";
import DataTable from "react-data-table-component";
import HeadingBox from "../../../Component/AdminComponent/HeadingBox";
import { FaClinicMedical, FaRegEdit } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { FiEye } from "react-icons/fi";
import { customStyles } from "../../../Component/AdminComponent/CustomStyle";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FaUserDoctor } from "react-icons/fa6";
import { GETdoctorsByclinicIdAPI } from "../../../Features/AdminFeature/DoctorSlice";
import { GETClinicByuserIDAPI } from "../../../Features/AdminFeature/ClinicSlice";
const columns = [
    {
        name: "Profile Image",
        cell: row => (
            <img
                src={row?.doctorimg}
                alt="clinic"
                className="w-16 h-16 rounded object-cover"
            />
        ),
    },
    {
        name: "Name",
        selector: row => row?.doctorName || "—",
        sortable: true,
    },
    {
        name: "Specialization",
        selector: row => row?.DoctorSpecialization || "—",
        sortable: true,
    },
    {
        name: "Qualification",
        selector: row => row?.doctorQualification || "—",

        sortable: true,
    },
    {
        name: "Clinic Name",
        selector: row => row?.clinicId?.userId?.name || "—",

        sortable: true,
    },
    {
        name: "Actions",
        cell: row => (
            <div className="flex gap-4">
                <FiEye size={17} color="#02C98D" className="cursor-pointer" />
                <FaRegEdit size={17} color="#0575E6" className="cursor-pointer" />
                <MdOutlineDeleteOutline size={17} color="red" className="cursor-pointer" />
            </div>
        ),
    },
];

function Doctor() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { Doctors } = useSelector(state => state.Doctors);
    const { clinics } = useSelector(state => state.clinics);

    console.log(Doctors)
    useEffect(() => {
        dispatch(GETdoctorsByclinicIdAPI());
        dispatch(GETClinicByuserIDAPI());

    }, [dispatch]);

    return (
        <div>
            <div className="flex justify-between items-center">
                <HeadingBox
                    iconimg={<FaClinicMedical color="white" size={18} />}
                    heading="List Of Registered Doctors"
                />
                <button
                    className="
            bg-gradient-to-r from-[#02C98D] to-[#0575E6]
            px-4 py-1.5 rounded text-sm text-white font-semibold
            shadow-md cursor-pointer flex gap-2 items-center
          "
                    onClick={() => navigate("/Admin-adddoctor")}
                >
                    <FaUserDoctor />
                    Add Doctor
                </button>
            </div>

            <br />

            <DataTable
                columns={columns}
                data={Doctors || []}
                customStyles={customStyles}
                pagination
                highlightOnHover
                responsive
            />
        </div>
    );
}

export default Doctor;
