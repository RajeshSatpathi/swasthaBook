import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/Cloudinary.js";

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "users", // better for profile images
    allowed_formats: ["jpg", "jpeg", "png"],
  },
});

const uploadSingle = multer({
  storage,
  limits: {
    fileSize: 2 * 1024 * 1024, // 2MB max (recommended)
  },
});

export default uploadSingle;
