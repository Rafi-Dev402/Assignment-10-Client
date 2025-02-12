import Slider from "./Slider";


const Banner = () => {
    return (
        <div className="mb-4">
            <h1 className="text-center font-bold text-[#FF5733] text-3xl lg:text-6xl mb-5 px-1.5 lg:w-[1300px] mx-auto bebas-neue-font bebas-neue-font">Get the Best Sports Gear to Train Hard, Play Smart, and Win Big!</h1>
            <p className="text-center lg:w-[1000px] mx-auto font-normal montserrat-font roboto-font px-2 text-lg mb-6 lg:mb-10">Discover high-quality sports gear for every athlete. Whether you’re training or competing, we provide the best equipment to enhance performance, boost confidence, and help you win every game!</p>
            <div className="flex justify-center items-center">
                <button className="btn btn-lg rounded-full px-5 lg:px-8 font-semibold text-xl text-white bg-[#FF9933]  hover:text-black">Shop Now</button>
            </div>
            <section className="container mx-auto mt-6 lg:mt-14 ">
                <Slider/>
            </section>
        </div>
    );
};

export default Banner;