import React from 'react';
import { Card, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import useAuth from '../../../../Hooks/useAuth';

const ManageBooking = ({ booking, handleDeleteBooking, handleUpdateBooking }) => {
    const { user } = useAuth();
    const { _id, name, email, phone, travelingDate, person, description, service, uid, img, bookingDate, bookingTime, status } = booking;

    return (
        <tr>
            <td>{name}</td>
            <td>{phone}</td>
            <td>{service}</td>
            <td>{person} people</td>
            <td>{bookingDate} <br /> {bookingTime}</td>
            <td>{travelingDate}</td>
            <td>{status}</td>
            <td>
                <div className="d-flex justify-content-around pt-2">
                    <button onClick={() => { handleDeleteBooking(_id) }} className="btn btn-danger rounded-pill">Cancel</button>
                    <button disabled={status === 'booked'} onClick={() => { handleUpdateBooking(user.uid, _id) }} className="btn btn-success rounded-pill">Approve</button>
                </div>
            </td>
        </tr>



    );
};

export default ManageBooking;