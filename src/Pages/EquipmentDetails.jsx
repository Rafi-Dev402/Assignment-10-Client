import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { GoStarFill } from "react-icons/go";
import { Helmet } from 'react-helmet-async';

const EquipmentDetails = () => {
    const { _id, image, itemName, category, price, rating, time, customization, stock, details, userEmail, userName } = useLoaderData()
    return (
        <div className='container mx-auto montserrat-font'>
            <Helmet>
                <title>Details</title>
            </Helmet>
            <div className='mb-9'>
                <h1 className='text-3xl text-blue-900 font-semibold text-center'>Equipment Details</h1>
            </div>
            <section className='flex flex-col md:flex-row lg:flex-row items-center gap-10 border-2 bg-gray-100 shadow-lg rounded-lg p-5 w-auto lg:w-4/6 mx-auto'>
                <div className='border p-3  rounded'>
                    <img className='w-64 border rounded-md backdrop-blur-lg' src={image} alt="product Image" />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-green-700 mb-5 text-center lg:text-start">{itemName}</h3>
                    <p className="text-gray-600 text-xl font-medium mb-2 text-center lg:text-start"> <span className='text-black'>Price : </span> {price} Tk.</p>
                    <p className="text-gray-600 text-lg font-medium mb-1 text-center lg:text-start"><span className='text-black'>Category : </span> {category}</p>
                    <p className="text-gray-600 text-lg font-medium mb-1 text-center lg:text-start"> <span className='text-black'>Delevery : </span>{time}</p>
                    <p className='flex items-center justify-center lg:justify-start gap-1 text-gray-600 text-base font-medium mb-1 text-center lg:text-start'> <span className='text-black'>Rating : </span> <GoStarFill className='text-xl text-yellow-300 text-center lg:text-start' /> <span className="badge border-green-400 text-black">{rating}</span> </p>
                    <p className="text-gray-600 text-lg font-medium mb-1 text-center lg:text-start"> <span className='text-black'>Customization : </span>{customization}</p>
                    <p className="text-gray-600 text-lg font-medium mb-1 text-center lg:text-start"> <span className='text-black'>Total Stock : </span>{stock} Pcs.</p>
                    <p className='text-black text-xl font-normal text-center lg:text-start'>{details}</p>

                    <div className='mt-4'>
                        <p className="text-gray-600 text-lg font-medium mb-1 text-center lg:text-start"> <span className='text-black'>Seller Name : </span>{userName}</p>
                        <p className="text-gray-600 text-lg font-medium mb-1 text-center lg:text-start"> <span className='text-black'>Seller Email : </span>{userEmail}</p>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default EquipmentDetails;