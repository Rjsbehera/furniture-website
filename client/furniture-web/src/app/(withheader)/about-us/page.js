import React from 'react'
import { FaStar } from "react-icons/fa";
import { IoIosHome } from "react-icons/io";
import { ImUsers } from "react-icons/im";
import BreadCrumbs from '../components/common/BreadCrumbs';
import Testimonial from '../components/home-components/Testimonial';

export default function AboutUs() {
  return (
    <>
      <section className='w-full'>
        <div className='w-[1140px] mx-auto px-3 border-b border-b-gray-200'>         
          <BreadCrumbs title="About Us" />
        </div>
        <div className='w-[1116px] mx-auto mt-10'>
          <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/home-page/983cc349-1718-4290-b7cd-c8eb20459536-1671213069.jpg" alt="" />
        </div>
        <div className='w-[1116px] mx-auto'>
          <h3 className='text-center text-2xl leading-6 font-playfair font-[700px] py-6 capitalize'>Welcome to Monsta!</h3>
          <p className='text-[#5a5a5a] text-[14px] leading-[24px] font-rubik mb-4'>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam, est usus legentis in iis qui facit eorum claritatem.</p>
          <p className='text-[14px] leading-[24px] font-rubik text-[#E0B89D]'>“There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.”</p>
        </div>
        <div className='w-[1116px] mx-auto mt-10'>
          <h2 className='text-center text-2xl leading-[24px] font-playfair font-[700px] capitalize'>Why chose us?</h2>
          <div className='w-[1116px] mx-auto grid grid-cols-3 justify-between py-2 gap-5'>
            <div className='flex flex-col items-center'>
              <span className='text-5xl text-center text-orange-200'><IoIosHome /></span>
              <h6 className='text-center font-bold font-playfair py-3'>100% Money Back Guarantee</h6>
              <p>Erat metus sodales eget dolor consectetuer, porta ut purus at et alias, nulla ornare velit amet enim</p>
            </div>
            <div className='flex flex-col items-center'>
              <span className='text-5xl text-orange-200'><ImUsers /></span>
              <h6 className='text-center font-bold font-playfair py-3'>Online Support 24/7</h6>
              <p>Erat metus sodales eget dolor consectetuer, porta ut purus at et alias, nulla ornare velit amet enim</p>
            </div>
            <figure>
              <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/why_choose_us/d86a55b7-bbd1-4565-86ad-b3463e728fdc-1760712425.jpg" alt="" />
              <h6 className='text-center4font-bold py-2 mb-2'>Creative-Design</h6>
              <p>Erat metus sodales eget dolor consectetuer, porta ut purus at et alias, nulla ornare velit amet enim God has created everything like air,water,tree and metal</p>
            </figure>
          </div>
        </div>
        <div className='w-[1116px] mx-auto grid grid-cols-3 gap-6 justify-between mt-10'>
          <div className='mb-10'>
            <figure>
              <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/home-page/dbfbc372-1550-40ef-a372-19566e1776b2-1671213170.jpg" alt="" />
            </figure>
            <h6 className='text-center text-[14px] font-rubik py-3'>What Do We Do?</h6>
            <p className='text-[14px] text-center px-2'>Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.</p>
          </div>
          <div className='mb-10'>
            <figure>
              <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/home-page/0eb1dffc-23c4-4a66-bb02-f5028e3658d3-1671213170.jpg" alt="" />
            </figure>
            <h6 className='text-center text-[14px] font-rubik py-3'>Our Mission</h6>
            <p className='text-[14px] text-center px-2'>Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.</p>
          </div>
          <div className='mb-10'>
            <figure>
              <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/home-page/028a3c98-0fb9-4fc0-8e7c-0076d254de41-1671213170.jpg" alt="" />
            </figure>
            <h6 className='text-center text-[14px] font-rubik py-3'>History Of Us</h6>
            <p className='text-[14px] text-center px-2'>Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.</p>
          </div>
        </div>
      </section>

      <Testimonial/>
    </>
  )
}
