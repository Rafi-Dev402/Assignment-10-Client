import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { auth } from '../FirebaseConfig';

const SignUp = () => {
    const {userSignUp} = useContext(AuthContext) 
    
    const handleUserSignUp = (e)=>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        const userProfile = {
            displayName: name,
            photoURL : photo

        }

        /// Authentication------------>
        userSignUp(email,password)
        .then((result)=>{
            console.log(result.user)
            
            //Update Profile
            updateProfile(auth.currentUser,userProfile)
            .then(()=>{
                // alert('Profile update and signup')
            })
            .catch((error)=>{
                console.log(error)
                alert('AN error Found')
            })
            alert('Profile update and signup')
        })
        .catch((error)=>{
            console.log(error.message)
        })
    }



    return (
        <div className="container mx-auto  montserrat-font">

            <div className="card bg-[#f8f8f8] w-full max-w-sm lg:max-w-xl shrink-0 shadow-lg border-2 rounded-lg mx-auto">
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
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg text-[#333333]">Password</span>
                        </label>
                        <input name='password' type="password" placeholder="Enter Your Password" className="input input-bordered bg-white" required />
                        
                    </div>
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