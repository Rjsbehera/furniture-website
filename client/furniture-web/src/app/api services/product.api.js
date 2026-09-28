import axios from "axios"



let getProductDetails=( productId )=>{
    return axios.get(`https://dummyjson.com/products/${productId}`)
    .then((res)=>res.data)
    .then((finalRes)=>finalRes)

}

export {getProductDetails}