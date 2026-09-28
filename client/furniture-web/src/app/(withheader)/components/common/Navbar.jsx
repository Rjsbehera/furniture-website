"use client";
import React, { useEffect, useState } from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";
import Link from 'next/link';

export default function Navbar({ visible }) {
    let [sofaHover, setSofaHover] = useState(false)
    let [openMenu, setOpenMenu] = useState(false)
    let [isOpenSofa, setIsOpenSofa] = useState(false)
    let [isOpenPage, setIsOpenPage] = useState(false)

    return (
        <>
            <section className={`block min-[991px]:hidden min-[992px]:block fixed top-0 left-0 right-0 z-50 w-full px-[50px] shadow-lg bg-white transition-transform duration-300 ease-in-out ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
                <nav className='max-w-[1200px] mx-auto flex justify-center items-center'>
                    <figure>
                        <img className='max-w-40 font-rubik p-5' src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/company-profile/logo/cccfbdab-3bec-439f-88b9-5694698cd302-1670132652.png" alt="" />
                    </figure>
                    <ul className='flex justify-center item-center font-family s-center'>
                        <li className='text-[12px] font-playfair uppercase p-5 font-normal leading-6'><Link href={'/'}>Home</Link></li>
                        <li className='relative flex gap-2 items-center text-[13px] font-playfair uppercase p-5 leading-6 font-normal cursor-pointer' onMouseEnter={() => setOpenMenu(true)} onMouseLeave={() => setOpenMenu(false)}>Living<MdKeyboardArrowDown className='text-[16px]' />
                            {
                                openMenu &&
                                <ul className={`absolute top-16 left-0 w-[580px] flex z-10 bg-white justify-between px-6 py-8 font-rubik origin-top transition-transform duration-1000 ${openMenu ? 'rotate-x-0' : 'rotate-x-[-90deg]'}`}>

                                    <li>Tables
                                        <ul className='mt-5'>
                                            <li className='text-gray-500 text-[12px] py-[2px]'>
                                                <a href="https://wscubetech.co/Assignments/furniture/categories/side-and-end-tables">
                                                    Side and End Tables
                                                </a>
                                            </li>
                                            <li className='text-gray-500 text-[12px] py-[2px]'>
                                                <a href="https://wscubetech.co/Assignments/furniture/categories/nest-of-tables">
                                                    Nest Of Tables
                                                </a>
                                            </li>
                                            <li className='text-gray-500 text-[12px] py-[2px]'>
                                                <a href="https://wscubetech.co/Assignments/furniture/categories/coffee-table-sets">
                                                    Coffee Table Sets
                                                </a>
                                            </li>
                                            <li className='text-gray-500 text-[12px] py-[2px]'>
                                                <a href="https://wscubetech.co/Assignments/furniture/categories/coffee-tables">
                                                    Coffee Tables
                                                </a>
                                            </li>
                                            <li className='text-gray-500 text-[12px] py-[2px]'>
                                                <a href="https://wscubetech.co/Assignments/furniture/categories/dining-tables">
                                                    Dining Tables
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>Mirrors
                                        <ul className='mt-5'>
                                            <li className='text-gray-500 text-[12px] py-[2px]'>
                                                <a href="https://wscubetech.co/Assignments/furniture/categories/fancy-mirror">
                                                    Fancy Mirror
                                                </a>
                                            </li>
                                            <li className='text-gray-500 text-[12px] py-[2px]'>
                                                <a href="https://wscubetech.co/Assignments/furniture/categories/wooden-mirrors">
                                                    Wooden Mirrors
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>Living Storage/collections
                                        <ul className='mt-5'>
                                            <li className='text-gray-500 text-[12px] py-[2px]'>
                                                <a href="https://wscubetech.co/Assignments/furniture/categories/prayer-units">
                                                    Prayer Units
                                                </a>
                                            </li>
                                            <li className='text-gray-500 text-[12px] py-[2px]'>
                                                <a href="https://wscubetech.co/Assignments/furniture/categories/display-unit">
                                                    Display Unit
                                                </a>
                                            </li>
                                            <li className='text-gray-500 text-[12px] py-[2px]'>
                                                <a href="https://wscubetech.co/Assignments/furniture/categories/shoe-racks">
                                                    Shoe Racks
                                                </a>
                                            </li>
                                            <li className='text-gray-500 text-[12px] py-[2px]'>
                                                <a href="https://wscubetech.co/Assignments/furniture/categories/chest-of-drawers">
                                                    Chest Of Drawers
                                                </a>
                                            </li>
                                            <li className='text-gray-500 text-[12px] py-[2px]'>
                                                <a href="https://wscubetech.co/Assignments/furniture/categories/cabinets-and-sideboard">
                                                    Cabinets and Sideboard
                                                </a>
                                            </li>
                                            <li className='text-gray-500 text-[12px] py-[2px]'>
                                                <a href="https://wscubetech.co/Assignments/furniture/categories/bookshelves">
                                                    Bookshelves
                                                </a>
                                            </li>
                                            <li className='text-gray-500 text-[12px] py-[2px]'>
                                                <a href="https://wscubetech.co/Assignments/furniture/categories/tv-units">
                                                    Tv Units
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            }

                        </li>
                        <li className='relative flex gap-2 items-center text-[13px] font-playfair uppercase p-5 leading-6 font-normal cursor-pointer' onMouseEnter={() => setIsOpenSofa(true)} onMouseLeave={() => setIsOpenSofa(false)}>Sofa <MdKeyboardArrowDown className='text-[16px]' />
                            {
                                isOpenSofa &&
                                <ul className={`absolute top-16 left-0 w-[580px] z-10 bg-white flex justify-between px-6 py-8 font-rubik origin-top transition-transform duration-1000 ${isOpenSofa ? 'rotate-x-0' : 'rotate-x-[-90deg]'}`}>
                                    <li>Sofa Cum Bed
                                        <ul className='mt-5'>
                                            <li className='text-gray-500 text-[12px] py-[2px]'>
                                                <a href="https://wscubetech.co/Assignments/furniture/categories/wooden-sofa-cum-bed">
                                                    Wooden Sofa Cum Bed
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>Sofa Sets
                                        <ul className='mt-5'>
                                            <li className='text-gray-500 text-[12px] py-[2px]'>
                                                <a href="https://wscubetech.co/Assignments/furniture/categories/fancy-mirror">
                                                    Sofa Cover
                                                </a>
                                            </li>
                                            <li className='text-gray-500 text-[12px] py-[2px]'>
                                                <a href="https://wscubetech.co/Assignments/furniture/categories/wooden-mirrors">
                                                    L Shape Sofa
                                                </a>
                                            </li>
                                            <li className='text-gray-500 text-[12px] py-[2px]'>
                                                <a href="https://wscubetech.co/Assignments/furniture/categories/wooden-mirrors">
                                                    1 Seater Sofa
                                                </a>
                                            </li>
                                            <li className='text-gray-500 text-[12px] py-[2px]'>
                                                <a href="https://wscubetech.co/Assignments/furniture/categories/wooden-mirrors">
                                                    2 Seater Sofa
                                                </a>
                                            </li>
                                            <li className='text-gray-500 text-[12px] py-[2px]'>
                                                <a href="https://wscubetech.co/Assignments/furniture/categories/wooden-mirrors">
                                                    3 Seater Sofa
                                                </a>
                                            </li>
                                            <li className='text-gray-500 text-[12px] py-[2px]'>
                                                <a href="https://wscubetech.co/Assignments/furniture/categories/wooden-mirrors">
                                                    Wooden Sofa Sets
                                                </a>
                                            </li>
                                            <li className='text-gray-500 text-[12px] py-[2px]'>
                                                <a href="https://wscubetech.co/Assignments/furniture/categories/wooden-mirrors">
                                                    Normal
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>Swing Jhula
                                        <ul className='mt-5'>
                                            <li className='text-gray-500 text-[12px] py-[2px]'>
                                                <a href="https://wscubetech.co/Assignments/furniture/categories/prayer-units">
                                                    Wooden Jhula
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            }
                        </li>
                        <li className='relative flex gap-2 items-center text-[13px] font-playfair uppercase p-5 leading-6 font-normal cursor-pointer' onMouseEnter={() => setIsOpenPage(true)} onMouseLeave={() => setIsOpenPage(false)}>pages<MdKeyboardArrowDown className='text-[16px]' />
                            {
                                isOpenPage &&
                                <ul className={`absolute top-16 left-0 w-[220px] z-10 bg-white px-6 py-2 font-rubik origin-top transition-transform duration-1000 ${isOpenPage ? 'rotate-x-0' : 'rotate-x-[-90deg]'}`}>
                                    <li className='text-gray-500 text-[12px] py-[2px]'>
                                        <Link href={'/about-us'}>
                                            About Us
                                        </Link>
                                    </li>
                                    <li className='text-gray-500 text-[12px] py-[2px]'>
                                        <a href="https://wscubetech.co/Assignments/furniture/categories/prayer-units">
                                            Cart
                                        </a>
                                    </li>
                                    <li className='text-gray-500 text-[12px] py-[2px]'>
                                        <a href="https://wscubetech.co/Assignments/furniture/categories/prayer-units">
                                            Checkout
                                        </a>
                                    </li>
                                    <li className='text-gray-500 text-[12px] py-[2px]'>
                                        <a href="https://wscubetech.co/Assignments/furniture/categories/prayer-units">
                                            Frequently Questions
                                        </a>
                                    </li>
                                </ul>
                            }
                        </li>
                        {/* <li className='flex gap-2 items-center text-[12px] font-playfair uppercase p-5 font-normal leading-6'>Living <MdKeyboardArrowDown className='text-[16px]' /></li>
                        <li className='flex gap-2 items-center text-[12px] font-playfair uppercase p-5 font-normal leading-6 cursor-pointer' onMouseEnter={() => setSofaHover(false)} onMouseLeave={() => setSofaHover(true)}>Sofa <MdKeyboardArrowDown className='text-[16px]' /></li>
                        <li className='flex gap-2 items-center text-[12px] font-playfair uppercase p-5 font-normal leading-6'><Link href={'/about-us'}>pages</Link><MdKeyboardArrowDown className='text-[16px]' /></li> */}
                        <li className='text-[12px] font-playfair uppercase p-5 font-normal leading-6'><Link href={'/contact-us'}>contact us</Link></li>
                    </ul>
                </nav>
            </section>
        </>
    )
}
