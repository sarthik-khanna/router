const express =require("express");
const router = express.Router();

router.get("/",(req,res)=>{
    res.status(202).send("welcome to khanna portfolio from router ");
});
router.route("/register").get((req,res)=>{
    res.status(202).send("this is registration form");
})

module.exports = router;
