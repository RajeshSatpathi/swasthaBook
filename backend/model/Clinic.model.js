import mongoose from 'mongoose';

const clinicSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    place: { type: String, required: true },
    city: { type: String, required: true },
    dist: { type: String, required: true },
    state: { type: String, required: true },
    pincode: { type: String, required: true },
    primarymobno: { type: String, required: true },
    alternatemobno: { type: String, required: true },


}, { timestamps: true, minimize: false });

export const Clinic = mongoose.model("Clinic", clinicSchema);