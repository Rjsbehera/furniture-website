const categoryModel = require("../../model/categoyModel")
const subcategoryModel = require("../../model/subCategoryModel")
const subSubCategoryModel = require("../../model/subSubCategoryModel")


let subSubCategoryController = {
    create: async (req, res) => {
        let insertObj = { ...req.body }

        try {

            let checkSubSubCategory = await subSubCategoryModel.findOne({ name: insertObj.name })
            if (checkSubSubCategory) {
                //error
                return res.send({
                    status: false,
                    error: {
                        'name': "sub sub category name already exist..."
                    }
                })
            } else {
                if (req.file) {
                    if (req.file.filename) {
                        insertObj['image'] = req.file.filename
                    }
                }
            }
            // console.log(insertObj)
            let subsubcategory = await subSubCategoryModel(insertObj)
            let insertRes = await subsubcategory.save()
            res.send(
                {
                    status: true,
                    message: "Sub Sub Category Added",
                    insertRes
                }
            )

        } catch (err) {
            let error = {}
            for (let key in err.errors) {
                error[key] = err.errors[key].message
                // console.log(err)
            }
            res.send({
                status: false,
                error
            })
        }
    },
    view:async(req,res)=>{
        let path=process.env.SUBSUBCATEGORYPATH
        let data=await subSubCategoryModel.find().populate("parent","name").populate("subcategory","name")
         res.send({
            status: true,
            path,
            data
        })
    },
    parent: async (req, res) => {
        let data = await categoryModel.find({ status: true }).select('name')

        res.send({
            status: true,
            data
        })
    },
    subcategory: async (req, res) => {
        let { parentId } = req.params
        let data = await subcategoryModel.find({ status: true, parent: parentId }).select('name')

        res.send({
            status: true,
            data
        })
    }
}
module.exports = subSubCategoryController