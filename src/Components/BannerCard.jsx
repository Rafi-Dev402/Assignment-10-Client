import React from 'react';
import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const BannerCard = ({ equipmemt }) => {
    const handleVirwDetails = (id)=>{
        console.log(id)
    }
    return (
        <div>
            <div className="card card-side border lg:h-56 bg-[#F8F9FA] rounded-md shadow-xl montserrat-font">
                <figure>
                    <img
                        className='w-44 md:w-60 lg:w-60 h-44 md:h-60 lg:h-60 object-fill overflow-hidden rounded '
                        src={equipmemt?.image}
                        alt="Movie" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-[#333333]">{equipmemt?.itemName}</h2>
                    <p className='text-[#666666] text-lg font-normal'>{equipmemt?.details}</p>
                    <p className='text-lg font-semibold  text-[#005F28]'>Category : <span>{equipmemt.category}</span></p>
                    <div className="card-actions justify-end">
                        <Link to={`/equipmentDetails/${equipmemt._id}`}  className="btn bg-[#E67E22] text-white text-base">View Details<FaArrowRight className='text-base' /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerCard;