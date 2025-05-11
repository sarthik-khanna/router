const User = require("../models/models");

const home =  async(req,res)=>{
try {
    res.status(202).send({msg:"this is home page"});
} catch (error) {
    console.log(error);
}
}

const register = async(req,res)=>{
    try {
        console.log(req.body)

        const {username, phone,email,password} = req.body;
        const userExit = await User.findOne({email});

        if(userExit){
            return res.status(400).json({msg:"email already exist"})
        }
        const userCreated = await User.create({username,email,phone,password})
        res.status(202).json({msg: userCreated});
    } catch (error) {
        console.log(error)
    }
}
module.exports= {home,register}