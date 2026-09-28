let express=require("express")
const categoryController = require("../../controller/adimin/categoryController")

let categoryRoute=express.Router()
let multer=require("multer")

// halp acces multer
// let uploads=multer({dest:"uploads/category"})

// full access multer
const storage=multer.diskStorage(
    {
        destination:(req,file,cb)=>{
            cb(null,"uploads/category")
        },
        filename:(req,file,cb)=>{
            cb(null,Date.now()+file.originalname)
        }
    }
)

let uploads=multer({storage:storage})

//http://localhost:8000/admin/category/create
categoryRoute.post("/create",uploads.single('image'),categoryController.create)
categoryRoute.get("/view",categoryController.view)
//http://localhost:8000/admin/category/updateDetails
categoryRoute.get("/details/:id",categoryController.updateDetails)
//http://localhost:8000/admin/category/delete
categoryRoute.post("/delete",categoryController.delete)
//http://localhost:8000/admin/category/update
categoryRoute.put("/update/:id",categoryController.update)
//http://localhost:8000/admin/category/change-status
categoryRoute.post("/change-status",categoryController.changeStatus)

module.exports=categoryRoute