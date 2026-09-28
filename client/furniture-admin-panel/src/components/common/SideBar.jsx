import React, { useState } from 'react'
import { RiDashboard3Line } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { SiTarget } from "react-icons/si";
import { BiSolidMessage } from "react-icons/bi";
import { MdOutlineInvertColors } from "react-icons/md";
import { SiMaterialdesignicons } from "react-icons/si";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaShoppingBag } from "react-icons/fa";
import { FaArrowRotateLeft } from "react-icons/fa6";
import { PiNoteFill } from "react-icons/pi";
import { BsSliders } from "react-icons/bs";
import { FaLocationArrow } from "react-icons/fa6";
import { FaUserEdit } from "react-icons/fa";
import { TiMessages } from "react-icons/ti";
import { GrNotes } from "react-icons/gr";
import { Link } from 'react-router';
import ViewUser from '../pages/user/ViewUser';

export default function SideBar() {
  let [menu, setMenu] = useState(null)


  return (
    <>
      <div className='h-screen bg-gray-100 overflow-y-scroll'>
        <figure className='border-b-1 p-2'>
          <img className='mx-auto' src="https://www.wscubetech.com/resources/images/wscube-tech-logo-2.svg" alt="" />
        </figure>
        <ul>
          <li className='flex gap-3 items-center p-2'><RiDashboard3Line />
            <Link to={'/dashboard'}>Dashboard</Link>
          </li>
          <li className='p-2 relative'>
            <button className='flex gap-3 items-center cursor-pointer' onClick={() => setMenu(prev=>prev===0 ? null : 0)}  >
              <FaRegUserCircle />User
              {
                menu === 0 ?
                  <MdKeyboardArrowUp className='absolute right-2' />
                  :
                  <MdOutlineKeyboardArrowDown className='absolute right-2' />

              }

            </button>

            {
              menu === 0 &&
              <ul className='py-1 bg-white'>
                <li className='flex gap-3 items-center p-2'><SiTarget /><Link to={'/user/viewuser'}>View User</Link></li>
              </ul>
            }


          </li>
          <li className='p-2 relative'>
            <button className='flex gap-3 items-center cursor-pointer' onClick={() => setMenu(prev=>prev===1 ? null : 1)} >
              <BiSolidMessage />Enquiry
              {
                menu === 1 ?
                  <MdKeyboardArrowUp className='absolute right-2' />
                  :
                  <MdOutlineKeyboardArrowDown className='absolute right-2' />

              }
            </button>
            {
              menu === 1 &&
              <ul className='py-1 bg-white'>
                <li className='flex gap-3 items-center p-2'><SiTarget /><Link to={'/enquiry/contactenquiry'}>Contact Enquiry</Link></li>
                <li className='flex gap-3 items-center p-2'><SiTarget /><Link to={'/enquiry/newslatter'}>Newslatter</Link></li>
              </ul>
            }
          </li>
          <li className='p-2 relative'>
            <button className='flex gap-3 items-center cursor-pointer' onClick={() => setMenu(prev=>prev===2 ? null : 2)} >
              <MdOutlineInvertColors />Color
              {
                menu === 2 ?
                  <MdKeyboardArrowUp className='absolute right-2' />
                  :
                  <MdOutlineKeyboardArrowDown className='absolute right-2' />

              }
            </button>
            {
              menu === 2 &&
              <ul className='py-1 bg-white'>
                <li className='flex gap-3 items-center p-2'><SiTarget /><Link to={'/color/addcolor'}>Add Color</Link></li>
                <li className='flex gap-3 items-center p-2'><SiTarget /><Link to={'/color/viewcolor'}>View Color</Link></li>
              </ul>
            }
          </li>
          <li className='p-2 relative'>
            <button className='flex gap-3 items-center cursor-pointer' onClick={() => setMenu(prev=>prev===3 ? null : 3)} >
              <SiMaterialdesignicons />Material
              {
                menu === 3 ?
                  <MdKeyboardArrowUp className='absolute right-2' />
                  :
                  <MdOutlineKeyboardArrowDown className='absolute right-2' />

              }
            </button>
            {
              menu === 3 &&
              <ul className='py-1 bg-white'>
                <li className='flex gap-3 items-center p-2'><SiTarget /><Link to={'/material/addmaterial'}>Add Material</Link></li>
                <li className='flex gap-3 items-center p-2'><SiTarget /><Link to={'/material/viewmaterial'}>View Material</Link></li>
              </ul>
            }
          </li>
          <li className='p-2 relative'>
            <button className='flex gap-3 items-center cursor-pointer' onClick={() => setMenu(prev=>prev===4 ? null : 4)} >
              <FaBarsStaggered />Parent Catagorys
              {
                menu === 4 ?
                  <MdKeyboardArrowUp className='absolute right-2' />
                  :
                  <MdOutlineKeyboardArrowDown className='absolute right-2' />

              }
            </button>
            {
              menu === 4 &&
              <ul className='py-1 bg-white'>
                <li className='flex gap-3 items-center p-2'><SiTarget /><Link to={'/parentcatagory/addcatagory'}>Add Category</Link></li>
                <li className='flex gap-3 items-center p-2'><SiTarget /><Link to={'/parentcatagory/viewcatagory'}>View Category</Link></li>
              </ul>
            }
          </li>
          <li className='p-2 relative'>
            <button className='flex gap-3 items-center cursor-pointer' onClick={() => setMenu(prev=>prev===5 ? null : 5)} >
              <FaBarsStaggered />Sub Catagorys
              {
                menu === 5 ?
                  <MdKeyboardArrowUp className='absolute right-2' />
                  :
                  <MdOutlineKeyboardArrowDown className='absolute right-2' />

              }
            </button>
            {
              menu === 5 &&
              <ul className='py-1 bg-white'>
                <li className='flex gap-3 items-center p-2'><SiTarget /><Link to={'/subcatagory/addcatagory'}>Add Sub Category</Link></li>
                <li className='flex gap-3 items-center p-2'><SiTarget /><Link to={'/subcatagory/viewcatagory'}>View Sub Category</Link></li>
              </ul>
            }
          </li>
          <li className='p-2 relative'>
            <button className='flex gap-3 items-center cursor-pointer' onClick={() => setMenu(prev=>prev===6 ? null : 6)} >
              <FaBarsStaggered />Sub Sub Catagoies
              {
                menu === 6 ?
                  <MdKeyboardArrowUp className='absolute right-2' />
                  :
                  <MdOutlineKeyboardArrowDown className='absolute right-2' />

              }
            </button>
            {
              menu === 6 &&
              <ul className='py-1 bg-white'>
                <li className='flex gap-3 items-center p-2'><SiTarget /><Link to={'/subsubcatagory/addsubsubcatagory'}>Add Sub Sub Category</Link></li>
                <li className='flex gap-3 items-center p-2'><SiTarget /><Link to={'/subsubcatagory/viewsubsubcatagory'}>View Sub Sub Category</Link></li>
              </ul>
            }
          </li>
          <li className='p-2 relative'>
            <button className='flex gap-3 items-center cursor-pointer' onClick={() => setMenu(prev=>prev===7 ? null : 7)} >
              <FaShoppingBag />Products
              {
                menu === 7 ?
                  <MdKeyboardArrowUp className='absolute right-2' />
                  :
                  <MdOutlineKeyboardArrowDown className='absolute right-2' />

              }
            </button>
            {
              menu === 7 &&
              <ul className='py-1 bg-white'>
                <li className='flex gap-3 items-center p-2'><SiTarget /><Link to={'/products/addproducts'}>Add Category</Link></li>
                <li className='flex gap-3 items-center p-2'><SiTarget /><Link to={'/products/viewproducts'}>View Category</Link></li>
              </ul>
            }
          </li>
          <li className='p-2 relative'>
            <button className='flex gap-3 items-center cursor-pointer' onClick={() => setMenu(prev=>prev===8 ? null : 8)} >
              <FaArrowRotateLeft />Why Choose Us
              {
                menu === 8 ?
                  <MdKeyboardArrowUp className='absolute right-2' />
                  :
                  <MdOutlineKeyboardArrowDown className='absolute right-2' />

              }
            </button>
            {
              menu === 8 &&
              <ul className='py-1 bg-white'>
                <li className='flex gap-3 items-center p-2'><SiTarget /><Link to={'/whychooseus/addwhychooseus'}>Add Why Choose Us</Link></li>
                <li className='flex gap-3 items-center p-2'><SiTarget /><Link to={'/whychooseus/viewwhychooseus'}>View Why Choose Us</Link></li>
              </ul>
            }
          </li>
          <li className='p-2 relative'>
            <button className='flex gap-3 items-center cursor-pointer' onClick={() => setMenu(prev=>prev===9 ? null : 9)} >
              <PiNoteFill />Orders
              {
                menu === 9 ?
                  <MdKeyboardArrowUp className='absolute right-2' />
                  :
                  <MdOutlineKeyboardArrowDown className='absolute right-2' />

              }
            </button>
            {
              menu === 9 &&
              <ul className='py-1 bg-white'>
                <li className='flex gap-3 items-center p-2'><SiTarget /><Link to={'/orders/orders'}>Orders</Link></li>
              </ul>
            }
          </li>
          <li className='p-2 relative'>
            <button className='flex gap-3 items-center cursor-pointer' onClick={() => setMenu(prev=>prev===10 ? null : 10)} >
              <BsSliders />Sliders
              {
                menu === 10 ?
                  <MdKeyboardArrowUp className='absolute right-2' />
                  :
                  <MdOutlineKeyboardArrowDown className='absolute right-2' />

              }
            </button>
            {
              menu === 10 &&
              <ul className='py-1 bg-white'>
                <li className='flex gap-3 items-center p-2'><SiTarget /><Link to={'/sliders/addslider'}>Add Slider</Link></li>
                <li className='flex gap-3 items-center p-2'><SiTarget /><Link to={'/sliders/viewslider'}>View Slider</Link></li>
              </ul>
            }
          </li>
          <li className='p-2 relative'>
            <button className='flex gap-3 items-center cursor-pointer' onClick={() => setMenu(prev=>prev===11 ? null : 11)} >
              <FaLocationArrow />Country
              {
                menu === 11 ?
                  <MdKeyboardArrowUp className='absolute right-2' />
                  :
                  <MdOutlineKeyboardArrowDown className='absolute right-2' />

              }
            </button>
            {
              menu === 11 &&
              <ul className='py-1 bg-white'>
                <li className='flex gap-3 items-center p-2'><SiTarget /><Link to={'/country/addcountry'}>Add Country</Link></li>
                <li className='flex gap-3 items-center p-2'><SiTarget /><Link to={'/country/viewcountry'}>View Country</Link></li>
              </ul>
            }
          </li>
          <li className='p-2 relative'>
            <button className='flex gap-3 items-center cursor-pointer' onClick={() => setMenu(prev=>prev===12 ? null : 12)} >
              <FaUserEdit />Testimonial
              {
                menu === 12 ?
                  <MdKeyboardArrowUp className='absolute right-2' />
                  :
                  <MdOutlineKeyboardArrowDown className='absolute right-2' />

              }
            </button>
            {
              menu === 12 &&
              <ul className='py-1 bg-white'>
                <li className='flex gap-3 items-center p-2'><SiTarget /><Link to={'/testimonial/addtestimonial'}>Add Testimonial</Link></li>
                <li className='flex gap-3 items-center p-2'><SiTarget /><Link to={'/testimonial/viewtestimonial'}>View Testimonial</Link></li>
              </ul>
            }
          </li>
          <li className='p-2 relative'>
            <button className='flex gap-3 items-center cursor-pointer' onClick={() => setMenu(prev=>prev===13 ? null : 13)} >
              <TiMessages className='text-green-500' />Faqs
              {
                menu === 13 ?
                  <MdKeyboardArrowUp className='absolute right-2' />
                  :
                  <MdOutlineKeyboardArrowDown className='absolute right-2' />

              }
            </button>
            {
              menu === 13 &&
              <ul className='py-1 bg-white'>
                <li className='flex gap-3 items-center p-2'><SiTarget /><Link to={'/faqs/addfaqs'}>Add Faqs</Link></li>
                <li className='flex gap-3 items-center p-2'><SiTarget /><Link to={'/faqs/viewfaqs'}>View Faqs</Link></li>
              </ul>
            }
          </li>
          <li className='p-2 relative'>
            <button className='flex gap-3 items-center cursor-pointer' onClick={() => setMenu(prev=>prev===14 ? null : 14)} >
              <GrNotes />Terms & conditions
              {
                menu === 14 ?
                  <MdKeyboardArrowUp className='absolute right-2' />
                  :
                  <MdOutlineKeyboardArrowDown className='absolute right-2' />

              }
            </button>
            {
              menu === 14 &&
              <ul className='py-1 bg-white'>
                <li className='flex gap-3 items-center p-2'><SiTarget /><Link to={'/terms&conditions/terms&conditions'}>Terms & conditions</Link></li>
              </ul>
            }
          </li>
        </ul>
      </div>
    </>
  )
}
