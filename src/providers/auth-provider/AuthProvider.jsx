import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase/intailize-firebase-authentication";
import PropTypes from 'prop-types';
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
            setIsUserLoading(false);
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