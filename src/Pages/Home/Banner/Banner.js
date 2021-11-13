import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { FormControl, InputGroup, Modal } from 'react-bootstrap';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import './Banner.css';

const Banner = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="banner-container d-flex flex-column">
            <Zoom>
                <h1 className="banner-title text-danger">Travel With HRD</h1>
            </Zoom>
            <Fade left big>
                <h2 className="text-light">Be Ready To Explore New Things</h2>
            </Fade>

            <InputGroup className="mb-3 w-50">
                <FormControl
                    placeholder="Search your desire place to travel"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />
                <Button onClick={handleShow} variant="outline-secondary" id="button-addon2" className="search-button rounded px-3 text-light">
                    Search
                </Button>
            </InputGroup>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Searching</Modal.Title>
                </Modal.Header>
                <Modal.Body>Sorry, search module is not implemented yet.will be done soon.Thank you</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" className="btn btn-primary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Banner;