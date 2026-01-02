import { User } from "../model/User.model.js";
import bcrypt from 'bcrypt'
import { generateToken } from "../config/token.js"

// registration api  code 
export const userRegistrationAPI = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        // 4️⃣ Get profile image from Cloudinary
        const profileimg = req.file ? req.file.path : "";
        // 1️⃣ Validation
        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "All required fields must be provided"
            });
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
        return res.status(201).json({
            success: true,
            message: "User Registration successfull",
            user: newUser
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "User Registration server error",
            user: newUser
        });

    }
}


// login api code

export const userLoginAPI = async (req, res) => {
    try {

        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "user not found in the DB" })
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch == false) {
            return res.status(400).json({ message: "incorrect password" })

        }
        //generating token and send cookie
        const token = generateToken(user._id);
        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        });
        //response to front end 
        return res.status(201).json({
            success: true,
            message: "Login Succesfull",
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                profileimg: user.profileimg,
                role: user.role,

            },
        });
    } catch (error) {
        console.error("login error:", error);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
}




//logout api code 
export const logoutAPI = async (req, res) => {
    try {
        res.cookie("token", "", {
            httpOnly: true,
            secure: true,
            sameSite: "none",
            expires: new Date(0),  // Immediately expire the cookie
        });

        return res.status(200).json({
            success: true,
            message: "Logout successful",
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Logout failed",
            error: error.message,
        });
    }
};
//get user Details code 