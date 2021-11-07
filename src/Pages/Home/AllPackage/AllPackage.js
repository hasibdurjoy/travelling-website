import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Package from '../Packages/Package/Package';

const AllPackages = () => {
    const [packages, setPackages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        fetch('https://peaceful-wave-84930.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => {
                setPackages(data)
                setIsLoading(true)
            })
    }, []);


    return (
        <Container className="mb-4">
            <h1 className="my-3">Our All <span className="text-danger">Packages</span></h1>
            {
                isLoading ? <Row xs={1} md={3} className="g-4">
                    {
                        packages.map(singlePackage => <Package key={singlePackage._id} singlePackage={singlePackage}></Package>)
                    }
                </Row>
                    : <Spinner animation="border" variant="danger" />
            }
        </Container>
    );
};

export default AllPackages;