import React from 'react';

const Footer = () => {

    return (
        <div className="bg-dark text-light px-5 pt-4">
            <div className="row">
                <div className="col-lg-4 col-md-4  mb-sm-3">
                    <img alt=""
                        src="https://i.ibb.co/xLJ84Kx/249171771-312921683601873-5477875164565582481-n.png"
                        width="100"
                        height="80"
                        className="d-inline-block align-top mb-3 p-1" />
                    <h4>Travel With HRD</h4>
                    <p>Have a safe and enjoyable travel</p>
                    <div>
                        <i className="fab fa-facebook fs-4 p-3"></i>
                        <i className="fab fa-instagram fs-4 p-3"></i>
                        <i className="fab fa-youtube fs-4 p-3"></i>
                        <i className="fab fa-twitter fs-4 p-3"></i>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4   text-start mb-sm-3">
                    <p className="text-secondary">Support</p>
                    <p>Contact Us</p>
                    <p><i className="fas fa-phone"></i> Phone : +09876543210</p>
                    <p><i className="fas fa-envelope"></i> E-mail: travel.hrd@gmail.com</p>
                    <p><i className="fas fa-location-arrow"></i> Azimpur rd-1 house-87</p>
                    <p><i className="fab fa-whatsapp"></i> +09876543210</p>
                </div>
                
                <div className="col-lg-4 col-md-4  ">
                    <p><i className="fas fa-envelope"></i> Any query??</p>
                    <input type="email" name="" id="" className="bg-light text-light border-2 p-3" placeholder="your opinion about us" />
                    <div className="text-center mt-3">
                        <button className="btn-danger btn rounded">Send mail</button>
                    </div>

                </div>
                <p className="p-3 text-secondary">@2022  Copyright allRights reserved @travel.hrd@gmail.com </p>
            </div>
        </div>
    );
};

export default Footer;