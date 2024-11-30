import React, { useState } from 'react';
import '../style/Track.css';

const TrackPage = () => {
    const [trackingId, setTrackingId] = useState('');
    const [status, setStatus] = useState(null);

    const handleTrackingChange = (e) => {
        setTrackingId(e.target.value);
    };

    const handleTrackOrder = (e) => {
        e.preventDefault();
        // Here you would make an API call to get the status of the order
        // For now, we'll simulate it with a mock response
        if (trackingId === '12345') {
            setStatus('Your delivery is on the way!');
        } else {
            setStatus('Tracking ID not found.');
        }
    };

    return (
        <div className="track-page">
            <h2>Track Your Delivery</h2>
            <form onSubmit={handleTrackOrder}>
                <div className="form-group">
                    <label>Enter Tracking ID:</label>
                    <input
                        type="text"
                        name="trackingId"
                        value={trackingId}
                        onChange={handleTrackingChange}
                        required
                    />
                </div>
                <button type="submit" className="cta-btn">Track</button>
            </form>
            {status && <p className="status">{status}</p>}
        </div>
    );
};

export default TrackPage;
