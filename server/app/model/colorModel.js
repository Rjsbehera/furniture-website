const mongoose=require("mongoose")

const colorSchema= mongoose.Schema({
    name:{
        type:String,
        required:[true,"please fill the name"],
        minLength:[2,"please fill at least 2 character"],
        maxLength:[100,"you could fill 100 character"]
    },
    code:{
        type:String,
        required:[true,"code is required"],
        minLength:[2,"code must be at least 2 character"],
        maxLength:[100,"code at most 100 character"]
    },
    order:{
       type:Number,
       required:[true,"code is required"],
    },
    status:{
        type:Boolean,
        default:true
    },
    date:{
        type:Date,
        default:Date.now
    }
}
)

const colorModel=mongoose.model("color",colorSchema)
module.exports=colorModel