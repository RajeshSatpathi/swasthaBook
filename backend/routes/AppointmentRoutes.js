import express from 'express'
import { checkAuthentication } from '../middleware/auth.middleware.js';
import { CreateAppointment } from '../controller/Appointment.controller.js';
export const appointmentRoutes = express.Router();

appointmentRoutes.post("/createAppointment", checkAuthentication, CreateAppointment)