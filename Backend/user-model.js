const { Timestamp } = require("bson")
const { timeStamp } = require("console")
const mongoose=require("mongoose")
const userschema= new mongoose.Schema(
    {
        username:
        {
            type:String,
            require:true
        },
        email:
        {
            type:String,
            require:true
        },
        password:
        {
            type:String,
            require:true
        },
        userType:
        {
            type:String,
            require:true
        },
    },{timeStamp:true}
)
const userModel=mongoose.model("users",userschema);
module.exports=userModel;

