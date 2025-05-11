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
        res.status(202).send({msg:req.body});
    } catch (error) {
        console.log(error)
    }
}
module.exports= {home,register}