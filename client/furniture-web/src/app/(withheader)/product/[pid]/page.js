import { getProductDetails } from '@/app/api services/product.api'
import React from 'react'
import SingleProductDetails from '../../components/product-components/SingleProductDetails'
import BreadCrumbs from '../../components/common/BreadCrumbs'

export default async function ProductDetails(req) {
    let {pid}=await req.params

    let data=await getProductDetails(pid)
    console.log(data)

  return (
    <div>
      {
        data &&
         <>
         <BreadCrumbs title={data.title}/>
         <SingleProductDetails data={data}/>
         </>
      }
    </div>
  )
}
