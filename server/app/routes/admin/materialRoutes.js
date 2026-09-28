let express=require("express")
const materialController = require("../../controller/adimin/materialController")
let materialRoute=express.Router()

//http://localhost:8000/admin/material/create
materialRoute.post("/create",materialController.create)
//http://localhost:8000/admin/material/view
materialRoute.get("/view",materialController.view)
//http://localhost:8000/admin/material/updateDetails
materialRoute.get("/details/:id",materialController.updateDetails)
//http://localhost:8000/admin/material/delete
materialRoute.post("/delete",materialController.delete)
//http://localhost:8000/admin/material/update
materialRoute.put("/update/:id",materialController.update)
//http://localhost:8000/admin/material/change-status
materialRoute.post("/change-status",materialController.changeStatus)

module.exports=materialRoute