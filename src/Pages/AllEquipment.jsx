import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa6";

const AllEquipment = () => {
    const loddedData = useLoaderData()
    console.log(loddedData)

    return (
        <div className='container lg:w-9/12 mx-auto montserrat-font'>
            <section className=' mx-auto'>
                <h1 className='text-3xl text-blue-900 font-semibold text-start mb-9'>All Equipments ({loddedData.length})</h1>

                <div className="overflow-x-auto">
                    <table className="table">
                        {/* Table head ------------------> */}
                        <thead>
                            <tr>
                                <th className='text-lg text-gray-800'>Number</th>
                                <th className='text-lg text-gray-800'>Equipment Name</th>
                                <th className='text-lg text-gray-800'>Price</th>
                                <th className='text-lg text-gray-800'>Category</th>
                                <th></th>
                            </tr>
                        </thead>
                        {/* Table BODY-----------------> */}
                        <tbody>
                            {/* row 1 */}
                            {
                                loddedData.map((equipment,index) =>
                                    <tr className='' key={index}>
                                        <th className='font-bold text-base'>{index + 1}</th>
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
                                        <td className='font-bold text-base text-gray-700'>{equipment.price}</td>
                                        <td className='font-bold text-base text-gray-700'>{equipment.category}</td>
                                        <th>
                                            <Link to={`/equipmentDetails/${equipment._id}`} className="btn bg-[#2CA02C] btn-sm hover:bg-gray-400 text-white">Details <FaArrowRight /></Link>
                                        </th>
                                    </tr>
                                )
                            }

                            {/* <tr>
                                <th className='font-bold text-base'>1</th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold text-base text-gray-700">Hart Hagerty</div>
                                        </div>
                                    </div>
                                </td>
                                <td className='font-bold text-base text-gray-700'>Zemlak, Daniel and Leannon</td>
                                <td className='font-bold text-base text-gray-700'>Purple</td>
                                <th>
                                    <Link className="btn bg-[#FF9933] btn-sm hover:bg-gray-400 text-white">Details</Link>
                                </th>
                            </tr> */}
                        </tbody>
                    </table>
                </div>

            </section>

        </div>
    );
};

export default AllEquipment;