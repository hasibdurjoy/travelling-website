import React from 'react';
import { Card, Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap';

const MyBooking = ({ booking ,handleDeleteBooking }) => {
    const { _id, name, email, travelingDate, person, description, service, uid, img, bookingDate, bookingTime, status } = booking;

    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={img} height="250px" className="p-3"/>
                <Card.Body>
                    <Card.Title>{service}</Card.Title>

                    <ListGroup className="list-group-flush text-start">
                        <ListGroupItem>Booked By {name}</ListGroupItem>
                        <ListGroupItem>Booked For {person} people</ListGroupItem>
                        <ListGroupItem>Booked in {bookingDate} at {bookingTime}</ListGroupItem>
                        <ListGroupItem>Traveling Date : {travelingDate}</ListGroupItem>
                        <ListGroupItem>Status : {status} {status==="pending"?<i className="far fa-times-circle text-danger fs-5"></i>:<i className="fas fa-check-circle text-success fs-5"></i>}</ListGroupItem>
                        <button onClick={() => { handleDeleteBooking(_id) }} className="btn btn-danger">Cancel</button>
                    </ListGroup>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default MyBooking;