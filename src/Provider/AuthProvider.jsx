import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../FirebaseConfig";

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user,setUser] = useState(null)

    // For SignUP User---------->
    const userSignUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // For SignIn user--------->
    const userSignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }



    // An Observer foe user signin Or sign Out---------------------------------->
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser)
                
                console.log(currentUser)
            }
            else {
                
                setUser(null)
            }
        })

        return () => unsubscribe();

    }, [])

    const userData = {
        userSignUp,
        userSignIn,
        user,
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