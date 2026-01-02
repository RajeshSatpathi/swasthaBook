
import mongoose from "mongoose";

const DoctorSchema = new mongoose.Schema({
    clinicId: { type: mongoose.Schema.Types.ObjectId, ref: "Clinic" },
    doctorName: {
        type: String,
        required: true
    }
    ,
    DoctorSpecialization: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ["Male", "Female"]
    },
    doctorQualification: {
        type: String,
        required: true
    },
    doctorDesc: {
        type: String,

    },
    doctorimg: {
        type: String
    },
    isActive: {
        type: String,
        required: true
    },
    availability: [
        {
            day: {
                type: String,
                enum: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                    "All days"
                ],
                required: true
            },
            timeSlots: [
                {
                    time: {
                        type: String // "09:00", "11:00"
                    }
                }
            ]
        }

    ]
}, { timestamps: true })

export const Doctors = mongoose.model("Doctors", DoctorSchema);


