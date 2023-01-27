import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {

    return (
        <>

            {/* <!-- -------------footer contain-----------------> */}
            <div className="footer ">
                <div className="container-f">
                    <div className="row-f">
                        <div className="footer-col-1">
                            <h2>AAPLI PAUNI </h2>
                            <p style={{ color: "blue" }}><b>Aapli Pauni</b> </p>
                            <p> <b> Mob No</b>:- 0000000000</p>
                            <p style={{ color: "blue" }}> <b> Aapli Pauni</b> :</p>
                            <p> <b> Mob No</b>:-0000000000</p>
                            <p> <b> Email</b>:-aaplipauni@gmail.com</p>
                            <div className="social-icon">
                                <span><b> Follow-us :- </b>
                                    <a to="#"><i className="fa fa-facebook-official" style={{ color: "rgb(53, 67, 223)" }}></i></a>
                                    <a to="#"><i className="fa fa-instagram" style={{ color: "rgb(212, 59, 125)" }}></i></a>
                                    <a to="#"><i className="fa fa-youtube-play" style={{ color: "rgb(231, 36, 36)" }}></i></a>
                                    <a to="#"><i className="fa fa-linkedin" style={{ color: "rgb(53, 67, 223)" }}></i></a>
                                </span>
                            </div>
                        </div>
                        <div className="footer-col-2">
                            <Link to="/about" className="links">About Us</Link>
                            <ul>
                                <li><a to="#">Overview</a></li>
                                <li><a to="#">Visit Pauni</a></li>
                                <li><a to="#">Our Journey</a></li>
                                <li><a to="#">Leadership</a></li>
                                <li><a to="#">Location</a></li>
                            </ul>
                        </div>
                        <div className="footer-col-2">
                            <Link to="/expertise" className="links">Expertise</Link>
                            <ul>
                                <li><a to="#">Overview</a></li>
                                <li><a to="#">Visit Pauni</a></li>
                                <li><a to="#">Our Journey</a></li>
                                <li><a to="#">Leadership</a></li>
                                <li><a to="#">Location</a></li>
                            </ul>
                        </div>
                        
                        <div className="footer-col-2">
                            <Link to="/thought-center" className="as">Though Center</Link>

                        </div>
                        <div className="footer-col-2">
                            <Link to="/contactus" className="links">Contact Us</Link>

                        </div>
                        <div className="footer-col-2">
                            <Link to="joinus" className="links">Join Us</Link>

                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- ----------copyright-------------------- --> */}

            <div className="copyright">
                <div className="useful-links">
                    <Link to="/about" style={{ color: "white" }}> About </Link>
                    |
                    <a to="#" > Accessibility </a>
                    |
                    <a to="#" > Help Center </a>
                    |
                    <a to="#" > Privacy Policy </a>
                    |
                    <a to="#" > Advertising </a>

                </div>
                <div className="copyright-msg">
                    <p >Aapli Pauni &#169; 2021. All right reserved</p>
                </div>
            </div>


        </>
    );
};

export default Footer;