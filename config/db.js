const mongoose = require("mongoose")

const connectDB = async () =>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("mongoose connected successfully");

    }catch(error){
        console.log("error loading the data");
    }
}

module.exports = connectDB;