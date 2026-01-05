import express from 'express'

import uploadSingle from '../middleware/upload.js';
import { checkAuthentication } from '../middleware/auth.middleware.js';
import { addDoctorAPI, GETdoctorAPI, GETdoctorAPIByClinicID, GETdoctorAPIByClinicIDUsingParams, GETdoctorAPIByID } from '../controller/Doctors.controller.js';

export const DoctorsRoutes = express.Router();

DoctorsRoutes.post("/adddoctor", checkAuthentication, uploadSingle.single("doctorimg"), addDoctorAPI);
DoctorsRoutes.get("/get", GETdoctorAPI);
DoctorsRoutes.get("/getbyclinic", checkAuthentication,GETdoctorAPIByClinicID);
DoctorsRoutes.get("/:id",GETdoctorAPIByClinicIDUsingParams);
DoctorsRoutes.get("/doctorbyid/:id",GETdoctorAPIByID);


