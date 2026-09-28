let express=require("express")
let authRoute=express.Router()

//http://localhost:8000/admin/login/login
authRoute.post("/login",(req,res)=>{
    res.send(
        {
            status:true,
            msg:"Login Done"
        }
    )
})

//http://localhost:8000/admin/login/change-password
authRoute.post("/change-password",(req,res)=>{
    res.send(
        {
            status:true,
            msg:"change-password"
        }
    )
})

//http://localhost:8000/admin/login/Forgot-password
authRoute.post("/Forgot-password",(req,res)=>{
    res.send(
        {
            status:true,
            msg:"Forgot-password"
        }
    )
})

//http://localhost:8000/admin/login/reset-password
authRoute.post("/reset-password",(req,res)=>{
    res.send(
        {
            status:true,
            msg:"reset-password"
        }
    )
})

module.exports=authRoute