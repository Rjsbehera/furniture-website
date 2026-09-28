let express=require("express")
const countryController = require("../../controller/adimin/countryController")

let countryRoute=express.Router()


//http://localhost:8000/admin/country/create
countryRoute.post("/create",countryController.create)
//http://localhost:8000/admin/country/view
countryRoute.get("/view",countryController.view)
//http://localhost:8000/admin/country/updateDetails
countryRoute.get("/details/:id",countryController.updateDetails)
//http://localhost:8000/admin/country/delete
countryRoute.post("/delete",countryController.delete)
//http://localhost:8000/admin/country/update
countryRoute.put("/update/:id",countryController.update)
//http://localhost:8000/admin/country/change-status
countryRoute.post("/change-status",countryController.changeStatus)

module.exports=countryRoute