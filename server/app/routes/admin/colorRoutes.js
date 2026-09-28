let express=require("express")
const colorController = require("../../controller/adimin/colorController")

let colorRoute=express.Router()


//http://localhost:8000/admin/color/create
colorRoute.post("/create",colorController.create)
//http://localhost:8000/admin/color/view
colorRoute.get("/view",colorController.view)
//http://localhost:8000/admin/color/updateDetails
colorRoute.get("/details/:id",colorController.updateDetails)
//http://localhost:8000/admin/color/delete
colorRoute.post("/delete",colorController.delete)
//http://localhost:8000/admin/color/update
colorRoute.put("/update/:id",colorController.update)
//http://localhost:8000/admin/color/change-status
colorRoute.post("/change-status",colorController.changeStatus)

module.exports=colorRoute