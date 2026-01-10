import mongoose from "mongoose";
import { Schema } from "mongoose";
const AppointmentSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    doctorId: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor" },
    clinicId: { type: mongoose.Schema.Types.ObjectId, ref: "Clinic" },
    patientName: { type: String, required: true },
    phoneNo: { type: String, required: true },
    address: { type: String, required: true },
    gender: { type: String, required: true },
    bookingDate: { type: String, required: true },
    patientAge: { type: String, required: true },


}, { timestamps: true, minimize: false });

export const Appointment = mongoose.model("Appointment", AppointmentSchema); 