import React, { useEffect } from "react";
import DataTable from "react-data-table-component";
import HeadingBox from "../../../Component/AdminComponent/HeadingBox";
import { FaClinicMedical, FaRegEdit } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { FiEye } from "react-icons/fi";
import { customStyles } from "../../../Component/AdminComponent/CustomStyle";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { GETClinicAPI } from "../../../Features/AdminFeature/ClinicSlice";

const columns = [
  {
    name: "Banner",
    cell: row => (
      <img
        src={row?.userId?.profileimg}
        alt="clinic"
        className="w-16 h-16 rounded object-cover"
      />
    ),
  },
  {
    name: "Name",
    selector: row => row?.userId?.name || "—",
    sortable: true,
  },
  {
    name: "Email",
    selector: row => row?.userId?.email || "—",
    sortable: true,
  },
  {
    name: "Address",
    selector: row =>
      `${row?.place || ""}, ${row?.city || ""}, ${row?.dist || ""}, ${row?.state || ""}`,
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

function AdminClinic() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { clinics } = useSelector(state => state.clinics);

  useEffect(() => {
    dispatch(GETClinicAPI());
  }, [dispatch]);

  return (
    <div>
      <div className="flex justify-between items-center">
        <HeadingBox
          iconimg={<FaClinicMedical color="white" size={18} />}
          heading="List Of Registered Clinics"
        />
        <button
          className="
            bg-gradient-to-r from-[#02C98D] to-[#0575E6]
            px-4 py-1.5 rounded text-sm text-white font-semibold
            shadow-md cursor-pointer
          "
          onClick={() => navigate("/Admin-addClinic")}
        >
          Add Clinic
        </button>
      </div>

      <br />

      <DataTable
        columns={columns}
        data={clinics || []}
        customStyles={customStyles}
        pagination
        highlightOnHover
        responsive
      />
    </div>
  );
}

export default AdminClinic;
