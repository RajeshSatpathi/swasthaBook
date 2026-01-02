import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const APIBase_url = "http://localhost:8000"

//registration api call 
export const ADDCategoryAPI = createAsyncThunk(
    "category/addCategory",
    async (credentials, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${APIBase_url}/api/category/addcategory`,
                credentials, {
                withCredentials: true,
            });
            return response.data; // contains token, user, etc.
        } catch (error) {
            return rejectWithValue(error.response?.data || "Something went wrong");
        }
    }
);
//login api call 
export const GETCategoryAPI = createAsyncThunk(
    "category/getcategory",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${APIBase_url}/api/category/get`,
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
    specialization: null,
    loading: false,
    error:false

};
const specializationSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
   
    },
    extraReducers: (builder) => {
        //ADDCategoryAPI case ///////////////////////////
        builder
            // ADDCategoryAPI - Pending
            .addCase(ADDCategoryAPI.pending, (state) => {
                state.loading = true;
                state.error = null;
            })

            // ADDCategoryAPI - Success
            .addCase(ADDCategoryAPI.fulfilled, (state, action) => {
                state.loading = false;
                state.specialization = null;
                
            })
            // ADDCategoryAPI - Failed
            .addCase(ADDCategoryAPI.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
        //GETCategoryAPI case ///////////////////////////
        builder
            // GETCategoryAPI - Pending
            .addCase(GETCategoryAPI.pending, (state) => {
                state.loading = true;
                state.error = null;
            })

            // GETCategoryAPI - Success
            .addCase(GETCategoryAPI.fulfilled, (state, action) => {
                state.loading = false;
                state.specialization = action.payload.success ? action.payload.category : null;
             
            })
            // GETCategoryAPI - Failed
            .addCase(GETCategoryAPI.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
 
    }
})
// export const { logout } = specializationSlice.actions;
export default specializationSlice.reducer;