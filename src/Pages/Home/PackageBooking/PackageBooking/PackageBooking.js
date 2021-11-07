import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import BookingBanner from '../BookingBanner/BookingBanner';
import BookingForm from '../BookingFrom/BookingForm';

const PackageBooking = () => {
    const { packageId } = useParams();
    const [event, setEvent] = useState({});


    useEffect(() => {
        fetch(`https://peaceful-wave-84930.herokuapp.com/packages/${packageId}`)
            .then(res => res.json())
            .then(data => setEvent(data))
    }, []);



    return (
        <Container className="my-4">
            <div className="row">
                <div className="col-md-4">
                    <BookingBanner event={event}></BookingBanner>
                </div>
                <div className="col-md-8">
                    <BookingForm event={event}></BookingForm>
                </div>
            </div>
        </Container>
    );
};

export default PackageBooking;