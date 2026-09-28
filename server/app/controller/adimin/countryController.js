const countryModel = require("../../model/countryModel")



let countryController = {
    create: async (req, res) => {
        // console.log(req.body)
        let { name } = req.body
        try {
            let checkCountry = await countryModel.findOne({ name })
            if (checkCountry) {
                return res.send({
                    status: false,
                    error: {
                        name: "Country name already Exist.."
                    }
                })
            }

            let insertRes = await countryModel(req.body).save()

            res.send(
                {
                    status: true,
                    msg: "country added",
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

        const viewRes = await countryModel.find()
        res.send(
            {
                status: true,
                msg: "country view",
                viewRes
            }
        )
    }
    ,

    delete: async (req, res) => {
        let { ids } = req.body

        let delRes = await countryModel.deleteMany({ _id: ids })
        res.send(
            {
                status: true,
                msg: "country delete",
                delRes
            }
        )
    },

    update: async (req, res) => {
        let { id } = req.params

        let updateRes = await countryModel.updateOne(
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
                msg: "country update",
                updateRes
            }
        )
    },
    changeStatus: async (req, res) => {
        let { ids } = req.body
        let oldStatus = await countryModel.find({ _id: ids })
        for (let obj of oldStatus) {
            await countryModel.updateOne(
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
    updateDetails: async (req, res) => {
        let { id } = req.params
        let data = await countryModel.findOne({ _id: id })
        res.send({
            status: true,
            msg: "Country view",
            data
        })
    }

}

module.exports = countryController