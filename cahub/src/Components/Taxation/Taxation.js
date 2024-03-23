import React, { useState, useEffect } from 'react';
import { collection, onSnapshot, addDoc } from 'firebase/firestore';
import db from '../Firebase/Firebase'; 
import './Taxation.css';
import img from '../../Assets/taxation-img.png'


const TaxationApp = () => {
    const [taxPayments, setTaxPayments] = useState([]);
    const [taxName, setTaxName] = useState('');
    const [taxAmount, setTaxAmount] = useState('');

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, 'taxPayments'), (snapshot) => {
            const taxData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setTaxPayments(taxData);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    const handleTaxSubmit = async (e) => {
        e.preventDefault();
        await addDoc(collection(db, 'taxPayments'), {
            name: taxName,
            amount: parseFloat(taxAmount)
        });
        setTaxName('');
        setTaxAmount('');
    };

        return (
            <div className="taxation-container">
                <div className='taxation-left'>
                    <h2 className="taxation-heading">Tax Payments</h2>
                    <form onSubmit={handleTaxSubmit} className="taxation-form">
                        <input type="text" value={taxName} onChange={(e) => setTaxName(e.target.value)} className="taxation-input" placeholder="Tax Name" />
                        <input type="number" value={taxAmount} onChange={(e) => setTaxAmount(e.target.value)} className="taxation-input" placeholder="Amount" />
                        <button type="submit" className="taxation-button">Add Tax Payment</button>
                    </form>
                    <ul className="taxation-list">
                        {taxPayments.map(payment => (
                            <li key={payment.id} className="taxation-item">
                                <span className="taxation-name">{payment.name}</span>
                                <span className="taxation-amount">{payment.amount}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='taxation-right'>
                    <img src={img} className='taxation-img' alt=''></img>
                </div>
            </div>
        );
};

export default TaxationApp;
