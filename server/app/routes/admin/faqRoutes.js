let express=require("express")
const faqController = require("../../controller/adimin/faqController")
let faqRoute=(express.Router())


//http://localhost:8000/admin/faq/create
faqRoute.post("/create",faqController.create)
//http://localhost:8000/admin/faq/view
faqRoute.get("/view",faqController.view)
//http://localhost:8000/admin/faq/updateDetails
faqRoute.get("/details/:id",faqController.updateDetails)
//http://localhost:8000/admin/faq/delete
faqRoute.post("/delete",faqController.delete)
//http://localhost:8000/admin/faq/update
faqRoute.put("/update/:id",faqController.update)
//http://localhost:8000/admin/faq/change-status
faqRoute.post("/change-status",faqController.changeStatus)

module.exports=faqRoute