const mongoose = require("mongoose");

// const URI =  "mongodb://127.0.0.1:27017/mern_admin";

const URI = process.env.MONGODB_URI

const connectDb = async()=>{
    try {
        await mongoose.connect(URI);
        console.log("connection is successful run")
    } catch (error) {
        console.error("data connection failed")
        process.exit(0);
    }
}
module.exports = connectDb;