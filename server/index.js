let express=require("express");
const mongoose = require('mongoose');
let cors=require("cors")
require("dotenv").config();
const adminRoutes = require("./app/routes/admin/adminRoutes");
const checkToken = require("./app/middleware/checkToken");
let app=express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/uploads/category",express.static("uploads/category"))
app.use("/uploads/subcategory",express.static("uploads/subcategory"))
app.use("/uploads/subsubcategory",express.static("uploads/subsubcategory"))


// app.use(checkToken)
app.use("/admin",adminRoutes)

  // const dbName=process.env.DBNAME
   mongoose.connect(`mongodb://127.0.0.1:27017/${process.env.DBNAME}`)
  .then((res) => console.log('Connected!'));
  app.listen("8000",()=>{
    console.log("Server Start")
})