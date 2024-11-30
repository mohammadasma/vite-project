import React from 'react';
import { Link } from 'react-router-dom';
// import './LandingPage.css';
// import '../style.css';

const LandingPage = () => {
    return (
        <div className="landing-page">
            {/* Header Section */}
            <header className="landing-header">
            <div className="auth-links">
                    <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
                    
                </div>
                <h1>Drone Delivery Management System</h1>
                <p>Your solution for fast and efficient drone-based deliveries.</p>
            </header>

            {/* Main Section */}
            <main className="landing-main">
                {/* Call-to-Action Section */}
                <section className="cta-section">
                    <h2>Welcome to Drone Delivery!</h2>
                    <p>Experience fast and secure delivery services using the latest drone technology.</p>
                    <div className="cta-buttons">
                        <Link to="/order" className="cta-btn">Place an Order</Link>
                        <Link to="/track" className="cta-btn">Track Your Delivery</Link>
                    </div>
                </section>

                {/* Features Section */}
                <section className="features-section">
                    <h3>Why Choose Our Drone Delivery Service?</h3>
                    <ul>
                        <li>Fast delivery times</li>
                        <li>Real-time tracking</li>
                        <li>Eco-friendly and efficient</li>
                    </ul>
                </section>
            </main>

            {/* Footer Section */}
            <footer className="landing-footer">
                <p>&copy; 2024 Drone Delivery Inc. | All Rights Reserved</p>
                {/* <div className="auth-links">
                    <Link to="/login">Menu</Link> | <Link to="/register">Service</Link>
                 <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
                </div> */}
            </footer>
        </div>
    );
};

export default LandingPage;
