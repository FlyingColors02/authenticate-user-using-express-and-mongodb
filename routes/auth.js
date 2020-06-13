let express = require("express");
let router =  express.Router();
let model = require("../database/mongouser");
let joi = require("@hapi/joi");

router.post("/check",async(req,res)=>{
    let user = await model.findOne({"userLogin.emailId":req.body.userLogin.emailId});
    if(!user){return res.status(404).send({message:"Invalid emailId"})}

    let password = await model.findOne({"userLogin.password":req.body.userLogin.password})
    if(!password){return res.status(404).send({message:"Invalid Password!!"})};

    res.send({message:"Login Done"})
})

module.exports = router;