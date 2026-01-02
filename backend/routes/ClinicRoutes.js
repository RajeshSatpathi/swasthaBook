import express from 'express'
import { AddClinicAPI, getClinicAPI, getClinicByUserIDAPI } from '../controller/Clinic.controller.js';
import uploadSingle from '../middleware/upload.js';
import { checkAuthentication } from '../middleware/auth.middleware.js';

export const clinicRoutes = express.Router();

clinicRoutes.post("/addclinic", checkAuthentication, uploadSingle.single("profileimg"), AddClinicAPI);
clinicRoutes.get("/get", getClinicAPI);
clinicRoutes.get("/getByuserID",checkAuthentication, getClinicByUserIDAPI);

