import express from 'express'
import { addCategoryAPI, deleteCategoryAPI, getCategoryAPI } from '../controller/Category.controller.js';
import { checkAuthentication } from '../middleware/auth.middleware.js';

export const categoryRoutes = express.Router();

categoryRoutes.post("/addcategory", checkAuthentication,addCategoryAPI);
categoryRoutes.get("/get",getCategoryAPI)
categoryRoutes.delete("/delete/:id", checkAuthentication,deleteCategoryAPI)
