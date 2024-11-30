import React, { useState } from 'react';
import '../style/oder.css';

const OrderPage = () => {
    const [orderDetails, setOrderDetails] = useState({
        recipientName: '',
        deliveryAddress: '',
        deliveryTime: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setOrderDetails({ ...orderDetails, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would make an API call to place the order
        console.log('Order placed:', orderDetails);
    };

    return (
        <div className="order-page">
            <h2>Place Your Order</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Recipient Name:</label>
                    <input
                        type="text"
                        name="recipientName"
                        value={orderDetails.recipientName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Delivery Address:</label>
                    <textarea
                        name="deliveryAddress"
                        value={orderDetails.deliveryAddress}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Preferred Delivery Time:</label>
                    <input
                        type="datetime-local"
                        name="deliveryTime"
                        value={orderDetails.deliveryTime}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="cta-btn">Place Order</button>
            </form>
        </div>
    );
};

export default OrderPage;
