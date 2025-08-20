import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName : {
        type : String,
        required : [true, "First Name is required"]
    },
    lastName : {
        type : String,
        required : [true, "Lat Name is required"]
    },
    email : {
        type : String,
        required : [true, "email is required"],
        unique : true
    },
    password : {
        type : String,
        required : [true, "Password is required"]
    }
},{timestamps:true})

export const User = mongoose.model("User",userSchema)