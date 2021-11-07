import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Container, Modal, Row, Table } from 'react-bootstrap';
import ManageBooking from '../ManageBooking/ManageBooking';
import './ManageBooking.css';

const ManageBookings = () => {
    const [bookings, setBookings] = useState([]);
    const [updateBooking, setUpdateBooking] = useState({});

    //delete bookings
    useEffect(() => {
        fetch('https://peaceful-wave-84930.herokuapp.com/bookings')
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])

    const handleDeleteBooking = (id) => {
        const proceed = window.confirm('Are you sure, you want to cancel?');
        if (proceed) {
            const url = `https://peaceful-wave-84930.herokuapp.com/bookings/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingBookings = bookings.filter(booking => booking._id !== id);
                        setBookings(remainingBookings);
                    }
                });
        }
    }


    const handleUpdateBooking = (userId, bookingId) => {
        const proceed = window.confirm('Are you want to approve this booking??');
        if (proceed) {
            const url = `https://peaceful-wave-84930.herokuapp.com/bookings/${bookingId}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updateBooking)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        alert('Approved Successful');
                        window.location.reload();
                    }
                })
        }
    }

    return (
        <div className="m-4">
            <h3 className="my-3 ">Manage All Bookings</h3>
            <Table responsive bordered className="table-container">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Package</th>
                        <th>Booked For</th>
                        <th>Booking date</th>
                        <th>Travel Date</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookings.map(booking => <ManageBooking key={booking._id} booking={booking} handleDeleteBooking={handleDeleteBooking} handleUpdateBooking={handleUpdateBooking}></ManageBooking>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default ManageBookings;