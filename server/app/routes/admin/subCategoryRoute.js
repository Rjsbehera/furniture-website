let express = require("express")


let subcategoryRoute = express.Router()
let multer = require("multer")
const subCategoryController = require("../../controller/adimin/subcategoryController")

// halp acces multer
// let uploads=multer({dest:"uploads/subcategory"})

// full access multer
const storage = multer.diskStorage(
    {
        destination: (req, file, cb) => {
            cb(null, "uploads/subcategory")
        },
        filename: (req, file, cb) => {
            cb(null, Date.now() + file.originalname)
        }
    }
)

let uploads = multer({ storage: storage })

//http://localhost:8000/admin/subcategory/create
subcategoryRoute.post("/create", uploads.single('image'),subCategoryController.create )
//http://localhost:8000/admin/subcategory/view
subcategoryRoute.get("/view", subCategoryController.view)
//http://localhost:8000/admin/subcategory/updateDetails
// subcategoryRoute.get("/details/:id", subCategoryController.updateDetails)
//http://localhost:8000/admin/subcategory/delete
// subcategoryRoute.post("/delete", subCategoryController.delete)
//http://localhost:8000/admin/subcategory/update
// subcategoryRoute.put("/update/:id", subCategoryController.update)
//http://localhost:8000/admin/subcategory/change-status
// subcategoryRoute.post("/change-status", subCategoryController.changeStatus)
//http://localhost:8000/admin/subcategory/parent
subcategoryRoute.get("/parent", subCategoryController.parent)

module.exports = subcategoryRoute