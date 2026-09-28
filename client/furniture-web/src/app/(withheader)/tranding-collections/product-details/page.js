import React from 'react'
import BreadCrumbs from '../../components/common/BreadCrumbs'
import TrandingProductDetails from '../../components/product-components/TrandingProductDetails'

export default function ProductDetails() {
  return (
    <>
    <div className='w-[1140px] mx-auto px-3 py-10 border-b border-b-gray-200'>
      <BreadCrumbs title={'Caroline Study Tables'}/>
    </div>
    <TrandingProductDetails/>
    </>
  )
}
