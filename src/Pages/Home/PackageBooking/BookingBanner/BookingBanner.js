import React from 'react';

const BookingBanner = ({event}) => {
    const { place, route, duration, cost, description, img, transport } = event;

    return (
        <div className="card mb-3 border-0 shadow-lg" >
            <div className="">
                <div className="">
                    <img src={img} className="rounded p-3" alt="..." height="250px" width="100%" />
                </div>
                <div className="">
                    <div className="card-body text-start">
                        <h5 className="card-title">{place}</h5>
                        <p className="card-text">{route}</p>
                        <p className="card-text">{duration}</p>
                        <p className="card-text">{cost} per person</p>
                        <p className="card-text">{description}</p>
                        <p className="card-text">{transport}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingBanner;