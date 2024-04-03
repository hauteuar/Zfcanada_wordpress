// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import './App.css';
// Other page imports...

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};



const App = () => {
    return (
        <Router>
           
                <Header />
           
            <Routes>
                <Route path="/" element={<HomePage />} />
                
                    {/* Define other routes */}

            </Routes>

            <div className="to-top-arrow" onClick={scrollToTop}>
                <img src={`${process.env.PUBLIC_URL}/images/red-arrow.png`} alt="Scroll to Top" />

            </div>
            <Footer />
        </Router>
    );
};

export default App;
