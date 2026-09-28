import axios from "axios"


// let getProducts=()=>{
//     return axios.get("https://dummyjson.com/products")
//     .then((res)=>res.data)
//     .then((finalRes)=>finalRes.products)
// }

let getProducts=async ()=>{
    let apiRes=await axios.get("https://dummyjson.com/products")
    let res=apiRes.data
    // let finalRes=res.products
    // return finalRes
    let {products}=res
    return products
}

export {getProducts}