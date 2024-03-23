import React, { useState } from 'react';

// Mock data for transaction history
const mockTransactions = [
  { id: 1, date: '2024-03-22', description: 'Sale of Product A', amount: 1000 },
  { id: 2, date: '2024-03-23', description: 'Purchase of Equipment', amount: -500 },
  // Add more transactions as needed
];

// UploadFinancialData component
const UploadFinancialData = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (file) {
      // Logic to upload file to blockchain or backend
      console.log('File uploaded:', file.name);
      setFile(null); // Clear the file state after upload
    } else {
      alert('Please select a file to upload.');
    }
  };

  return (
    <div>
      <h2>Upload Financial Data</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

// TransactionHistory component
const TransactionHistory = () => {
  return (
    <div>
      <h2>Transaction History</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {mockTransactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td>{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// GenerateReport component
const GenerateReport = () => {
  const handleGenerateReport = () => {
    // Logic to generate report
    console.log('Generating report...');
  };

  return (
    <div>
      <h2>Generate Report</h2>
      <button onClick={handleGenerateReport}>Generate Report</button>
    </div>
  );
};

// Main App component
const transaction = () => {
  return (
    <div>
      <h1>Business Transparency Portal</h1>
      <div className="container">
        <UploadFinancialData />
        <TransactionHistory />
        <GenerateReport />
      </div>
    </div>
  );
};

export default transaction;