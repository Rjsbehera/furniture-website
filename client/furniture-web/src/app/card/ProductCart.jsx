import React from 'react'
import Link from "next/link"

export default function ProductCart({ProductData}) {
    let {id,thumbnail,title,price}=ProductData
  return (
    <>
    <div className="group relative">
        <img src={thumbnail} alt="Front of men&#039;s Basic Tee in black." className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80" />
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <Link href={`/product/${id}`}>
                <span aria-hidden="true" className="absolute inset-0"></span>
                {title}
              </Link>
            </h3>
            <p className="mt-1 text-sm text-gray-500">Black</p>
          </div>
          <p className="text-sm font-medium text-gray-900">${price}</p>
        </div>
      </div>
    </>
  )
}
