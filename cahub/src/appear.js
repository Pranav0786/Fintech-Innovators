
import React, { useState } from 'react';
import axios from 'axios';

const MyComponent = () => {
    const [formData, setFormData] = useState({
        sender: '',
        recipient: '',
        amount: 0
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/transactions/new', formData);
            console.log(response.data);
           
        } catch (error) {
            console.error('Transaction failed', error);
            
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <h2>Create Transaction</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="sender" value={formData.sender} onChange={handleChange} placeholder="Sender" />
                <input type="text" name="recipient" value={formData.recipient} onChange={handleChange} placeholder="Recipient" />
                <input type="number" name="amount" value={formData.amount} onChange={handleChange} placeholder="Amount" />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default MyComponent;
