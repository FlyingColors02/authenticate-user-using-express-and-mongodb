let mongoose = require("mongoose");

let UserScheme =new mongoose.Schema(
    {
        firstName:{type:String,max:10,required:true},
        lastName:{type:String,max:10,required:true}, 
        Address:{type:String,max:10,required:true},
        userLogin:{
            emailId:{type:String,max:10,required:true,unique:true},
            password:{type:String,max:10,required:true}, 
        }
    }
)

let UserModel = mongoose.model("userdetails",UserScheme);

module.exports = UserModel;