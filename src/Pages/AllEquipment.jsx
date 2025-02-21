import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa6";
import { BsSortUp } from "react-icons/bs";
import { Helmet } from 'react-helmet-async';

const AllEquipment = () => {
    const loddedData = useLoaderData();
    const [eqData,setEqdata] = useState(loddedData)

    const handleSortBtn = ()=>{
        const sortedData = [...eqData].sort((a,b)=>a.price - b.price)
        setEqdata(sortedData)
    }

    return (
        <div className='container lg:w-9/12 mx-auto montserrat-font'>
            <Helmet>
                <title>EquiSports | All Equipments</title>
            </Helmet>
            <section className=' mx-auto'>
                <div className='flex justify-between items-center mb-9'>
                    <h1 className=' text-2xl lg:text-3xl text-blue-900 font-semibold text-start '>All Equipments ({eqData.length})</h1>
                    <button onClick={handleSortBtn} className='btn rounded-lg bg-[#007bff] hover:bg-blue-600  text-white text-base lg:text-lg'>Sort by price<BsSortUp className='text-xl font-bold' /></button>
                </div>


                <div className="overflow-x-auto bg-[#F8F9FA] rounded-lg">
                    <table className="table">
                        {/* Table head ------------------> */}
                        <thead>
                            <tr>
                                <th className='text-lg text-gray-800 text-center'>Number</th>
                                <th className='text-lg text-gray-800'>Equipment Name</th>
                                <th className='text-lg text-gray-800'>Price</th>
                                <th className='text-lg text-gray-800'>Category</th>
                                <th className='text-lg text-gray-800'>Seller Email</th>
                                <th></th>
                            </tr>
                        </thead>
                        {/* Table BODY-----------------> */}
                        <tbody>
                            {/* row 1 */}
                            {
                                eqData.map((equipment, index) =>
                                    <tr className='' key={index}>
                                        <th className='font-bold text-base text-center'>{index + 1}</th>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle h-12 w-12">
                                                        <img
                                                            src={equipment.image}
                                                            alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold text-base text-gray-700">{equipment.itemName}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className='font-bold text-base text-gray-700'>{equipment.price}  Tk.</td>
                                        <td className='font-bold text-base text-gray-700'>{equipment.category}</td>
                                        <td className='font-bold text-base text-gray-700'>{equipment.userEmail}</td>
                                        <th>
                                            <Link to={`/equipmentDetails/${equipment._id}`} className="btn bg-[#2CA02C] btn-sm hover:bg-gray-400 text-white">Details <FaArrowRight /></Link>
                                        </th>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>

            </section>

        </div>
    );
};

export default AllEquipment;