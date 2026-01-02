import { Category } from "../model/Category.model.js";

export const addCategoryAPI = async (req, res) => {
    try {
        const { name,slug } = req.body;
        const category = await Category.create({
            name,
            slug
        });
        return res.status(201).json({
            success: true,
            message: "add category successfully",
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "category add  server error",
         
        });
    }
}

export const getCategoryAPI = async (req, res) => {
    try {
        const category = await Category.find();
        return res.status(200).json({
            success: true,
            message: "category Get  successfully",
            category
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
             message: "category   server error",
          
        });
    }
}

export const deleteCategoryAPI = async (req, res) => {
    try {
        const { id } = req.params;

        const category = await Category.findByIdAndDelete(id);
        return res.status(200).json({
            success: true,
            message: "category Deleted  successfully",
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
          message: "category  server error",
        });
    }
}