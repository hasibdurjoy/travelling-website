import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import StarRatings from 'react-star-ratings';

const Review = ({ singleReview }) => {
    const { name, review, rating, img } = singleReview;
    const star = parseFloat(rating);
    return (
        <Col>
            <Card className="h-100 border-0 shadow">
                <Card.Img src={img} alt="" height="120px" className=" w-50 mx-auto rounded-circle mt-4" />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{review}</Card.Text>
                    <StarRatings
                        rating={star}
                        starRatedColor="orange"
                        numberOfStars={5}
                        name='rating'
                        starDimension="20px"
                        starSpacing="10px"
                    />
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Review;