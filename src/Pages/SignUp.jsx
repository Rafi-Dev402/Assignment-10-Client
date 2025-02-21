import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { auth } from '../FirebaseConfig';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
import GoogleButton from '../Components/GoogleButton';
import { RiEyeCloseFill } from "react-icons/ri";
import { HiEye } from "react-icons/hi";
import { Helmet } from 'react-helmet-async';


const SignUp = () => {
    const { userSignUp } = useContext(AuthContext)
    const navigate = useNavigate()
    const [error, setError] = useState("");
    const [showPass,setShowPass] = useState(false)

    const handleUserSignUp = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        const userProfile = {
            displayName: name,
            photoURL: photo
        }

        // Reset Stats
        setError("")

        if (password.length < 6) {
            setError("Password must be at least 6 characters long.")
            return
        }
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).+$/;
        if (!passwordRegex.test(password)) {
            setError("Password must include at least one lowercase(a-z) letter one uppercase(A-Z) letter.")
            return
        }

        /// Authentication------------>
        userSignUp(email, password)
            .then((result) => {
                console.log(result.user)

                //Update Profile
                updateProfile(auth.currentUser, userProfile)
                    .then(() => {
                        /// Update Profile
                    })
                    .catch((error) => {

                        toast.error(error.message)
                    })
                //Success message
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your account has been created",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/')
                e.target.reset()
            })
            .catch((error) => {
                // console.log(error.message)
                toast.error(error.message)
            })
    }



    return (
        <div className="container mx-auto  montserrat-font">
            <Helmet>
                <title>EquiSports | SignUp</title>
            </Helmet>
            <GoogleButton />

            <div className="card bg-[#f8f8f8] w-full max-w-sm lg:max-w-xl shrink-0 shadow-lg border rounded-lg mx-auto mb-9">
                <h1 className="text-4xl font-bold text-center mt-5 text-[#333333]">SignUp!</h1>
                <form onSubmit={handleUserSignUp} className="card-body ">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg text-[#333333]">Name</span>
                        </label>
                        <input name='name' type="text" placeholder="Enter Your Name" className="input input-bordered bg-white" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg text-[#333333]">Email</span>
                        </label>
                        <input name='email' type="email" placeholder="Enter Your Email" className="input input-bordered bg-white" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg text-[#333333]">Photo URL</span>
                        </label>
                        <input name='photo' type="text" placeholder="Enter Your Photo URL" className="input input-bordered bg-white" required />
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text text-lg text-[#333333]">Password</span>
                        </label>
                        <input name='password' type={(showPass) ? 'text' : 'password'} placeholder="Enter Your Password" className="input input-bordered bg-white" required />
                        <button onClick={()=>setShowPass(!showPass)} type='button' className='btn-xs absolute right-2 top-14  bg-transparent'>
                            {
                                (showPass) ? <HiEye className='text-xl text-black' /> : <RiEyeCloseFill className='text-xl text-black' />
                            }
                        </button>
                    </div>
                    {/* For Error Message */}
                    {
                        (error) && <label className="label  mx-auto">

                            <p className='text-red-600 text-lg font-medium'>{error}</p>

                        </label>
                    }
                    <div className="form-control mt-6">
                        <button className="btn  bg-[#1e336e] hover:bg-[#152252] text-lg text-white">Login</button>
                    </div>
                </form>
                <p className="text-center mb-8 text-black font-medium text-lg ">Already have an account? <Link className="text-blue-500 font-semibold" to={'/login'}>Login</Link></p>
            </div>

        </div>
    );
};

export default SignUp;