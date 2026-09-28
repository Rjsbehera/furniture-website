const faqModel = require("../../model/faqModel")



let faqController = {
    create: async (req, res) => {
        // console.log(req.body)
        let { question } = req.body
        try {
            let checkFaq = await faqModel.findOne({ question })
            if (checkFaq) {
                return res.send({
                    status: false,
                    error: {
                        name: "Faq name already Exist..."
                    }
                })
            }

            let insertRes = await faqModel(req.body).save()

            res.send(
                {
                    status: true,
                    msg: "faq added",
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

        const viewRes = await faqModel.find()
        res.send(
            {
                status: true,
                msg: "faq view",
                viewRes
            }
        )
    },

    delete: async (req, res) => {
        let { ids } = req.body
        let delRes = await faqModel.deleteMany({ _id: ids })
        res.send(
            {
                status: true,
                msg: "faq delete",
                delRes
            }
        )
    },

    update: async (req, res) => {
        let { id } = req.params

        let updateRes = await faqModel.updateOne(
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
                msg: "faq update",
                updateRes
            }
        )
    },
    changeStatus: async (req, res) => {
        let { ids } = req.body
        let oldStatus = await faqModel.find({ _id: ids })
        for (let obj of oldStatus) {
            await faqModel.updateOne(
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
        let data = await faqModel.findOne({ _id: id })
        res.send({
            status: true,
            msg: "Faq view",
            data
        })
    }

}

module.exports = faqController