import React from 'react'
import BreadCrumbs from '../components/common/BreadCrumbs'
import CartDetails from '../components/cart-components/CartDetails'

export default function Cart() {
    return (
        <>
            <section className='w-full'>
                <div className='max-w-[1140px] mx-auto px-3 border-b border-b-gray-200'>
                    <BreadCrumbs title={'Shopping Cart'} />
                </div>
            </section>
            <section className='w-full'>
                <CartDetails />
            </section>
        </>
    )
}
