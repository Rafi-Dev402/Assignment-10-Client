import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const AddEquipment = () => {
    const { user } = useContext(AuthContext);
    const handleAddEquepment = (e) => {
        e.preventDefault()
       const form = e.target;

       const image = form.image.value;
       const itemName = form.itemName.value;
       const category = form.category.value;
       const price = form.price.value;
       const rating = form.rating.value;
       const stock = form.stock.value;
       const time = form.time.value;
       const customization = form.customization.value;
       const userName = form.userName.value;
       const userEmail = form.userEmail.value;
       const details = form.details.value;
    //    console.log(image,itemName,category,price,rating,stock,time,customization,userName,userEmail,details)
       const equepmentData = {image,itemName,category,price,rating,stock,time,customization,userName,userEmail,details}
    //    console.log(equepmentData)

       fetch('http://localhost:5000/equipments',{
        method:'POST',
        headers:{
            'Content-type' : 'application/json',
        },
        body: JSON.stringify(equepmentData)

       })
       .then(res=>res.json())
       .then(result=>{
        console.log(result)
       })
    }
    return (
        <div className='montserrat-font'>
            <div className="card bg-[#F8F9FA] w-full max-w-sm md:max-w-lg lg:max-w-4xl shrink-0 shadow-md bordre-2 rounded-lg mx-auto px-0 md:px-10 lg:px-6 lg:py-2">
                <div className='mt-5 mb-3'>
                    <h1 className="text-4xl font-bold text-center text-[#4F46E5]">Add Equipment</h1>
                    <p className='text-center w-auto px-1 md:px-3 lg:px-0 lg:w-[600px] mx-auto mt-3 text-[#64748B] text-base font-medium'>Add new sports equipment with custom options like grip, logo, or size. Ensure quality gear for athletes, teams, and fitness enthusiasts!</p>
                </div>

                {/* INPUT Form----------------------->>>>>>>> */}
                <form onSubmit={handleAddEquepment} className="card-body">
                    {/* main Div 1 */}
                    <div className='flex flex-col lg:flex-row justify-center lg:items-center gap-4'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-lg"> Image URL</span>
                            </label>
                            <input name='image' type="text" placeholder="Enter Image URL" className="text-lg input input-bordered w-full bg-[#E5E7EB] text-[#333333]" required />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-lg">Item Name</span>
                            </label>
                            <input name='itemName' type="text" placeholder="Enter Item Name" className=" text-lg input input-bordered w-full bg-[#E5E7EB] text-[#333333]" required />
                        </div>
                    </div>
                    {/* main Div */}
                    <div className='flex flex-col lg:flex-row justify-center lg:items-center gap-4'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-lg">Category Name</span>
                            </label>
                            <input name='category' type="text" placeholder="Enter Category Name" className="text-lg input input-bordered w-full bg-[#E5E7EB] text-[#333333]" required />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-lg">Price</span>
                            </label>
                            <input name='price' type="text" placeholder="Enter Equipment Price" className="text-lg input input-bordered w-full bg-[#E5E7EB] text-[#333333]" required />
                        </div>
                    </div>
                    {/* main Div */}
                    <div className='flex flex-col lg:flex-row justify-center lg:items-center gap-4'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-lg">Rating</span>
                            </label>
                            <input name='rating' type="text" placeholder="Enter Rating (Out of 5)" className="text-lg input input-bordered w-full bg-[#E5E7EB] text-[#333333]" required />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-lg">Equipment Stock</span>
                            </label>
                            <input name='stock' type="text" placeholder="Equipment's Total Stock" className="text-lg input input-bordered w-full bg-[#E5E7EB] text-[#333333]" required />
                        </div>
                    </div>
                    {/* main Div */}
                    <div className='flex flex-col lg:flex-row justify-center lg:items-center gap-4'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-lg">Processing Time</span>
                            </label>
                            <input name='time' type="text" placeholder="Processing Time (delivery time)" className="text-lg input input-bordered w-full bg-[#E5E7EB] text-[#333333]" required />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-lg">Customization</span>
                            </label>
                            <input name='customization' type="text" placeholder="Enter custom modifications (e.g., extra grip, custom logo, personalized text)" className="text-lg input input-bordered w-full bg-[#E5E7EB] text-[#333333]" required />
                        </div>
                    </div>
                    {/* main Div */}
                    <div className='flex flex-col lg:flex-row justify-center lg:items-center gap-4'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-lg">User Name</span>
                            </label>
                            <input name='userName' type="text" placeholder="User Name" readOnly defaultValue={user?.displayName} className="text-lg input input-bordered w-full bg-[#E5E7EB] text-[#333333]" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-lg">User Email</span>
                            </label>
                            <input name='userEmail' type="text" placeholder="User Email" readOnly defaultValue={user?.email} className="text-lg input input-bordered w-full bg-[#E5E7EB] text-[#333333]" required />
                        </div>
                    </div>

                    {/* Details Section */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-lg">Description</span>
                        </label>
                        <textarea name='details' className="text-lg textarea textarea-bordered w-full bg-[#E5E7EB] text-[#333333] placeholder:text-lg" cols="20" placeholder=" Equipment Description"></textarea>
                    </div>
                    {/* <div>
                        <textarea className="textarea textarea-bordered w-full bg-[#E5E7EB] text-[#333333]" cols="10" placeholder="Bio"></textarea>
                    </div> */}
                    <div className="form-control mt-6">
                        <button className="btn bg-[#4F46E5] hover:bg-[#3730A3] text-white text-lg">Add Equipment</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddEquipment;