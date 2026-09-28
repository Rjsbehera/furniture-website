"use client";
import React, { useEffect, useState } from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Navbar from './Navbar';
import Link from 'next/link'




export default function Header() {
  const [showNavbar, setShowNavbar] = useState(false);
  let [openBurger, setOpenBurger] = useState(false)
  let [openMenu, setOpenMenu] = useState(false)
  let [isOpenSofa, setIsOpenSofa] = useState(false)
  let [isOpenPage, setIsOpenPage] = useState(false)
  let [openCart,setOpenCart]=useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY > 85);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navbar visible={showNavbar} />
      <header className={`hidden min-[992px]:block bg-white w-full transition-all duration-300 ${showNavbar ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        {/*header top start*/}
        <div className=' flex gap-120 justify-around border-b border-b-gray-200 p-[13px]'>
          <p className='text-[12px] font-rubik'>Contact us 24/7 : +91-98745612330 / furniture@gmail.com</p>
          <button className='text-[12px] font-rubik'><Link href={'/login-register'}>Login / Register</Link></button>
        </div>
        {/*header top start*/}
        {/*header middel start*/}
        <div className='flex gap-65 justify-around py-5 border-b border-b-gray-200'>
          <figure>
            <img className='max-w-30' src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/company-profile/logo/cccfbdab-3bec-439f-88b9-5694698cd302-1670132652.png" alt="" />
          </figure>
          <div className='flex gap-5 items-center'>
            <div className='flex items-center border border border-gray-200 px-2'>
              <input className='w-60 h-11 outline-0' type="text" placeholder='Search Products....' /><IoSearchSharp className='text-xl' /></div>
            <button className=' border border-gray-200 p-[11px] cursor-pointer'><Link href={'/whishlist'}><FaHeart className='text-xl' /></Link></button>
            <div className='relative flex items-center border border-gray-200 p-[9px] cursor-pointer' onClick={()=>setOpenCart(true)}>
              <span className='px-2 border-r border-r-gray-200'><MdShoppingCart className='text-xl' /></span>
              <p className='flex gap-2 items-center px-2'>Rs.0<MdKeyboardArrowDown className='text-[16px]' /></p>
            </div>
            {/* cart model */}
            <div className={`fixed bg-[#FFFFFF] w-[350px] max-w-[100vw] h-screen z-20 right-0 top-0 p-5 transition-transform duration-300 ${openCart ? 'translate-x-0' : 'translate-x-full'}`}>
              <div className={`flex justify-between items-center border-b border-b-gray-200`}  >
                <h3 className='font-bold'>Cart</h3>
                <span className='text-xl cursor-pointer' onClick={()=>setOpenCart(false)} ><RxCross2/></span>
              </div>
              <div className='bg-[#242424] w-full py-5 mt-5'>
                <button className='w-[80%] bg-[#C09578] text-white py-2 rounded-sm uppercase mb-2 ml-8 cursor-pointer'><Link href={'/cart'} >view cart</Link></button>
                <button className='w-[80%] bg-[#C09578] text-white py-2 rounded-sm uppercase ml-8 cursor-pointer' ><Link href={'/checkOut'} >checkout</Link></button>
              </div>
            </div>
          </div>
        </div>
        {/*header middel end*/}
        {/*header bottom satrt*/}
        <nav className='border-b border-b-gray-200'>
          <ul className='flex justify-center item-center font-family s-center'>
            <li className='text-[13px] font-playfair uppercase p-5 leading-6 font-normal'><Link href='/'>Home</Link></li>
            <li className='relative flex gap-2 items-center text-[13px] font-playfair uppercase p-5 leading-6 font-normal cursor-pointer' onMouseEnter={() => setOpenMenu(true)} onMouseLeave={() => setOpenMenu(false)}>Living<MdKeyboardArrowDown className='text-[16px]' />
              {
                openMenu &&
                <ul className={`absolute top-16 left-0 w-[580px] flex z-10 bg-white justify-between px-6 py-8 font-rubik origin-top transition-transform duration-1000 ${openMenu ? 'rotate-x-0' : 'rotate-x-[-90deg]'}`}>

                  <li>Tables
                    <ul className='mt-5'>
                      <li className='text-gray-500 text-[12px] py-[2px]'>
                        <a href="">
                          Side and End Tables
                        </a>
                      </li>
                      <li className='text-gray-500 text-[12px] py-[2px]'>
                        <a href="">
                          Nest Of Tables
                        </a>
                      </li>
                      <li className='text-gray-500 text-[12px] py-[2px]'>
                        <a href="">
                          Coffee Table Sets
                        </a>
                      </li>
                      <li className='text-gray-500 text-[12px] py-[2px]'>
                        <a href="">
                          Coffee Tables
                        </a>
                      </li>
                      <li className='text-gray-500 text-[12px] py-[2px]'>
                        <a href="">
                          Dining Tables
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>Mirrors
                    <ul className='mt-5'>
                      <li className='text-gray-500 text-[12px] py-[2px]'>
                        <a href="">
                          Fancy Mirror
                        </a>
                      </li>
                      <li className='text-gray-500 text-[12px] py-[2px]'>
                        <a href="">
                          Wooden Mirrors
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>Living Storage/collections
                    <ul className='mt-5'>
                      <li className='text-gray-500 text-[12px] py-[2px]'>
                        <a href="">
                          Prayer Units
                        </a>
                      </li>
                      <li className='text-gray-500 text-[12px] py-[2px]'>
                        <a href="">
                          Display Unit
                        </a>
                      </li>
                      <li className='text-gray-500 text-[12px] py-[2px]'>
                        <a href="">
                          Shoe Racks
                        </a>
                      </li>
                      <li className='text-gray-500 text-[12px] py-[2px]'>
                        <a href="">
                          Chest Of Drawers
                        </a>
                      </li>
                      <li className='text-gray-500 text-[12px] py-[2px]'>
                        <a href="">
                          Cabinets and Sideboard
                        </a>
                      </li>
                      <li className='text-gray-500 text-[12px] py-[2px]'>
                        <a href="">
                          Bookshelves
                        </a>
                      </li>
                      <li className='text-gray-500 text-[12px] py-[2px]'>
                        <a href="">
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
                        <a href="">
                          Wooden Sofa Cum Bed
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>Sofa Sets
                    <ul className='mt-5'>
                      <li className='text-gray-500 text-[12px] py-[2px]'>
                        <a href="">
                          Sofa Cover
                        </a>
                      </li>
                      <li className='text-gray-500 text-[12px] py-[2px]'>
                        <a href="">
                          L Shape Sofa
                        </a>
                      </li>
                      <li className='text-gray-500 text-[12px] py-[2px]'>
                        <a href="">
                          1 Seater Sofa
                        </a>
                      </li>
                      <li className='text-gray-500 text-[12px] py-[2px]'>
                        <a href="">
                          2 Seater Sofa
                        </a>
                      </li>
                      <li className='text-gray-500 text-[12px] py-[2px]'>
                        <a href="">
                          3 Seater Sofa
                        </a>
                      </li>
                      <li className='text-gray-500 text-[12px] py-[2px]'>
                        <a href="">
                          Wooden Sofa Sets
                        </a>
                      </li>
                      <li className='text-gray-500 text-[12px] py-[2px]'>
                        <a href="">
                          Normal
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>Swing Jhula
                    <ul className='mt-5'>
                      <li className='text-gray-500 text-[12px] py-[2px]'>
                        <a href="">
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
                  <a href="/cart">
                    Cart
                  </a>
                </li>
                <li className='text-gray-500 text-[12px] py-[2px]'>
                  <a href="/checkOut">
                    Checkout
                  </a>
                </li>
                <li className='text-gray-500 text-[12px] py-[2px]'>
                  <a href="">
                    Frequently Questions
                  </a>
                </li>
              </ul>
             }
            </li>
            <li className='text-[13px] font-playfair uppercase p-5 leading-6 font-normal'><Link href={'/contact-us'}>contact us</Link>
            </li>
          </ul>
        </nav>
        {/*header bottom end*/}
      </header>
      {/* Buttonm header start */}
      <section className='block min-[992px]:hidden py-[23px] md:py-[30px]'>
        <div className='w-full sm:max-w-[500px] md:max-w-[720px] mx-auto flex justify-between items-center px-3'>
          <figure>
            <img className='max-w-25 md:max-w-30' src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/company-profile/logo/cccfbdab-3bec-439f-88b9-5694698cd302-1670132652.png" alt="" />
          </figure>
          <div className='flex gap-3 md:gap-5 items-center'>
            <button className=' border border-gray-200 p-2 md:p-3 cursor-pointer'><Link href={'/whishlist'}><FaHeart className='text-[18px] md:text-xl' /></Link></button>
            <div className='flex items-center border border-gray-200 p-2 md:p-[10px]'>
              <span className='px-2 border-r border-r-gray-200 cursor-pointer'><Link href={'/cart'}><MdShoppingCart className='text-[18px] md:text-xl' /></Link></span>
              <p className='flex gap-2 items-center px-2'>Rs.0<MdKeyboardArrowDown className='text-[14px] md:text-[16px]' /></p>
            </div>
          </div>
          <button className='text-[20px] md:text-2xl border border-gray-200 px-3 py-2 cursor-pointer' onClick={() => setOpenBurger(true)}><RxHamburgerMenu /></button>
          {/* Burger Menu */}
          {
            openBurger &&
            <div className='fixed left-0 top-0 w-75 h-screen  bg-white z-20 p-3 transition-transform duration-500'>
              <div className='relative'>
                <span className='absolute right-2 border border-gray-200 rounded-[50%] p-[6px]' onClick={() => setOpenBurger(false)}><RxCross2 /></span>
              </div>
              <div className='text-center font-rubik text-[12px] mt-10'>
                <p className='pb-5'>Contact us 24/7 : +91-98745612330</p>
                <p className='pb-5'>furniture@gmail.com</p>
              </div>
              <ul className='p-2'>
                <li className='font-rubik text-[14px] py-3 border-b border-b-gray-200'>Home</li>
                <li className='flex justify-between items-center font-rubik text-[14px] py-3 border-b border-b-gray-200'>Living<MdOutlineKeyboardArrowDown className='text-[18px] text-gray-400' /></li>
                <li className='flex justify-between items-center font-rubik text-[14px] py-3 border-b border-b-gray-200'>Sofa<MdOutlineKeyboardArrowDown className='text-[18px] text-gray-400' /></li>
                <li className='flex justify-between items-center font-rubik text-[14px] py-3 border-b border-b-gray-200'>Pages<MdOutlineKeyboardArrowDown className='text-[18px] text-gray-400' /></li>
                <li className='font-rubik text-[14px] py-3 border-b border-b-gray-200'>Login / Register</li>
              </ul>
            </div>
          }
        </div>
      </section>
    </>
  )
}



