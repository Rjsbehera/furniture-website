const mongoose = require("mongoose")

const faqSchema = mongoose.Schema({
    question:{
        type:String,
        repqired:[true,"plese fill tha name"],
        minLength:[2,"please fill at least 2 characters"],
        maxLength:[100,"You can fill at most 100 characters"]
    },
    answer:{
        type:String,
        required:[true,"Order is required"],
        minLength:[2,"please fill at least 2 numbers"],
        maxLength:[100,"You can fill at most 100 numbers"]
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
const faqModel = mongoose.model("faq", faqSchema)
module.exports = faqModel