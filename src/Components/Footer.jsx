import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Footer = () => {
    return (
        <div className="bg-[#333333] montserrat-font mt-10 font">
            <div className="text-white">
                <div className='pt-7 mb-8 '>
                    <h2 className='text-center text-white text-4xl font-bold mb-3'>EquiSports</h2>
                    <p className='text-slate-50 text-lg font-medium text-center mb-5'>Gear up for victory with top-quality sports equipment—your game, your passion, our commitment!</p>
                    <div className="flex justify-center items-center gap-4">
                        <a href="https://www.facebook.com/" target="_blank"><FaFacebook className="text-3xl" /></a>
                        <a href="https://x.com/?lang=en" target="_blank"><FaTwitter className="text-3xl" /></a>
                        <a href="https://www.instagram.com/" target="_blank"><FaInstagram className="text-3xl" /></a>
                    </div>
                </div>
                <hr className='border lg:w-9/12 mx-auto' />

                <div className='flex flex-col md:flex-row lg:flex-row justify-center gap-x-40 gap-y-5 md:gap-y-0 lg:gap-y-0 mt-9 mb-6'>
                    <div>
                        <h3 className='mb-4 text-white  text-center font-bold text-lg'>Services</h3>
                        <p className='text-gray-50 mb-3 text-center  text-base font-semibold'>Product Support</p>
                        <p className='text-gray-50 mb-3 text-center  text-base font-semibold'>Order Tracking</p>
                        <p className='text-gray-50 mb-3 text-center  text-base font-semibold'>Shipping & Delivery Returns</p>
                    </div>
                    <div>
                        <h3 className='mb-4 text-white text-center font-bold text-lg'>Company</h3>
                        <p className='text-gray-50 mb-3 text-center text-base font-semibold'>About Us</p>
                        <p className='text-gray-50 mb-3 text-center text-base font-semibold'>Careers</p>
                        <p className='text-gray-50 mb-3 text-center text-base font-semibold'>Contact</p>
                    </div>
                    <div>
                        <h3 className=' text-white text-center font-bold text-lg'>Legal</h3>
                        <p className='text-gray-50 mb-3 text-center text-base font-semibold'>Terms of Service</p>
                        <p className='text-gray-50 mb-3 text-center text-base font-semibold'>Privacy Policy</p>
                        <p className='text-gray-50 mb-3 text-center text-base font-semibold'>Cookie Policy</p>
                    </div>
                </div>
                <h3 className="text-center pb-7">© 2025 EquiSports. All Rights Reserved.</h3>
            </div>
        </div>
    );
};

export default Footer;