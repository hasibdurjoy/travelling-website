import React from 'react';
import Banner from '../Banner/Banner';
import Reviews from '../ClientReview/Reviews/Reviews';
import Coupon from '../Coupon/Coupon';
import Packages from '../Packages/Packages/Packages';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';
import Slide from 'react-reveal/Slide';

const Home = () => {
    return (
        <div>
            <Zoom> <Banner /> </Zoom>
            <Packages />
            <Bounce left><Coupon /></Bounce>
            <Slide right > <WhyChooseUs /> </Slide>
            <Reviews />
        </div>
    );
};

export default Home;