import React from 'react';
import Banner from '../Banner/Banner';
import Reviews from '../ClientReview/Reviews/Reviews';
import Coupon from '../Coupon/Coupon';
import Packages from '../Packages/Packages/Packages';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';

const Home = () => {
    return (
        <div>
            <Banner />
            <Packages />
            <Coupon/>
            <WhyChooseUs/>
            <Reviews/>
        </div>
    );
};

export default Home;