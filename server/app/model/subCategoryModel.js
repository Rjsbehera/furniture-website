const mongoose=require("mongoose")

const subcategorySchema= mongoose.Schema({
    name:{
        type:String,
        required:[true,"please fill the name"],
        minLength:[2,"please fill at least 2 character"],
        maxLength:[100,"you could fill 100 character"]
    },
    parent:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"category"
    },
    image:{
        type:String,
        required:[true,"please fill select file"]
    },
    order:{
       type:Number,
       required:[true,"order is required"],
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

const subcategoryModel=mongoose.model("subcategory",subcategorySchema)
module.exports=subcategoryModel