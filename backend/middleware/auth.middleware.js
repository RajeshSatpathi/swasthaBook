import jwt from "jsonwebtoken"
import { User } from "../model/User.model.js";
import mongoose from "mongoose";

export const checkAuthentication = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({
                success: false,
                error: "cant provide token , Unauthorize user"
            });
        }
        const decoded = await jwt.verify(token, process.env.JWT_SECRET_KEY);

        if (!decoded || !decoded.id) {
            // console.log(decoded)
            return res.status(401).json({
                success: false,
                error: "Invalid token payload"
            });
        }

        // ✅ Check if _id is a valid ObjectId
        if (!mongoose.Types.ObjectId.isValid(decoded.id)) {
            return res.status(400).json({
                success: false,
                error: "Invalid user ID in token"
            });
        }
        const user = await User.findById(decoded.id).select("-password");
        if (!user) {
            return res.status(400).json({
                success: false,
                error: "User Not Found"
            });
        }
        req.user = user;
        next()

    } catch (error) {
        console.error("verifyUser middleware error:", error);

        if (error.name === "TokenExpiredError") {
            return res.status(401).json({ success: false, error: "Token expired" });
        }

        if (error.name === "JsonWebTokenError") {
            return res.status(401).json({ success: false, error: "Invalid token" });
        }

        return res.status(500).json({ success: false, error: "Server error" });
    }
}