import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const APIBase_url = "http://localhost:8000"

//registration api call 
export const ADDClinicAPI = createAsyncThunk(
    "clinic/addclinic",
    async (formData, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${APIBase_url}/api/clinic/addclinic`,
                formData, {
                withCredentials: true,
            });
            return response.data; // contains token, user, etc.
        } catch (error) {
            return rejectWithValue(error.response?.data || "Something went wrong");
        }
    }
);
//login api call 
export const GETClinicAPI = createAsyncThunk(
    "clinic/getclinic",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${APIBase_url}/api/clinic/get`,
                {
                    withCredentials: true,
                });
            return response.data; // contains token, user, etc.
        } catch (error) {
            return rejectWithValue(error.response?.data || "Something went wrong");
        }
    }
);
export const GETClinicByuserIDAPI = createAsyncThunk(
    "clinic/getByuserID",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${APIBase_url}/api/clinic/getByuserID`,
                {
                    withCredentials: true,
                });
            return response.data; // contains token, user, etc.
        } catch (error) {
            return rejectWithValue(error.response?.data || "Something went wrong");
        }
    }
);
export const UpdateClinicAPI = createAsyncThunk(
    "clinic/update-clinic",
    async ({ id, formData }, { rejectWithValue }) => {
        try {
            const response = await axios.put(`${APIBase_url}/api/clinic/admin/update-clinic/${id}`,
                formData,
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
    clinics: null,
    loading: false,
    error: false

};
const clinicSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        //ADDClinicAPI case ///////////////////////////
        builder
            // ADDClinicAPI - Pending
            .addCase(ADDClinicAPI.pending, (state) => {
                state.loading = true;
                state.error = null;
            })

            // ADDClinicAPI - Success
            .addCase(ADDClinicAPI.fulfilled, (state, action) => {
                state.loading = false;
                state.clinics = null;

            })
            // ADDClinicAPI - Failed
            .addCase(ADDClinicAPI.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
        //GETClinicAPI case ///////////////////////////
        builder
            // GETClinicAPI - Pending
            .addCase(GETClinicAPI.pending, (state) => {
                state.loading = true;
                state.error = null;
            })

            // GETClinicAPI - Success
            .addCase(GETClinicAPI.fulfilled, (state, action) => {
                state.loading = false;
                state.clinics = action.payload.success ? action.payload.ClinicData : null;

            })
            // GETClinicAPI - Failed
            .addCase(GETClinicAPI.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
        builder
            // GETClinicAPI - Pending
            .addCase(GETClinicByuserIDAPI.pending, (state) => {
                state.loading = true;
                state.error = null;
            })

            // GETClinicAPI - Success
            .addCase(GETClinicByuserIDAPI.fulfilled, (state, action) => {
                state.loading = false;
                state.clinics = action.payload.success ? action.payload.ClinicData : null;

            })
            // GETClinicAPI - Failed
            .addCase(GETClinicByuserIDAPI.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
        builder
            // UpdateClinicAPI - Pending
            .addCase(UpdateClinicAPI.pending, (state) => {
                state.loading = true;
                state.error = null;
            })

            // UpdateClinicAPI - Success
            .addCase(UpdateClinicAPI.fulfilled, (state, action) => {
                state.loading = false;
                state.clinics = action.payload.success ? action.payload.clinic : null;

            })
            // UpdateClinicAPI - Failed
            .addCase(UpdateClinicAPI.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
})
// export const { logout } = specializationSlice.actions;
export default clinicSlice.reducer;