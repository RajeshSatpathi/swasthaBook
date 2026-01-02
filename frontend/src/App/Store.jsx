import {configureStore} from "@reduxjs/toolkit"
import authSlice from "../Features/UserFeature/AuthFeature/AuthSlice.jsx"
import specializationSlice from "../Features/AdminFeature/SpecializationSlice.jsx"
import clinicSlice from "../Features/AdminFeature/ClinicSlice.jsx"
import doctorSlice from "../Features/AdminFeature/DoctorSlice.jsx"
export const store = configureStore({
    reducer:{
     auth:authSlice,
     specialization:specializationSlice,
     clinics:clinicSlice,
     Doctors:doctorSlice
    }

})