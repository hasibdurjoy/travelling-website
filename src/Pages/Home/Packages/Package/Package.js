import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import './Package.css';
import Zoom from 'react-reveal/Zoom';
import Rotate from 'react-reveal/Rotate';
import Pulse from 'react-reveal/Pulse';
import Fade from 'react-reveal/Fade';

const Package = ({ singlePackage }) => {
    const { _id, place, cost, img, duration } = singlePackage;
    const history = useHistory();
    const bookingPackage = (id) => {
        history.push(`/packages/${id}`)
    }
    return (
        <Zoom >
            <Pulse>
                <Col>
                    <Card className="border-0 shadow package-card">
                        <Rotate bottom left>
                            <Card.Img variant="top" src={img} height="200" className="p-2" />
                        </Rotate>
                        <Card.Body>
                            <Fade left big>
                                <Card.Title>{place}</Card.Title>
                            </Fade>
                            <Card.Text>
                                <Fade right big><p>{cost} tk / person</p></Fade>
                                <Fade top big> <p>{duration}</p></Fade>
                            </Card.Text>
                            <div className="d-flex justify-content-around">
                                <Fade bottom big> <button onClick={() => { bookingPackage(_id) }} className="btn btn-success w-100">Book Now</button></Fade>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Pulse>
        </Zoom>
    );
};

export default Package;