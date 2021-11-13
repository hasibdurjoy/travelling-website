import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Package from '../Package/Package';
import Bounce from 'react-reveal/Bounce';

const Packages = () => {
    const [packages, setPackages] = useState([]);
    const [displayPackages, setDisplayPackages] = useState([]);
    const [seeAll, setSeeAll] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        fetch('https://peaceful-wave-84930.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => {
                setPackages(data)
                setDisplayPackages(data.slice(0, 6))
                setIsLoading(true)
            })
    }, []);

    const seeAllPackage = () => {
        if (seeAll === false) {
            setDisplayPackages(packages);
            setSeeAll(true);
        }
        if (seeAll === true) {
            setDisplayPackages(packages.slice(0, 6));
            setSeeAll(false);
        }
    }

    return (
        <Bounce left>
            <Container className="mb-4">
                <h1 className="my-3">Our Top <span className="text-danger">Packages</span></h1>
                {
                    isLoading ? <Row xs={1} md={3} className="g-4">
                        {
                            displayPackages.map(singlePackage => <Package key={singlePackage._id} singlePackage={singlePackage}></Package>)
                        }
                    </Row>
                        : <Spinner animation="border" variant="danger" />
                }
                <button onClick={seeAllPackage} className="btn btn-primary mt-4">{seeAll === false ? "See All Package" : "See less"}</button>
            </Container>
        </Bounce>
    );
};

export default Packages;