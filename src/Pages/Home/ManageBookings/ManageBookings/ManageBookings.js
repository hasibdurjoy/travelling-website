import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Container, Modal, Row, Table } from 'react-bootstrap';
import ManageBooking from '../ManageBooking/ManageBooking';
import './ManageBooking.css';
import Swal from 'sweetalert2';


const ManageBookings = () => {
    const [bookings, setBookings] = useState([]);
    const [updateBooking, setUpdateBooking] = useState(false);

    //delete bookings
    useEffect(() => {
        fetch('https://peaceful-wave-84930.herokuapp.com/bookings')
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [updateBooking])

    const handleDeleteBooking = (id) => {
        Swal.fire({
            icon: 'question',
            title: 'Delete Bookings',
            showDenyButton: true, showCancelButton: true,
            confirmButtonText: `Yes`,
            denyButtonText: `No`,
        })
            .then((result) => {
                if (result.isConfirmed) {
                    const url = `https://peaceful-wave-84930.herokuapp.com/bookings/${id}`;
                    fetch(url, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount > 0) {
                                Swal.fire({
                                    icon: 'error',
                                    title: 'Deleted Successfully',
                                })
                                const remainingBookings = bookings.filter(booking => booking._id !== id);
                                setBookings(remainingBookings);
                            }
                        });
                }
                else if (result.isDenied) {
                    Swal.fire('Changes are not saved', '', 'info')
                }
            });
    }


    const handleUpdateBooking = (userId, bookingId) => {
        setUpdateBooking(false);
        Swal.fire({
            icon: 'question',
            title: 'Update Bookings',
            showDenyButton: true, showCancelButton: true,
            confirmButtonText: `Yes`,
            denyButtonText: `No`,
        })
            .then((result) => {
                if (result.isConfirmed) {
                    const url = `https://peaceful-wave-84930.herokuapp.com/bookings/${bookingId}`;
                    fetch(url, {
                        method: 'PUT',
                        headers: {
                            'content-type': 'application/json'
                        }
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.modifiedCount > 0) {
                                Swal.fire({
                                    icon: 'success',
                                    title: 'Updated Successfully',
                                })
                                setUpdateBooking(true);
                            }
                        });
                }
                else if (result.isDenied) {
                    Swal.fire('Changes are not saved', '', 'info')
                }
            });

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