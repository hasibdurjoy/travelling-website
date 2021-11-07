import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Col, Modal, Row } from 'react-bootstrap';

const Coupon = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="my-5">
            <h1 className="text-dark mb-3">Get Discount</h1>
            <div className="card mb-3 w-75 mx-auto border-0 shadow-lg" >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="https://image.freepik.com/free-vector/sales-banner-template_1176-108.jpg" className="img-fluid rounded-start p-3 rounded" alt="..." />
                    </div>
                    <div className="col-md-8 d-flex align-items-center">
                        <div className="card-body">
                            <h2 className="card-title p-3 text-danger">Enter Code and Get Discount</h2>
                            <div className="input-group mb-3 w-50 mx-auto">
                                <input type="text" className="form-control" placeholder="Enter Valid Coupon Code" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                <button onClick={handleShow} className="btn btn-outline-secondary btn-danger text-light" type="button" id="button-addon2">Apply</button>

                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Coupon Code</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>At this moment coupon is not available</Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="primary" className="btn btn-primary" onClick={handleClose}>
                                            Close
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Coupon;