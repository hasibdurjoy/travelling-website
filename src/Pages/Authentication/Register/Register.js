import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';
import Swal from 'sweetalert2';


const Register = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const { signInUsingGoogle, signInUsingGithub, registerWithEmailPassword } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();


    const history = useHistory();
    const location = useLocation();
    const redirect_url = location.state?.from || "/home";
    const [error, setError] = useState();

    const onSubmit = data => {
        if ((data.password).length < 6) {
            setError('password must be 6 characters');
            return;
        }
        if (data.password !== data.confirmPassword) {
            setError('please match both password');
            return;
        }
        else {
            registerWithEmailPassword(data.name, data.email, data.password, redirect_url, history, setLoggedIn);
        }
    };

    const logInWithGoogle = () => {
        signInUsingGoogle(redirect_url, history, setLoggedIn);
    }
    const logInWithGithub = () => {
        signInUsingGithub(redirect_url, history, setLoggedIn);
    }


    {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })
        loggedIn && Toast.fire({
            icon: 'success',
            title: 'Registered successfully'
        })
    }

    return (
        <div className="d-flex flex-column align-items-center justify-content-center p-5 register">
            <Card className="border-0 shadow px-2 rounded">
                <Card.Body>
                    <h4>Create A new account</h4>
                    <form onSubmit={handleSubmit(onSubmit)} className="text-start">
                        <input  {...register("name", { required: true })} type="text" className="mt-2 p-2 rounded border-1 w-100" placeholder="enter your name " /> <br />
                        {errors.name && <small className="text-danger text-start">Enter your name</small>}

                        <input  {...register("email", { required: true })} type="email" className="mt-3 p-2 rounded border-1 w-100" placeholder="email address" /> <br />
                        {errors.email && <small className="text-danger text-start">Enter your email</small>}


                        <input  {...register("password", { required: true })} type="password" className="mt-3 p-2 rounded border-1 w-100" placeholder="password " /> <br />
                        {errors.password && <>  <small className="text-danger text-start">Enter a password</small></>}
                        {errors.password && <br />}
                        <small className="text-danger text-start">{error}</small>

                        <input  {...register("confirmPassword", { required: true })} type="password" className="mt-3 p-2 rounded border-1 w-100" placeholder="Confirm password " /> <br />
                        {errors.confirmPassword && <small className="text-danger text-start">Renter the password</small>}
                        <small className="text-danger text-start">{error}</small>

                        <input type="submit" value="Sign up" className="mt-2 p-2 rounded border-1 w-100 btn btn-danger" />
                    </form>
                    <p className="mt-4">
                        <Link to="/login" className="text-danger">already have an account? sign in now</Link>
                    </p>
                    <hr />
                    <p>OR</p>
                    <button className="btn btn-outline-secondary w-100 " onClick={logInWithGoogle}><img src="https://i.ibb.co/sKynp17/google.png" alt="" /> Sign in with Google</button>
                    <button className="btn btn-outline-secondary w-100 mt-3" onClick={logInWithGithub}><img src="https://i.ibb.co/9rz2WdD/github.png" alt="" /> Sign in with Github</button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Register;