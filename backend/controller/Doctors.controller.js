
import { Doctors } from "../model/Doctor.model.js";
import { Clinic } from "../model/Clinic.model.js";


export const addDoctorAPI = async (req, res) => {
    try {
        const { doctorName, DoctorSpecialization,
            gender, doctorQualification, doctorDesc, isActive,
            clinicId } = req.body;

        const doctorimg = req.file ? req.file.path : "";

        const availability = req.body.availability
            ? JSON.parse(req.body.availability)
            : [];
        const newDoctor = await Doctors.create({
            doctorName,
            DoctorSpecialization,
            gender,
            doctorQualification,
            doctorDesc,
            doctorimg: doctorimg || "",
            clinicId,
            availability,
            isActive
        });
        return res.status(201).json({
            success: true,
            message: "Doctor Created Successfully"

        })


    } catch (error) {
        console.error("login error:", error);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
}

//get doctor api code 
export const GETdoctorAPI = async (req, res) => {
    try {
        const AllDoctors = await Doctors.find().populate({
            path: "clinicId",
            populate: {
                path: "userId",
                select: "name" // select only what you need
            }
        });;
        if (!AllDoctors) {
            return res.status(201).json({
                success: true,
                message: "No doctor records found"

            })
        }
        return res.status(201).json({
            success: true,
            message: "Doctor  Successfully fetched",
            Doctors: AllDoctors

        })


    } catch (error) {
        console.error("login error:", error);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
}
// get doctors by clinic ID for separate Clnics
export const GETdoctorAPIByClinicID = async (req, res) => {
    try {
        const userId = req.user.id;
        const clinics = await Clinic.findOne({ userId })
        if (!clinics) {
            return res.status(200).json({
                success: true,
                message: "No clinic records found",
                Doctors: []
            });
        }

        const allDoctors = await Doctors.find({ clinicId: clinics._id }).populate({
            path: "clinicId",
            populate: {
                path: "userId",
                select: "name" // select only what you need
            }
        });

        if (allDoctors.length === 0) {
            return res.status(200).json({
                success: true,
                message: "No doctor records found",
                Doctors: []
            });
        }

        return res.status(200).json({
            success: true,
            message: "Doctors successfully fetched",
            Doctors: allDoctors
        });

    } catch (error) {
        console.error("Get doctor error:", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};

// get doctor by frontend send clinic ID using [params]
export const GETdoctorAPIByClinicIDUsingParams = async (req, res) => {
    try {
        const {id} = req.params;
        const allDoctors = await Doctors.find({ clinicId: id }).populate({
            path: "clinicId",
            populate: {
                path: "userId",
                select: "name" // select only what you need
            }
        });

        if (allDoctors.length === 0) {
            return res.status(200).json({
                success: true,
                message: "No doctor records found",
                Doctors: []
            });
        }

        return res.status(200).json({
            success: true,
            message: "Doctors successfully fetched",
            Doctors: allDoctors
        });

    } catch (error) {
        console.error("Get doctor error:", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};
