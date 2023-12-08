import mongoose, { Schema } from "mongoose";


const user=new Schema({
    email:String,
    password:String,
    name:String
})
export default mongoose.model("H&M-user",user)