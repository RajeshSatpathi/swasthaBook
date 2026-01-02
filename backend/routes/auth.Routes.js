import express from 'express'
import { logoutAPI, userLoginAPI, userRegistrationAPI } from '../controller/User.controller.js';
import uploadSingle from '../middleware/upload.js';
import { checkAuthentication } from '../middleware/auth.middleware.js';

export const authRoutes = express.Router();

authRoutes.post("/registration", uploadSingle.single("profileimg"), userRegistrationAPI)
authRoutes.post("/login", userLoginAPI)
authRoutes.post("/logout", logoutAPI)
authRoutes.get("/checkUserAuthentication", checkAuthentication, (req, res) => {
    res.json({ success: true, message: "Authorize User", user: req.user })
})

