const home = async(req,res)=>{
try {
     res.status(202).send({msg:"this is home page"});
} catch (error) {
    console.log(error)
}

}

const register = async(req,res)=>{
try {
     res.status(202).send({msg:"this is registeration page"});
} catch (error) {
    console.log({msg:"not found"})
}
}

module.exports = {home,register};