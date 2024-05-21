const express = require("express");
const jobRoutes = require("./routes/job");
const { default: mongoose } = require("mongoose");
const app = express();



// Json parsing middleware
app.use(express.json());

// MongoDb connection
mongoose
    .connect("mongodb+srv://jignesh:dUaszhl26B0rpW0f@cluster0.s7hzif4.mongodb.net/")
    .then(()=> console.log("Connection established successfully"))
    .catch((err)=> console.log("Error while connecting to Database !",err));

// API routes
app.use(jobRoutes);


app.listen(10000,()=>{
    console.log("Server is up and running on port : 10000");
})
