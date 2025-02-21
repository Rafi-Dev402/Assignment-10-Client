import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../FirebaseConfig";

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user,setUser] = useState(null);
    const [loding,setLoding] = useState(true);

    // For SignUP User---------->
    const userSignUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // For SignIn user--------->
    const userSignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // For GoogleSignIn
    const googleProvider = new GoogleAuthProvider()
    const googleLogin = ()=>{
        return signInWithPopup(auth,googleProvider)
    }


    // An Observer foe user signin Or sign Out---------------------------------->
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setLoding(false)
                setUser(currentUser)
                // console.log(currentUser)
            }
            else {
                
                setLoding(false)
                setUser(null)
            }
        })

        return () => unsubscribe();

    }, [])

    const userData = {
        userSignUp,
        userSignIn,
        googleLogin,
        user,
        loding,
    }
    return (
        <AuthContext.Provider value={userData}>
            {
                children
            }
        </AuthContext.Provider >
    );
};

export default AuthProvider;