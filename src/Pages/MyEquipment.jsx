import React, { useState } from 'react';
import { Link, NavLink, useLoaderData } from 'react-router-dom';
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoPencil } from "react-icons/io5";
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const MyEquipment = () => {
    const myLodedData = useLoaderData();
    const [userEq, setUserEq] = useState(myLodedData)

    const handleDelete = (id) => {
        console.log(id)

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                // 
                fetch(`https://assignment-10-server-zeta-beryl.vercel.app/equipmentDel/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(result => {
                        if (result?.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                        else {
                            Swal.fire({
                                icon: "error",
                                title: "Oops...",
                                text: "Something went wrong!",
                                footer: '<a href="#">Why do I have this issue?</a>'
                            });
                        }
                    })

                const remaining = userEq.filter(equipment => equipment._id !== id)
                setUserEq(remaining)
            }
        });
    }



    return (
        <div className='container mx-auto montserrat-font'>
            <Helmet>
                <title>My Equipments</title>
            </Helmet>
            <section className='w-11/12 mx-auto '>
                <h1 className='text-blue-900 font-semibold text-3xl mb-9'>Your Equipments ({userEq.length})</h1>
                <div>
                    {
                        (userEq.length > 0) ?
                            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5'>
                                {
                                    userEq.map(data =>
                                        <div key={data._id} className="flex flex-col md:flex-row lg:flex-row card card-side bg-gray-100 shadow-md border rounded-xl lg:h-60 p-3 ">
                                            <figure className='rounded-xl border-2 bg-white'>
                                                <img
                                                    className='object-fill overflow-hidden w-52 mx-auto'
                                                    src={data?.image}
                                                    alt="Movie" />
                                            </figure>
                                            <div className="card-body">
                                                <h2 className="card-title text-gray-900 ">{data?.itemName}</h2>
                                                <p className='text-gray-900 text-lg font-medium'>Category : {data?.category}</p>
                                                <p className='text-gray-900 text-lg'>Email : {data?.userEmail}</p>
                                                <div className="card-actions justify-end mt-2">
                                                    <Link to={`/updateEquipment/${data?._id}`} className="btn tooltip bg-blue-500 hover:bg-blue-600 text-white flex justify-center items-center" data-tip="Update"><IoPencil className='text-xl font-semibold' /></Link>

                                                    <button onClick={() => handleDelete(data?._id)} className="btn tooltip bg-red-500 hover:bg-red-600 text-white" data-tip="Delete"><RiDeleteBin6Line className='text-xl font-semibold' /></button>
                                                </div>
                                            </div>
                                        </div>)
                                }
                            </div>
                            :
                            <div className='text-start'>
                                <h3 className='text-2xl text-[#FF4500] font-semibold'>You haven't added any equipment. Please! add equipment.</h3>
                            </div>
                    }




                </div>
            </section>
        </div>
    );
};

export default MyEquipment;