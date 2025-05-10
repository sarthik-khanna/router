const express = require("express");
const app = express();
const router = require("./Router/Router");
const PORT = 5000;
app.use("/api/auth" ,router);

app.listen(PORT,()=>{
    console.log(`server is started running at port ${PORT}`);
})