import { Appointment } from "../model/Appointment.model.js";

// create appointment API code 
export const CreateAppointment = async (req, res) => {
    try {
        const userId = req.user.id;
        const { doctorId, clinicId, patientName, phoneNo,
            address, gender, bookingDate, patientAge } = req.body;
    
        if (!doctorId || !clinicId || !patientName || !patientAge || !gender
            || !address || !phoneNo || !bookingDate) {
            return res.status(400).json({
                success: false, message: "all fields are required"
            });
        }
        const appointment = await Appointment.create({
            userId,
            doctorId,
            clinicId,
            patientName,
            phoneNo, 
            address,
            gender,
            bookingDate,
            patientAge
        });
        if (!appointment) return res.status(201).json({
            success: true, message: "appointment create Successfully"
        });

        return res.status(201).json({
            success: true, message: "appointment create Successfully",
            appointment
        });

    } catch (error) {
        console.log("internal server error in appointment ", error)
        return res.status(500).json({
            success: true, message: "appointment create internal Server error",

        });
    }
}