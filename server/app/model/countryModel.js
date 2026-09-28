const mongoose = require("mongoose")

const countrySchema = mongoose.Schema({
    name:{
        type:String,
        repqired:[true,"plese fill tha name"],
        minLength:[2,"please fill at least 2 characters"],
        maxLength:[100,"You can fill at most 100 characters"]
    },
    order:{
        type:Number,
        required:[true,"Order is required"],
        minLength:[2,"please fill at least 2 numbers"],
        maxLength:[100,"You can fill at most 100 numbers"]
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
const countryModel = mongoose.model("country", countrySchema)
module.exports = countryModel