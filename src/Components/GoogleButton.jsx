import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const GoogleButton = () => {
    const { googleLogin } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleGoogleBtn = () => {
        googleLogin()
            .then((result) => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Sign in Successful",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/')
            })
            .catch((error) => {
                toast.error(error.message)
            })
    }
    return (
        <div>

            <div className='flex justify-center items-center'>
                <button onClick={handleGoogleBtn} className='btn btn-outline text-lg font-medium px-8 rounded-full bg-slate-50 border-2 border-[#4285F4] text-black mb-3'><FcGoogle className='text-2xl' />Sign in with google</button>
            </div>
            <p className='text-center mt-2 mb-3 text-black text-lg font-medium'>-------- Or --------</p>
        </div>
    );
};

export default GoogleButton;