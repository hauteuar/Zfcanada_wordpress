import React, { useState, useEffect } from 'react';
import './Counter.css'
const Counter = ({ end, duration, label }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const increment = end / duration;

        const timer = setInterval(() => {
            start += increment;
            setCount(prevCount => Math.min(Math.ceil(prevCount + increment), end));
            if (start >= end) clearInterval(timer);
        }, duration / end);

        return () => clearInterval(timer);
    }, [end, duration]);

    return (
        <div style={{
            color: 'white',
            flex: 1,
            margin: '0 10px',
            textAlign: 'center',
            padding: '20px',
            borderLeft: '1px solid white',
            borderRight: '1px solid white',
            fontSize: '1.2rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
        }}>
            <h2>{count.toLocaleString()}</h2>
            <p>{label}</p>
        </div>
    );
};

const SectionCounters = () => {
    const sectionStyle = {
        backgroundImage: 'url("/images/counter-background.png")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'visible', // This allows the content to overflow outside of the container.
        margin: '-2px 0'// Adjust the negative margin to control how much it overflows onto adjacent sections.
        
    };

    return (
        <div className="Counter">
        <section style={sectionStyle}>
            <h1>Your Journey to Success Starts Here</h1>
            <p>Soar to new heights with our trusted immigration expertise</p>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-around',
                marginTop: '20px'
            }}>
                <Counter end={20} duration={2000} label="Years of Expertise" />
                <Counter end={19000} duration={3000} label="Happy Clients" />
                <Counter end={5000} duration={3000} label="Families Helped" />
            </div>
            </section>
        </div>
    );
};

export default SectionCounters;
