let express=require("express")
const colorRoute = require("./colorRoutes")
const materialRoute = require("./materialRoutes")
const authRoute = require("./authRoutes")
const sliderRoute = require("./sliderRoutes")
const countryRoute = require("./countryRoutes")
const faqRoute = require("./faqRoutes")
const categoryRoute = require("./cateroryRoute")
const subcategoryRoute = require("./subCategoryRoute")
const subSubcategoryRoute = require("./subSubCategoryRoute")
let adminRoutes=express.Router()

// adminRoutes.post("/login",(req,res)=>{
//     res.send(
//         {
//             status:true,
//             msg:"server start"
//         }
//     )
// })


adminRoutes.use("/color",colorRoute)
adminRoutes.use("/material",materialRoute)
adminRoutes.use("/login",authRoute)
adminRoutes.use("/slider",sliderRoute)
adminRoutes.use("/country",countryRoute)
adminRoutes.use("/faq",faqRoute)
adminRoutes.use("/category",categoryRoute)
adminRoutes.use("/subcategory",subcategoryRoute)
adminRoutes.use("/subsubcategory",subSubcategoryRoute)

module.exports=adminRoutes