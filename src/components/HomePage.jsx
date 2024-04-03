// HomePage.jsx
import React from 'react';
import SliderComponent from './SliderComponent';
import SectionCounters from './SectionCounters';
import ServicesSection from './ServicesSection';
import NewsGrid from './NewsGrid';
import ContactForm from './ContactForm';
//import MainContent from './MainContent';
// Import any other components that make up your homepage
const servicesData = [
    {
        title: "Gateway to Education",
        description: "Embark on your academic journey with our streamlined Student Visa Processing service, tailored for aspiring international students seeking world-class education.",
        imageUrl: "/images/student-visa.jpg"
    },
    {
        title: "Workforce Entry",
        description: "Secure your future with our expert Work Permit and LMIA guidance, ensuring you meet all requirements for a successful career in Canada.",
        imageUrl: "/images/workentry-visa.jpg"
    },
    {
        title: "Explore Destinations",
        description: "Discover the beauty and culture of new countries with our comprehensive Visitor Visa services, designed for hassle-free travel.",
        imageUrl: "/images/Visitor-visa.png"
    },
    {
        title: "Swift Immigration",
        description: "Fast-track your Canadian immigration with our Express Entry expertise, providing a streamlined process for skilled individuals.",
        imageUrl: "/images/express-visa.jpg"
    },
    {
        title: "Provincial Nomination",
        description: "Navigate the Provincial Nominee Program with our specialized assistance, leading you towards a tailored path to Canadian residency.",
        imageUrl: "/images/pnp-visa.jpg"
    },
    {
        title: "Innovate and Thrive",
        description: "Launch your startup on the global stage with our strategic Startup Visa program, fostering innovation and entrepreneurial success.",
        imageUrl: "/images/startup-visa.jpg"
    },
    // ... more services
];
const HomePage = () => {
    return (
        <div>
            
            <SliderComponent />
            <SectionCounters />
            <h1 style={{ textAlign: "center", marginTop: "70px" }}> Choose Your Required Services
                from our list</h1>
            <ServicesSection services={servicesData} />
            <h1 style={{ textAlign: "center", marginTop: "70px" }}> Latest Immigration News & Alerts </h1>
            <NewsGrid />

            <h1 style={{ textAlign: "center", marginTop: "70px" }}> Contact Us </h1>
            <ContactForm />

            {/* Include other sections that make up your homepage */}
        </div>
    );
};

export default HomePage;
