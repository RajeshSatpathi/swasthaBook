import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const APIBase_url = "http://localhost:8000"

//registration api call 
export const ADDdoctorAPI = createAsyncThunk(
    "doctors/adddoctor",
    async (formData, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${APIBase_url}/api/doctors/adddoctor`,
                formData, {
                withCredentials: true,
            });
            return response.data; // contains token, user, etc.
        } catch (error) {
            return rejectWithValue(error.response?.data || "Something went wrong");
        }
    }
);
export const GETdoctorsAPI = createAsyncThunk(
    "doctors/get",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${APIBase_url}/api/doctors/get`,
                {
                    withCredentials: true,
                });
            return response.data; // contains token, user, etc.
        } catch (error) {
            return rejectWithValue(error.response?.data || "Something went wrong");
        }
    }
);
//doctor on the basis of clinicwise  api call 
export const GETdoctorsByclinicIdAPI = createAsyncThunk(
    "doctors/getbyclinic",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${APIBase_url}/api/doctors/getbyclinic`,
                {
                    withCredentials: true,
                });
            return response.data; // contains token, user, etc.
        } catch (error) {
            return rejectWithValue(error.response?.data || "Something went wrong");
        }
    }
);

//initialState::::::::
const initialState = {
    Doctors: null,
    loading: false,
    error: false

};
const doctorSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        //ADDdoctorAPI case ///////////////////////////
        builder
            // ADDdoctorAPI - Pending
            .addCase(ADDdoctorAPI.pending, (state) => {
                state.loading = true;
                state.error = null;
            })

            // ADDdoctorAPI - Success
            .addCase(ADDdoctorAPI.fulfilled, (state, action) => {
                state.loading = false;
                state.Doctors = null;

            })
            // ADDdoctorAPI - Failed
            .addCase(ADDdoctorAPI.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
        //GETdoctorsByclinicIdAPI case ///////////////////////////
        builder
            // GETdoctorsByclinicIdAPI - Pending
            .addCase(GETdoctorsByclinicIdAPI.pending, (state) => {
                state.loading = true;
                state.error = null;
            })

            // GETdoctorsByclinicIdAPI - Success
            .addCase(GETdoctorsByclinicIdAPI.fulfilled, (state, action) => {
                state.loading = false;
                state.Doctors = action.payload.success ? action.payload.Doctors : null;

            })
            // GETdoctorsByclinicIdAPI - Failed
            .addCase(GETdoctorsByclinicIdAPI.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
        builder
            // GETdoctorsByclinicIdAPI - Pending
            .addCase(GETdoctorsAPI.pending, (state) => {
                state.loading = true;
                state.error = null;
            })

            // GETdoctorsByclinicIdAPI - Success
            .addCase(GETdoctorsAPI.fulfilled, (state, action) => {
                state.loading = false;
                state.Doctors = action.payload.success ? action.payload.Doctors : null;

            })
            // GETdoctorsByclinicIdAPI - Failed
            .addCase(GETdoctorsAPI.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
})
// export const { logout } = specializationSlice.actions;
export default doctorSlice.reducer;