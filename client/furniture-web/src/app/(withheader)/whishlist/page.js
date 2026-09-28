import React from 'react'
import BreadCrumbs from '../components/common/BreadCrumbs'
import WhishlistDetails from '../components/whishlist-components/WhishlistDetails'

export default function Whishlist() {
    return (
        <>
            <section className='w-full'>
                <div className='max-w-[1140px] mx-auto px-3 border-b border-b-gray-200'>
                    <BreadCrumbs title={'My Whishlist'} />
                </div>
                <WhishlistDetails/>
            </section>
        </>
    )
}
