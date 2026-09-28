const categoryModel = require("../../model/categoyModel")
const subcategoryModel = require("../../model/subCategoryModel")



let subCategoryController = {
    create: async (req, res) => {
        let insertObj = { ...req.body }

        try {

            let checkSubCategory = await subcategoryModel.findOne({ name: insertObj.name })
            if (checkSubCategory) {
                //error
                return res.send({
                    status: false,
                    error: {
                        'name': "subcategory name already exist..."
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
            let subcategory = await subcategoryModel(insertObj)
            let insertRes = await subcategory.save()
            res.send(
                {
                    status: true,
                    message: "Sub Category Added",
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

    view: async (req, res) => {
        let path=process.env.SUBCATEGORYPATH
        let data = await subcategoryModel.find().populate('parent','name')

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
    }
}
module.exports = subCategoryController