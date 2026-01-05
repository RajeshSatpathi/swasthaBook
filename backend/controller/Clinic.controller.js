import { Clinic } from "../model/Clinic.model.js";
import { User } from "../model/User.model.js";
import bcrypt from "bcrypt";
import { generateToken } from "../config/token.js"
export const AddClinicAPI = async (req, res) => {
    try {

        const { name, email, password,
            role, city, place, dist, state, pincode, primarymobno, alternatemobno
        } = req.body;

        // 4️⃣ Get profile image from Cloudinary
        const profileimg = req.file ? req.file.path : "";
        // 🔹 Required fields array
        const requiredFields = {
            name,
            email,
            password,
            role,
            city,
            place,
            dist,
            state,
            pincode,
            primarymobno,
            alternatemobno
        };

        // 🔹 Validation
        for (const [field, value] of Object.entries(requiredFields)) {
            if (!value) {
                return res.status(400).json({
                    success: false,
                    message: `${field} is required`
                });
            }
        }
        // 2️⃣ Check existing user
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: "User already exists"
            });
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        // 3️⃣ Create user
        const newUser = await User.create({
            name,
            email,
            password: hashedPassword,
            role,
            profileimg: profileimg || "" // optional
        });
        //generating token and send cookie
        const token = generateToken(newUser._id);
        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        });
        const newClinic = await Clinic.create({
            userId: newUser._id,
            city,
            place,
            dist,
            state,
            pincode,
            primarymobno,
            alternatemobno
        });
        return res.status(201).json({
            success: true,
            message: "Clinic  Registration successfull",
            newClinic
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Clinic Registration server error",
            user: newUser
        });

    }
}

export const getClinicAPI = async (req, res) => {
    try {
        const ClinicData = await Clinic.find().populate("userId");
        return res.status(200).json({
            success: true,
            message: "Clinic Get  successfully",
            ClinicData
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Clinic server error",

        });
    }
}
export const getClinicByUserIDAPI = async (req, res) => {
    try {
        const userId = req.user.id
        const ClinicData = await Clinic.findOne({ userId }).populate("userId");
        return res.status(200).json({
            success: true,
            message: "Clinic Get  successfully",
            ClinicData
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Clinic server error",

        });
    }
}


//update clinic api by super admin 

export const adminUpdateClinicByIdAPI = async (req, res) => {
    try {
        const { clinicId } = req.params;
        const {
            name,
            email,
            city,
            place,
            dist,
            state,
            pincode,
            primarymobno,
            alternatemobno
        } = req.body;
        // Optional profile image
        const profileimg = req.file ? req.file.path : undefined;
        // 🔹 Find clinic
        const clinic = await Clinic.findById(clinicId);
        if (!clinic) {
            return res.status(404).json({
                success: false,
                message: "Clinic not found"
            });
        }
        // 🔹 Update clinic fields
        if (city) clinic.city = city;
        if (place) clinic.place = place;
        if (dist) clinic.dist = dist;
        if (state) clinic.state = state;
        if (pincode) clinic.pincode = pincode;
        if (primarymobno) clinic.primarymobno = primarymobno;
        if (alternatemobno) clinic.alternatemobno = alternatemobno;

        await clinic.save();

        // 🔹 Update linked user
        const user = await User.findById(clinic.userId);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "Linked user not found"
            });
        }
        if (name) user.name = name;
        if (email) user.email = email;
        if (profileimg) user.profileimg = profileimg;
        await user.save();

        return res.status(200).json({
            success: true,
            message: "Clinic updated successfully by admin",
            clinic
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Admin clinic update server error"
        });
    }

}