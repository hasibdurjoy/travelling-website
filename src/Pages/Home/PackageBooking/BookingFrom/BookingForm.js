import React from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { useForm } from 'react-hook-form';
import useAuth from '../../../../Hooks/useAuth';

const BookingForm = ({ event }) => {

    const history = useHistory();
    const { user } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        data.uid = user.uid;
        data.img = event.img;
        data.bookingDate = current_date;
        data.bookingTime = current_time;
        data.status = "pending";
        fetch('https://peaceful-wave-84930.herokuapp.com/bookings', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('successfully added');
                    reset();
                    history.push('/');
                }
            })
    }

    //set booking date and time to insert database automatically
    let today = new Date();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    let date = today.getDate();
    let current_date = `${date}/${month}/${year}`;

    function addZero(num) {
        return num < 10 ? `0${num}` : num;
    }
    let hours = addZero(today.getHours());
    let minutes = addZero(today.getMinutes());
    let seconds = addZero(today.getSeconds());
    let current_time = `${hours}:${minutes}:${seconds}`;

    return (
        <Card className="border-0 shadow px-2 rounded w-100 mx-auto">
            <Card.Body>
                <h4>Book Now</h4>
                <form onSubmit={handleSubmit(onSubmit)} className="text-start">
                    <input readOnly  {...register("name")} type="text" className="mt-2 p-2 rounded  border-top-0 border-start-0 border-end-0 w-100" placeholder="name " defaultValue={user.displayName} /> <br />

                    <input readOnly  {...register("email")} type="email" className="mt-3 p-2 rounded border-1 w-100  border-top-0 border-start-0 border-end-0" placeholder="email address" defaultValue={user.email} /> <br />

                    <input  {...register("phone", { required: true })} type="number" className="mt-3 p-2 rounded border-1 w-100  border-top-0 border-start-0 border-end-0" placeholder="phone number" /> <br />

                    <input type="date" {...register("travelingDate", { required: true })} className="mt-3 p-2 rounded border-1 w-100  border-top-0 border-start-0 border-end-0" placeholder="date" /> <br />

                    <input type="number" {...register("person", { required: true })} className="mt-3 p-2 rounded border-1 w-100  border-top-0 border-start-0 border-end-0" placeholder="how many person you are going" /> <br />

                    <textarea  {...register("description")} type="textarea" className="mt-3 p-2 rounded border-1 w-100  border-top-0 border-start-0 border-end-0" placeholder="Description" /> <br />

                    {
                        event.place && <><input readOnly  {...register("service")} type="text" className="mt-3 p-2 rounded border-1 w-100  border-top-0 border-start-0 border-end-0" placeholder="service name" defaultValue={event.place} /> <br />
                        </>
                    }


                    <input type="submit" value="Book Now" className="my-4 p-2 rounded border-1 w-100 btn btn-primary" />
                </form>

            </Card.Body>
        </Card>
    );
};

export default BookingForm;