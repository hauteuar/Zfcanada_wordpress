import React from 'react';
import './Footer.css'; // Make sure to create a corresponding CSS file

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section logo-contact">
                    <img src="images/logo.jpeg" alt="ZFC Logo" className="footer-logo" />
                    <p className="footer-text">We are shaping your dream future</p>
                    <p className="footer-text-description">Indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment so blinded...</p>
                    <div className="footer-services">
                        <h4>OUR VISA IMMIGRATION SERVICES</h4>
                        <ul>
                            <li>Immigration service Processing</li>
                            <li>Business Visa /Startup Visa Services</li>
                            <li>Student Visa Processing</li>
                            {/* More items */}
                        </ul>
                    </div>
                    <button className="footer-button">Get Assesment</button>
                </div>
                <div className="footer-section useful-links">
                    {/* Same structure as logo-contact */}
                </div>
                <div className="footer-section exams-services">
                    {/* Same structure as logo-contact */}
                </div>
                <div className="footer-section opportunities">
                    {/* Same structure as logo-contact */}
                </div>
            </div>
            <div className="footer-bottom">
                <p>©Copyright 2024 ZFCanada Immigration. All rights reserved</p>
                <div className="footer-bottom-links">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Term of Use</a>
                    <a href="#">Support</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
