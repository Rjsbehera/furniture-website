const categoryModel = require("../../model/categoyModel")



let categoryController = {
    create: async (req, res) => {
        // console.log(req.body)
        // console.log(req.file)
        let { name, order } = req.body
        try {

            let checkcategory = await categoryModel.findOne({ name })
            if (checkcategory) {
                //error
                return res.send({
                    status: false,
                    error: {
                        'name': "category name already exist..."
                    }
                })
            }
            let insertObj = {
                name,
                order
            }
            if (req.file) {
                if (req.file.filename) {
                    insertObj['image'] = req.file.filename
                }
            }
            console.log(insertObj)
            let category = await categoryModel(insertObj)
            let insertRes = await category.save()
            res.send(
                {
                    status: true,
                    name: "Category Added",
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

        let path=process.env.CATEGORYPATH
        const data = await categoryModel.find()
        res.send(
            {
                status: true,
                path,
                msg: "category view",
                data
            }
        )
    }
    ,

    delete: async (req, res) => {
        let { ids } = req.body

        let delRes = await categoryModel.deleteMany({ _id: ids })
        res.send(
            {
                status: true,
                msg: "category delete",
                delRes
            }
        )
    },

    update: async (req, res) => {
        let { id } = req.params

        let updateRes = await categoryModel.updateOne(
            {
                _id:id
            },
            {
                $set: req.body
            }
        )
        res.send(
            {
                status: true,
                msg: "category update",
                updateRes
            }
        )
    },

    changeStatus: async (req, res) => {
        let { ids } = req.body
        let oldStatus = await categoryModel.find({ _id: ids })
        for (let obj of oldStatus) {
            await categoryModel.updateOne(
                { _id: obj._id },
                {
                    $set: {
                        status: !obj.status,
                    },
                },
            )
        }
        res.send(
            {
                status: true,
                msg: "category update",
                oldStatus
            }
        )
    },

    updateDetails:async(req,res)=>{
        let {id}=req.params
        let data=await categoryModel.findOne({_id:id})
        res.send({
            status:true,
            msg:"category view",
            data
        })
    }

}

module.exports = categoryController

