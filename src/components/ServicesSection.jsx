import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ServiceSlide = ({ title, description, imageUrl, isActive }) => {
    const slideContainerStyle = {
        border: '1px solid #ddd',
        borderRadius: '8px',
        margin: '10px',
        width: '100%', // Ensure the slide is responsive within the container
        boxSizing: 'border-box',
    };

    const slideContentStyle = {
        padding: '20px',
        textAlign: 'center',
    };

    const imageStyle = {
        height: '200px', // Set a fixed height for your images
        width: '100%', // Make image width responsive to the container
        objectFit: 'cover', // Ensure the aspect ratio of the image is maintained without distortion
        borderRadius: '4px 4px 0 0', // Round the corners on the top
    };

    const buttonStyle = {
        backgroundColor: isActive ? 'red' : '#333', // Change button background color when active
        color: 'white', // White text for the button
        padding: '10px 20px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        marginTop: '10px',
    };

    return (
        <div style={slideContainerStyle}>
            <div style={slideContentStyle}>
                <img src={imageUrl} alt={title} style={imageStyle} />
                <h3>{title}</h3>
                <p>{description}</p>
                <button style={buttonStyle}>{isActive ? 'VIEW MORE ==>' : 'VIEW MORE'}</button>
            </div>
        </div>
    );
};

const ServicesSection = ({ services }) => {
    const [activeSlide, setActiveSlide] = useState(0);

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Show three slides at a time
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        beforeChange: (current, next) => setActiveSlide(next),
        responsive: [
            {
                breakpoint: 768, // On small screens, show only 1 item
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    };

    return (
        <div style={{ padding: '0 20px', maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{
                color: 'blue',
                textAlign: 'center',
                fontSize: '2rem',
                margin: '1rem 0',
            }}>
                Our Services
            </h2>
            <Slider {...sliderSettings}>
                {services.map((service, index) => (
                    <ServiceSlide key={index} {...service} isActive={index === activeSlide} />
                ))}
            </Slider>
        </div>
    );
};

export default ServicesSection;
