const mongoose=require("mongoose")

const subSubCategorySchema= mongoose.Schema({
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
    subcategory:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"subcategory"
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

const subSubCategoryModel=mongoose.model("subSubCategory",subSubCategorySchema)
module.exports=subSubCategoryModel