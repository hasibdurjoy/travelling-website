import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import useAuth from '../../../../Hooks/useAuth';
import './AddReview.css';

const AddReview = () => {
    const { user } = useAuth();
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    const [clientReview, setClientReview] = useState('');
    const takeReview = e => {
        setClientReview(e.target.value);
    }

    const sendFeedBack = (e) => {
        e.preventDefault();
        if (user.email && clientReview !== "" && rating != null) {
            const data = {
                name: user.displayName,
                review: clientReview,
                rating: rating,
                img: user.photoURL
            };
            fetch('https://peaceful-wave-84930.herokuapp.com/reviews', {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(result => {
                    if (result.insertedId) {
                        alert('successfully added');
                        window.location.reload();
                    }
                })
        }
        if (!user.email) {
            alert("Please log in to give a feedback");
        }
    }
    console.log(rating, clientReview);
    return (
        <div className="my-4">
            <Card className="w-50 mx-auto p-3 border-1 shadow">
                <h2>Give Us Your Feedback</h2>
                <form>
                    <textarea required name="" id="" onChange={takeReview} className="w-75"></textarea> <br />
                    {[...Array(5)].map((star, i) => {
                        const ratingValue = i + 1;
                        return (
                            <label>
                                <input
                                    required
                                    type="radio"
                                    name="rating"
                                    value={ratingValue}
                                    onClick={() => setRating(ratingValue)}
                                />
                                <FaStar
                                    class="star"
                                    size={50}
                                    color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                                    onMouseEnter={() => setHover(ratingValue)}
                                    onMouseLeave={() => setHover(null)} />
                            </label>
                        )
                    })}
                    <br /> <button className="btn btn-success mt-3" onClick={sendFeedBack}>Submit</button>
                </form>
            </Card>
        </div>
    );
};

export default AddReview;