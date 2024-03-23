import React, { useState, useEffect } from 'react';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, onSnapshot, addDoc } from 'firebase/firestore';
import './Accounting.css'
import img from '../../Assets/accounting-img.png'

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyApaO5VzsZ2LyTHIgSvmrXl1wHF22t6onA",
    authDomain: "accounting-570c1.firebaseapp.com",
    projectId: "accounting-570c1",
    storageBucket: "accounting-570c1.appspot.com",
    messagingSenderId: "1019039784746",
    appId: "1:1019039784746:web:dc348ed1cdc4efd32e0853"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const AccountingApp = () => {
    const [debitTransactions, setDebitTransactions] = useState([]);
    const [creditTransactions, setCreditTransactions] = useState([]);
    const [debitName, setDebitName] = useState('');
    const [debitAmount, setDebitAmount] = useState('');
    const [creditName, setCreditName] = useState('');
    const [creditAmount, setCreditAmount] = useState('');

    useEffect(() => {
        const unsubscribeDebit = onSnapshot(collection(db, 'debitTransactions'), (snapshot) => {
            const debitData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setDebitTransactions(debitData);
        });

        const unsubscribeCredit = onSnapshot(collection(db, 'creditTransactions'), (snapshot) => {
            const creditData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setCreditTransactions(creditData);
        });

        return () => {
            unsubscribeDebit();
            unsubscribeCredit();
        };
    }, [db]);

    const handleDebitSubmit = async (e) => {
        e.preventDefault();
        await addDoc(collection(db, 'debitTransactions'), {
            name: debitName,
            amount: parseFloat(debitAmount)
        });
        setDebitName('');
        setDebitAmount('');
    };

    const handleCreditSubmit = async (e) => {
        e.preventDefault();
        await addDoc(collection(db, 'creditTransactions'), {
            name: creditName,
            amount: parseFloat(creditAmount)
        });
        setCreditName('');
        setCreditAmount('');
    };

    return (
        <div className="accounting-container">
            
            <div className='accounting-left'>
                <h2 className='accounting-heading'>Debit Transactions</h2>
                <form onSubmit={handleDebitSubmit} className="accounting-form">
                    <input type="text" value={debitName} onChange={(e) => setDebitName(e.target.value)} className="accounting-input" placeholder="Name" />
                    <input type="number" value={debitAmount} onChange={(e) => setDebitAmount(e.target.value)} className="accounting-input" placeholder="Amount" />
                    <button type="submit" className="accounting-button">Add Debit Transaction</button>
                </form>
                <table className="accounting-table">
                    <thead>
                        <tr>
                            <th className="accounting-th">Name</th>
                            <th className="accounting-th">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {debitTransactions.map(transaction => (
                            <tr key={transaction.id}>
                                <td className="accounting-td">{transaction.name}</td>
                                <td className="accounting-td">{transaction.amount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                
            </div>

            <div className='accounting-right'>
                <h2 className='accounting-heading'>Credit Transactions</h2>
                <form onSubmit={handleCreditSubmit} className="accounting-form">
                    <input type="text" value={creditName} onChange={(e) => setCreditName(e.target.value)} className="accounting-input" placeholder="Name" />
                    <input type="number" value={creditAmount} onChange={(e) => setCreditAmount(e.target.value)} className="accounting-input" placeholder="Amount" />
                    <button type="submit" className="accounting-button">Add Credit Transaction</button>
                </form>
                <table className="accounting-table">
                    <thead>
                        <tr>
                            <th className="accounting-th">Name</th>
                            <th className="accounting-th">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {creditTransactions.map(transaction => (
                            <tr key={transaction.id}>
                                <td className="accounting-td">{transaction.name}</td>
                                <td className="accounting-td">{transaction.amount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                
            </div>

            <div className='accounting-middle'>
                <img src={img} className='accounting-img' alt=''></img>
            </div>

        </div>
    );
};

export default AccountingApp;