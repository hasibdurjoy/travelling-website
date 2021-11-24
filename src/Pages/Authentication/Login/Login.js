import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';
import Swal from 'sweetalert2';

const Login = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const history = useHistory();
    const location = useLocation();
    const redirect_url = location.state?.from || "/home";

    const { signInUsingGoogle, signInUsingGithub, logInWithEmailPassword } = useAuth();
    let { error } = useAuth();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {

        logInWithEmailPassword(data.email, data.password, redirect_url, history, setLoggedIn);

    };

    if (error) {
        error = 'incorrect username or password try again'
    }

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
            title: 'Logged in successfully'
        })
    }


    return (
        <div className="d-flex flex-column align-items-center justify-content-center  p-5 log-in">
            <Card className="border-0 shadow px-2 rounded">
                <Card.Body>
                    <div>
                        <h4 className="mt-3">Log In</h4>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="text-start">
                        <input  {...register("email", { required: true })} type="email" className="mt-3 p-2 rounded border-1 w-100" placeholder="email address" /> <br />
                        {errors.email && <small className="text-danger text-start">Enter email</small>}


                        <input  {...register("password", { required: true })} type="password" className="mt-3 p-2 rounded border-1 w-100" placeholder="password" /> <br />
                        {errors.password && <small className="text-danger text-start">enter  password</small>}
                        {errors.password && <br />}
                        <small className="text-danger text-start">{error}</small>

                        <input type="submit" value="Log in" className="mt-2 p-2 rounded border-1 w-100 btn btn-danger" />
                    </form>
                    <p className="mt-4">
                        <Link to="/register" className="text-danger">don't have an account? sign up now</Link>
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

export default Login;