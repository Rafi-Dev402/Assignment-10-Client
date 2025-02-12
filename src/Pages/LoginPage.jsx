// 484px

import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import GoogleButton from "../Components/GoogleButton";

const LoginPage = () => {
    const { userSignIn } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleUserSignIn = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        /// Authentication--------->
        userSignIn(email, password)
            .then((result) => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Login Successful",
                    showConfirmButton: false,
                    timer: 1500
                });
                e.target.reset()
                navigate("/")
            })
            .catch((error) => {
                toast.error(error.message)
            })


    }
    return (
        <div className="container mx-auto  montserrat-font">
            <GoogleButton/>
            <div className="card bg-[#f8f8f8] w-full max-w-sm lg:max-w-lg shrink-0 shadow-lg border rounded-lg mx-auto">
                <h1 className="text-4xl font-bold text-center mt-5 text-[#333333]">Login now!</h1>
                <form onSubmit={handleUserSignIn} className="card-body ">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg text-[#333333]">Email</span>
                        </label>
                        <input name="email" type="email" placeholder="Enter Your Email" className="input input-bordered bg-white" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg text-[#333333]">Password</span>
                        </label>
                        <input name="password" type="password" placeholder="Enter Your Password" className="input input-bordered bg-white" required />
                        <label className="label">
                            <a href="#" className="label-text-alt text-base font-semibold text-red-600 link link-hover ">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn  bg-[#1e336e] hover:bg-[#152252] text-lg text-white">Login</button>
                    </div>
                </form>
                <p className="text-center mb-8 text-black font-medium text-lg ">Don’t have an account? <Link className="text-blue-500 font-semibold" to={'/signUp'}>Create an Account</Link></p>
            </div>
        </div>
    );
};

export default LoginPage;