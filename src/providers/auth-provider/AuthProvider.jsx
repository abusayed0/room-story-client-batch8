import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase/intailize-firebase-authentication";
import PropTypes from 'prop-types';
import useAxiosPublic from "../../hooks/useAxiosPublic";
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isUserLoading, setIsUserLoading] = useState(true);

    const createUser = (email, password) => {
        setIsUserLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const updateUserProfile = (name, photoUrl) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoUrl
        });
    };

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logOut = () => {
        setIsUserLoading(true);
        return signOut(auth);
    };


    useEffect(() => {
        const unSubsribe = onAuthStateChanged(auth, currentUser => {
            console.log("current user inside observer :", currentUser);
            setUser(currentUser);
            // if current user exist request for token 
            if(currentUser){
                const userInfo = {email: currentUser.email};
                useAxiosPublic.post("/jwt", userInfo)
                .then(res => {
                    console.log("token response :", res.data);
                    if(res.data.token){
                        localStorage.setItem("access-token", res.data.token);
                        setIsUserLoading(false);
                    }
                })
                .catch(error => {
                    console.log("token reqeusest erro", error.response.status);
                    if(error.response.status === 403){
                        logOut();
                    }
                })
                // .finally(() => {
                //     setIsUserLoading(false);
                // })
            }
            else{
                localStorage.removeItem("access-token");
                setIsUserLoading(false);
            }
            
        })

        return () => {
            unSubsribe();
        };

    }, []);


    const authInfo = {
        user,
        isUserLoading,
        createUser,
        updateUserProfile,
        loginUser,
        logOut,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.element.isRequired
};
export default AuthProvider;