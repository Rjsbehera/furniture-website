const mongoose = require("mongoose")

const materialSchema = mongoose.Schema({
    name:{
        type:String,
        repqired:[true,"plese fill tha name"],
        minLength:[2,"please fill at least 2 characters"],
        maxLength:[100,"You can fill at most 100 characters"]
    },
    order:{
        type:Number,
        required:[true,"Order is required"],
    },
    status:{
        type:Boolean,
        default:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})
const materialModel = mongoose.model("material", materialSchema)
module.exports = materialModel