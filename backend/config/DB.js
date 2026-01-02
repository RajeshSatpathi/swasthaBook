import mongoose from "mongoose";

export const DBconnection = async()=>{
     try {
          await mongoose.connect(process.env.MONGODB_URI)
          console.log("SwasthoBOOK_DB Connected...")
  
      } catch (error) {
          console.log("DB Connection Failed...")

      }
}