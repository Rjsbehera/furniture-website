import React from 'react'
import BreadCrumbs from '../components/common/BreadCrumbs'
import Checkout from '../components/checkout-components/Checkout'


export default function CheckOut() {
    return (
        <>
            <section className='w-full'>
                <div className='max-w-[1140px] mx-auto px-3 border-b border-b-gray-200'>
                    <BreadCrumbs title={'Checkout'} />
                </div>
            </section>
            <section className='w-full'>
                <Checkout />
            </section>
        </>
    )
}
