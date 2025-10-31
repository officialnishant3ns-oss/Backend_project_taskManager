import mongoose, { connect } from "mongoose";
import { DB_NAME } from "../constant.js";


 const  connectdb = async()=> {
    try{
         const connectionIntence= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
         console.log(`\n MongoDB connected :: DB_HOST: ${connectionIntence.connection.host}`
    );
        }catch (error){
            console.error("mongo_db_connection error:", error);
            process.exit(1)
      }
 }
 export default connectdb