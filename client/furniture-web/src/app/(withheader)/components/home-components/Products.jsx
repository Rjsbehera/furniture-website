import React from 'react'
import { FaRegHeart } from "react-icons/fa";

export default function Products() {
    let Products = [
        { id: 1, image: "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617829052195Caroline%20Study%20Tables__.jpg", name: "Nest Of Tables", description: "Caroline Study Table", price: "Rs. 2,500" },
        { id: 2, image: "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617829892944Evan%20Coffee%20Table__.jpg", name: "Coffee Tables", description: "Evan Coffe Table", price: " Rs. 2,300" },
        { id: 3, image: "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1620666061907Gloria%20Shoe%20Racks_.jpg", name: "Shoe Racks", description: "Gloria Shoe Racks", price: " Rs. 2,900" },
        { id: 4, image: "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1620077669499Erica%20Bookshelfs_brown.jpg", name: "Bookshelves", description: "Erica Bookselfs", price: " Rs. 30,000" },
        { id: 5, image: "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1615277326496Sapien%20Sofa%20Cum%20Bed__.jpg", name: "Wooden Sofa Cum Bed", description: "Sapain Sofa Cum Bed", price: "Rs. 54,000" },
        { id: 6, image: "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1615225341228Ganthur%20Sheesham%20Wood%20Sofa%20Set___.jpg", name: "2 Seater Sofa", description: "Gunthur Sheesham Wood Sofa Set", price: " Rs. 7,600" },
        { id: 7, image: "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617816851291Calina%20Swing%20Jhula__.jpg", name: "Wooden Jhula", description: "Calina Swing Jhula", price: " Rs. 58,000" }
    ]

    return (
        <>
            <section className='w-full p-[50px] mt-7'>
                <div className='max-w-[1100px] mx-auto'>
                    <div className=''>
                        <ul className='flex flex-col md:flex-row justify-center items-center gap-2 md:gap-0'>
                            <li className='text-[18px] sm:text-xl leading-12 font-[700px] font-playfair px-[30px] border-2 border-gray-200 hover:text-[#C09578] hover:border-[#C09578]'>Featured</li>
                            <li className='text-[18px] sm:text-xl leading-12 font-[700px] font-playfair px-[20px] sm:px-[30px] border-2 border-gray-200 rounded-[2px] hover:text-[#C09578] hover:border-[#C09578]'>New Arrivals</li>
                            <li className='text-[18px] sm:text-xl leading-12 font-[700px] font-playfair px-[36px] sm:px-[30px] border-2 border-gray-200 rounded-[2px] hover:text-[#C09578] hover:border-[#C09578]'>Onsale</li>
                        </ul>
                    </div>
                    <div className='sm:w-[500px] md:w-[720px] lg:w-[960px] xl:w-[1140px] mx-auto grid sm:grid-cols-1 md:grid-cols-4 gap-5 justify-between items-center px-3 mt-7'>
                        {
                            Products.map((obj, index) => {
                                return (
                                    <ProductCart key={index} data={obj} />
                                )
                            })
                        }

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
                <img className='w-full h-full' src={image} alt="" />
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