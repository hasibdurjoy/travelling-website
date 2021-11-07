import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import './Package.css';

const Package = ({ singlePackage }) => {
    const { _id, place, cost, img, duration } = singlePackage;
    const history = useHistory();
    const bookingPackage = (id) => {
        history.push(`/packages/${id}`)
    }
    return (
        <Col>
            <Card className="border-0 shadow package-card">
                <Card.Img variant="top" src={img} height="200" className="p-2" />
                <Card.Body>
                    <Card.Title>{place}</Card.Title>
                    <Card.Text>
                        <p>{cost} tk / person</p>
                        <p>{duration}</p>
                    </Card.Text>
                    <div className="d-flex justify-content-around">
                        <button onClick={() => { bookingPackage(_id) }} className="btn btn-success w-100">Book Now</button>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Package;