import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';
import { DBconnection } from './config/DB.js';
import { authRoutes } from './routes/auth.Routes.js';
import { categoryRoutes } from './routes/categoryRoutes.js';
import { clinicRoutes } from './routes/ClinicRoutes.js';
import cors from "cors"
import { DoctorsRoutes } from './routes/DcotorsRoutes.js';
dotenv.config()
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))
app.get("/", (req, res) => {
    res.send("Server running...")
})


//routes 
app.use("/api/auth", authRoutes)
app.use("/api/category", categoryRoutes)
app.use("/api/clinic", clinicRoutes)
app.use("/api/doctors", DoctorsRoutes)




// port and connection 
const PORT = process.env.PORT || 3000

app.listen(PORT, async () => {
    console.log("Server running 8000")
    DBconnection()
})
