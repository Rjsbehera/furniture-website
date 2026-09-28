let express = require("express")


let subSubcategoryRoute = express.Router()
let multer = require("multer")
const subSubCategoryController = require("../../controller/adimin/subSubCategoryController")


// halp acces multer
// let uploads=multer({dest:"uploads/subSubcategory"})

// full access multer
const storage = multer.diskStorage(
    {
        destination: (req, file, cb) => {
            cb(null, "uploads/subsubcategory")
        },
        filename: (req, file, cb) => {
            cb(null, Date.now() + file.originalname)
        }
    }
)

let uploads = multer({ storage: storage })

//http://localhost:8000/admin/subSubcategory/create
subSubcategoryRoute.post("/create", uploads.single('image'),subSubCategoryController.create )
//http://localhost:8000/admin/subSubcategory/view
subSubcategoryRoute.get("/view", subSubCategoryController.view)
//http://localhost:8000/admin/subSubcategory/updateDetails
// subSubcategoryRoute.get("/details/:id", subSubCategoryController.updateDetails)
//http://localhost:8000/admin/subSubcategory/delete
// subSubcategoryRoute.post("/delete", subSubCategoryController.delete)
//http://localhost:8000/admin/subSubcategory/update
// subSubcategoryRoute.put("/update/:id", subSubCategoryController.update)
//http://localhost:8000/admin/subSubcategory/change-status
// subSubcategoryRoute.post("/change-status", subSubCategoryController.changeStatus)
//http://localhost:8000/admin/subSubcategory/parent
subSubcategoryRoute.get("/parent", subSubCategoryController.parent)
//http://localhost:8000/admin/subSubcategory/sub-category
subSubcategoryRoute.get("/sub-category/:parentId", subSubCategoryController.subcategory)

module.exports = subSubcategoryRoute