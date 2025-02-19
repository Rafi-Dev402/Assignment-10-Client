import { useEffect, useState } from "react";
import BannerCard from "./BannerCard";


const BannerEquepment = () => {

    useEffect(() => {
        fetch('http://localhost:5000/equipments')
            .then(res => res.json())
            .then(result => setEqdata(result.slice(0,6)))

    }, [])
    const [eqData,setEqdata] = useState([])
   
    return (
        <div className="mt-14 montserrat-font  container mx-auto ">
            <h2 className="text-4xl font-bold   ">Boost Your Performance with the Best Equipment</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mt-20">
                {
                    eqData.map(equipmemt=><BannerCard key={equipmemt._id} equipmemt={equipmemt} />)
                }
            </div>

        </div>
    );
};

export default BannerEquepment;