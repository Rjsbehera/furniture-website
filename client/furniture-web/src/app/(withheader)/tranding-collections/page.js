import React from 'react'
import BreadCrumbs from '../components/common/BreadCrumbs'
import { FaRegHeart } from "react-icons/fa";
import Link from 'next/link';

export default function TrandingCollection() {
    let Products = [
        { id: 1, image: "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617829052195Caroline%20Study%20Tables__.jpg", name: "Nest Of Tables", description: "Caroline Study Table", price: "Rs. 2,500" },
        { id: 2, image: "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617828302132Godfrey%20Coffee%20Table%20Set__.jpg", name: "Coffee Table Sets", description: "Godfrey Coffee Table Set", price: " Rs. 2,200" },
        { id: 3, image: "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617829892944Evan%20Coffee%20Table__.jpg", name: "Coffee Tables", description: "Evan Coffe Table", price: " Rs. 2,300" },
        { id: 4, image: "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/16253179270591620747711033Hardwell%20Temple%20Prayer%20Unit__.jpg", name: "Prayer Units", description: "Hardwell Temple Prayer Unit", price: "  Rs. 9,400" },
        { id: 5, image: "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1608312103476Dorian%20Shoe%20Rack_.jpg", name: "Display Unit", description: "Dorian Shoe Rack", price: " Rs. 2,800" },
        { id: 6, image: "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1620666061907Gloria%20Shoe%20Racks_.jpg", name: "Shoe Racks", description: "Gloria Shoe Racks ", price: " Rs. 2,900" },
        { id: 7, image: "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1621171973378Isaac%20Chest%20of%20Drawer_.jpg", name: "Chest Of Drawers", description: "Isaac Chest of Drawer", price: "Rs. 25,000" }
    ]


    return (
        <>
            <section className='w-full'>
                <div className='w-[1140px] mx-auto px-3 py-10 border-b border-b-gray-200'>
                    <BreadCrumbs title="Tranding Collection" />
                </div>
                <div className='max-w-[1140px] mx-auto px-3 grid grid-cols-[25%_70%] gap-[5%]'>
                    <div className='py-10'>
                        <h2 className='text-[28px] font-playfair font-bold mb-10'>Categories</h2>
                        <h2 className='text-[28px] font-playfair font-bold mb-10'>Material</h2>
                        <h2 className='text-[28px] font-playfair font-bold mb-10'>Color</h2>
                        <h2 className='text-[28px] font-playfair font-bold mb-10'>Filter By Price</h2>
                    </div>
                    <div className='py-10'>
                        <header className='flex justify-end items-center gap-2 p-2 border border-gray-300 rounded-sm'>
                            <p>Sort By :</p>
                            <select className='border border-gray-300 p-2 mr-5 outline-none'>
                                <option>Sort By</option>
                                <option>Featured Products</option>
                                <option>New Arrives</option>
                                <option>On Sale</option>
                                <option>Best Selling</option>
                                <option>Sort By : low to high</option>
                                <option>Sort By : high to low</option>
                                <option>Product Name : A to Z</option>
                                <option>Product Name : Z to A</option>
                            </select>
                            <p>Showing 1–12 of 18 results</p>
                        </header>
                        <div className='grid grid-cols-3 justify-between gap-10 py-5'>
                            {
                                Products.map((obj, index) => {
                                    return (
                                        <ProductCart key={index} data={obj} />
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


function ProductCart({ data }) {
    let { id, image, name, description, price } = data
    return (
        <div className='shadow-xl mt-3'>
            <figure>
                <Link href={'/tranding-collections/product-details'}><img className='w-full h-full' src={image} alt="" /></Link>
            </figure>
            <p className='text-center text-[13px] font-rubik py-3'>{name}</p>
            <h4 className='text-center text-[15px] font-bold font-playfair py-2 border-b border-b-gray-200'>{description} </h4>
            <p className='text-center text-[#C89878] text-[18px] font-rubik py-3'>{price}</p>
            <div className='flex justify-center items-center gap-2 pb-7'>
                <button className='text-xl bg-gray-100 px-2 sm:px-5 md:px-2 lg:px-5 py-2 hover:bg-[#C09578]'><FaRegHeart /></button>
                <button className='text-[12px] font-rubik bg-gray-100 px-2 sm:px-5 md:px-2 lg:px-5 py-2 hover:bg-[#C09578]'>Add To Cart</button>
            </div>
        </div>
    )
}