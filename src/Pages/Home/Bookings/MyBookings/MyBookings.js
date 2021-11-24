import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import useAuth from '../../../../Hooks/useAuth';
import MyBooking from '../MyBooking/MyBooking';
import Swal from 'sweetalert2';


const MyBookings = () => {
    const { user } = useAuth();
    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        fetch(`https://peaceful-wave-84930.herokuapp.com/bookings/${user.uid}`)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, []);

    const handleDeleteBooking = (id) => {
        Swal.fire({
            icon: 'question',
            title: 'Cancel Booking',
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
    return (
        <Container className="my-4">
            <Row xs={1} md={3} className="g-4">
                {
                    bookings.map(booking => <MyBooking key={booking._id} booking={booking} handleDeleteBooking={handleDeleteBooking}></MyBooking>)
                }
            </Row>
        </Container>
    );
};

export default MyBookings;