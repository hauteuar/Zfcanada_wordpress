import React from 'react';
import './TopBar.css'; // Make sure the CSS file is correctly linked
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt, faComment } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const TopBar = ({ hide }) => {
    return (
        <div className={`topbar ${hide ? 'hide' : ''}`}>
            <div className="topbar-social" style={{ marginLeft: "7%" }}>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faWhatsapp} />
                </a>
            </div>
            <div className="topbar-contact">
                <span className="contact-item">
                    <FontAwesomeIcon icon={faEnvelope} className="icon" />
                    immigway@gmail.com
                </span>
                <span className="contact-item">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
                    231 Madison Street, New York, USA
                </span>
            </div>
            <div className="phone-box">
                <div className="phone-numbers">
                    {/* The first phone number */}
                    <div>
                        <FontAwesomeIcon icon={faComment} />
                        <span>+1 768 453 99</span>
                    </div>
                    
                    {/* The second phone number */}
                    <div >
                        <FontAwesomeIcon icon={faComment} />
                        <span>+1 768 453 88</span> {/* Replace with your second number */}
                    </div>
                    </div>
            </div>
        </div>
    );
};

export default TopBar;
