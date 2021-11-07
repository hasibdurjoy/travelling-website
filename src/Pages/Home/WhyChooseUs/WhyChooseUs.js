import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const WhyChooseUs = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://peaceful-wave-84930.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <Container className="my-4">
            <h1 className="text-danger my-4">Why You Choose Us ?</h1>
                <Row xs={2} md={4} className="g-4">
                    {
                        services.map(service=><Col> 
                        <Card className="h-100 border-1 shadow">
                            <Card.Img src={service.img} alt=""  height="200px" className="p-3"/>
                            <Card.Body>
                                <Card.Title>{service.name}</Card.Title>
                            </Card.Body>
                        </Card>
                        </Col>)
                    }
                </Row>
        </Container>
    );
};

export default WhyChooseUs;