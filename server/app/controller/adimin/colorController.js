const colorModel = require("../../model/colorModel")


let colorController = {
    create: async (req, res) => {
        let { name } = req.body
        try {

            let checkColor = await colorModel.findOne({ name })
            if (checkColor) {
                //error
                return res.send({
                    status: false,
                    error: {
                        'name': "color name already exist..."
                    }
                })
            }

            // console.log(req.body)
            let insertRes = await colorModel(req.body).save()

            res.send(
                {
                    status: true,
                    message: "color added",
                    insertRes
                }
            )
        } catch (err) {
            let error = {}
            for (let key in err.errors) {
                error[key] = err.errors[key].message
            }
            res.send({
                status: false,
                error
            })
        }

    },

    view: async (req, res) => {

        const viewRes = await colorModel.find()
        res.send(
            {
                status: true,
                msg: "color view",
                viewRes
            }
        )
    }
    ,

    delete: async (req, res) => {
        let { ids } = req.body

        let delRes = await colorModel.deleteMany({ _id: ids })
        res.send(
            {
                status: true,
                msg: "color delete",
                delRes
            }
        )
    },

    update: async (req, res) => {
        let { id } = req.params
        
        let updateRes = await colorModel.updateOne(
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
                msg: "color update",
                updateRes
            }
        )
    },

    changeStatus: async (req, res) => {
        let { ids } = req.body
        let oldStatus = await colorModel.find({ _id: ids })
        for (let obj of oldStatus) {
            await colorModel.updateOne(
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
                msg: "color update",
                oldStatus
            }
        )
    },

    updateDetails:async(req,res)=>{
        let {id}=req.params
        let data=await colorModel.findOne({_id:id})
        res.send({
            status:true,
            msg:"Color view",
            data
        })
    }

}

module.exports = colorController

// {
//     "status": true,
//     "msg": "color view",
//     "viewRes": [
//         {
//             "_id": "6a9d9e052160a7e3c3727753",
//             "name": "red",
//             "code": "ffffff",
//             "order": 1,
//             "status": true,
//             "date": "2026-09-06T17:08:21.468Z",
//             "__v": 0
//         },
//         {
//             "_id": "6a9e2eaae1a0b3fdda7c4fb5",
//             "name": "red",
//             "code": "ffffff",
//             "order": 2,
//             "status": true,
//             "date": "2026-09-07T03:25:30.227Z",
//             "__v": 0
//         },
//         {
//             "_id": "6aa04f6f8d30054e18042b10",
//             "name": "red",
//             "code": "#gfdgdf",
//             "order": 2,
//             "status": true,
//             "date": "2026-09-08T18:09:51.082Z",
//             "__v": 0
//         },
//         {
//             "_id": "6aa0e2141d8543454a478ed6",
//             "name": "red",
//             "code": "#fedhef",
//             "order": 3,
//             "status": true,
//             "date": "2026-09-09T04:35:32.537Z",
//             "__v": 0
//         },
//         {
//             "_id": "6aa0e44f66e3ec5555744935",
//             "name": "blue",
//             "code": "#fedhef",
//             "order": 3,
//             "status": true,
//             "date": "2026-09-09T04:45:03.215Z",
//             "__v": 0
//         }
//     ]
// }