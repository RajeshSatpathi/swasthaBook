import mongoose, { model } from "mongoose";

const ClinicServiceSchema = new mongoose.Schema({
    servicName: {
        type: String,
        required: true
    },
    servicDesc: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        required: true
    }

})
export const ClinicServices = mongoose.model("ClincServices", ClinicServiceSchema)