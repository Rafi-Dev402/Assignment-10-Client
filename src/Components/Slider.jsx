import { Carousel } from "flowbite-react";


import slide1 from '../assets/slider/tamplate.jpg'
import slide2 from '../assets/slider/sports-tools.jpg'
import slide3 from '../assets/slider/pexels-steshkawillems-1661950.jpg'
import slide4 from '../assets/slider/pexels-pixabay-257970.jpg'

const Slider = () => {
    return (
        <div className="">
            <div className="h-56 sm:h-64 xl:h-[600px] 2xl:h-[600px] lg:w-[1300px] mx-auto p-[5px] bg-[#27AE60] rounded-md">
                <Carousel pauseOnHover>
                    <img className=" object-center" src={slide1} alt="..." />
                    <img src={slide2} alt="..." />
                    <img src={slide3} alt="..." />
                    <img src={slide4} alt="..." />

                </Carousel>
            </div>
        </div>
    );
};

export default Slider;