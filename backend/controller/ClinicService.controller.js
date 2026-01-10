import { ClinicServices } from "../model/ClinicService.model.js";


export const addClinicServiceAPI = async (req, res) => {
    try {
        const { serviceName, serviceDesc, isActive } = req.body;
        if (!serviceName || !serviceDesc || !isActive) {
            return res.status(400).json({
                success: false,
                message: "all fields are required"
            });
        }
        const serviceData = await ClinicServices.create({
            serviceName,
            serviceDesc,
            isActive
        });
        return res.status(201).json({
            success: true,
            messgae: "service add successfull from clinic",
            serviceData
        });
    } catch (error) {
        console.log("internal server error in clinic ", error)
        return res.status(500).json({
            success: true, message: " clinic service create internal Server error",
        });
    }
}
