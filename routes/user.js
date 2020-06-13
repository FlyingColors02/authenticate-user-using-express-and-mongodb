let express = require("express");
let router = express.Router();
let model = require("../database/mongouser");
let joi = require("@hapi/joi");


router.post("/newuser",async(req,res)=>{

    let user =await model.find({"UserLogin.emailId": req.body.userLogin.emailId});
    if(user){ res.status(403).send({"message":"EmailId already Exists!!"})}
    let {error}= Validation(req.body);
   if(error){return res.send(error.details[0].message)};
   let newData = new model({
       firstName:req.body.firstName,
       lastName:req.body.lastName,
       Address:req.body.Address,
       userLogin:req.body.userLogin
   })
   let item= await newData.save();
   res.send({message:"welcome",i:item})
});
function Validation(data){
    let schema = joi.object({
        firstName:joi.string().min(4).max(10).required(),
        lastName:joi.string().min(4).max(10).required(),
        Address:joi.string().min(4).max(20).required(),
        userLogin:{
            emailId:joi.string().email().required(),
            password:joi.string().required()
        }
    })
    return schema.validate(data);
}



module.exports=router;
