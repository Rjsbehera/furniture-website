import React from 'react'
import BreadCrumbs from '../components/common/BreadCrumbs'
import MydashboardContent from '../components/mydashboardComponents/MydashboardContent'


export default function MyDashboard() {

    return (
        <>
            <section className='w-full'>
                <div className='max-w-[1140px] mx-auto px-3 border-b border-b-gray-200'>
                    <BreadCrumbs title={"My Dahsbord"} />
                </div>
            </section>
            {/* Dashboard Menu */}
           <MydashboardContent />

        </>
    )
}
