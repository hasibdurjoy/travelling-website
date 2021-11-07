import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import AddReview from '../AddReview/AddReview';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [displayReviews, setDisplayReviews] = useState([]);
    const [seeAll, setSeeAll] = useState(false);

    useEffect(() => {
        fetch('https://peaceful-wave-84930.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
                setDisplayReviews(data.slice(0, 4))
            });
    }, []);

    const seeAllReview = () => {
        if (seeAll === false) {
            setDisplayReviews(reviews);
            setSeeAll(true);
        }
        if (seeAll === true) {
            setDisplayReviews(reviews.slice(0, 4));
            setSeeAll(false);
        }
    }
    return (
        <Container className="mt-5 mb-3">
            <h1 className="text-danger my-4">Our Happy Customers review</h1>
            <Row xs={2} md={4} className="g-4">
                {
                    displayReviews.map(singleReview => <Review singleReview={singleReview}></Review>)
                }
            </Row>
            <button onClick={seeAllReview} className="btn btn-primary mt-4">{seeAll === false ? "See All Reviews" : "See less"}</button>
            <AddReview />
        </Container>
    );
};

export default Reviews;