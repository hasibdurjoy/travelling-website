import { useEffect, useState } from 'react';
import {
    onAuthStateChanged,
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    GithubAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,

    signOut
} from "firebase/auth";
import initializeAuthentication from '../Pages/Authentication/Firebase/firebase.init';


initializeAuthentication();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();

    const registerWithEmailPassword = (name, email, password, redirect_url, history, setLoggedIn) => {
        console.log(email, password);
        setLoggedIn(false);
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                updateProfile(auth.currentUser, { displayName: name })
                    .then(() => {
                        setLoggedIn(true)
                        history.push(redirect_url);
                        window.location.reload();
                    })
            })
            .finally(() => { setIsLoading(false) })
            .catch((error) => {
                setError(error.message);
            });
    }

    const logInWithEmailPassword = (email, password, redirect_url, history, setLoggedIn) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setLoggedIn(true);
                const user = result.user;
                history.push(redirect_url);
                setError('')
            })
            .finally(() => { setIsLoading(false) })
            .catch(error => {
                setError(error.message);
            })
    }

    const signInUsingGoogle = (redirect_url, history, setLoggedIn) => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setLoggedIn(true);
                setUser(result.user)
                history.push(redirect_url);
            })
            .finally(() => { setIsLoading(false) })
    }

    const signInUsingGithub = (redirect_url, history, setLoggedIn) => {
        const githubProvider = new GithubAuthProvider();
        signInWithPopup(auth, githubProvider)
            .then(result => {
                setLoggedIn(true)
                setUser(result.user)
                history.push(redirect_url);
            })
            .finally(() => { setIsLoading(false) })
    }


    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        })
        return () => unsubscribed;
    }, []);
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => { setIsLoading(false) })
    }
    return {
        user,
        error,
        isLoading,
        setUser,
        signInUsingGoogle,
        signInUsingGithub,
        registerWithEmailPassword,
        logInWithEmailPassword,
        logOut
    }
};

export default useFirebase;