const Database = require("../../../app/config/database.js")
const materialModel = require("../../model/materialModel.js")
const { update } = require("./colorController")

let materialController = {
    create: async (req, res) => {
        // console.log(req.body);
        //using mongodb
        // const db=await Database();
        // db.collection("materials").insertOne(req.body)
        let {name}=req.body

        try {
            let checkMaterial=await materialModel.findOne({name})
            if(checkMaterial){
                return res.send({
                    status:false,
                    error:{
                        name:"Material Name already Exist..."
                    }
                })
            }
            // using mongoose
            let materialRes = await materialModel(req.body).save();
            // await materialModel.insertOne(req.body)

            res.send(
                {
                    status: true,
                    msg: "material added",
                    materialRes
                }
            )
        } catch (err) {
            let error={}
            for(let key in err.errors){
                error[key]=err.errors[key].message
            }
            res.send({
                status:false,
                error
            })
         }

    },

    view: async (req, res) => {

        let viewRes = await materialModel.find()
        res.send(
            {
                status: true,
                msg: "material view",
                viewRes
            }
        )
    },

    delete: async (req, res) => {
        let { ids } = req.body
        let delRes = await materialModel.deleteMany({ _id: ids })
        res.send(
            {
                status: true,
                msg: "material delete",
                delRes
            }
        )
    },

    update: async (req, res) => {
        let { id } = req.params

        let updateRes = await materialModel.updateOne(
            {
                _id: id
            },
            {
                $set: req.body
            }
        )
        res.send(
            {
                status: true,
                msg: "material update",
                updateRes
            }
        )
    },
    changeStatus: async (req, res) => {
        let { ids } = req.body
        let oldStatus = await materialModel.find({ _id: ids })
        for (let obj of oldStatus) {
            await materialModel.updateOne(
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
            let data=await materialModel.findOne({_id:id})
            res.send({
                status:true,
                msg:"materia view",
                data
            })
        }
    

}
module.exports = materialController