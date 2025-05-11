require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./Router/Router");
const connectDb = require("./utils/db");

app.use(express.json());
app.use( "/api/auth", router);

const PORT = 5000;


connectDb().then(()=>{
app.listen(PORT,()=>{
    console.log(`server is started running at port ${PORT}`)
})
});