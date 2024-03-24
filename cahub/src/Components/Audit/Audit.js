import React, { useState, useEffect } from 'react';
import firebase from '../Firebase/Firebase';

const database = firebase.database();

const AuditForm = () => {
  const [entry, setEntry] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!entry.trim()) return;

    // Add entry to Firebase database
    database.ref('entries').push({
      entry: entry,
      timestamp: firebase.database.ServerValue.TIMESTAMP // Include timestamp
    });

    setEntry('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter audit entry"
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
      />
      <button type="submit">Add Entry</button>
    </form>
  );
};

const AuditList = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const entriesRef = database.ref('entries');

    // Listen for changes in entries
    entriesRef.on('value', (snapshot) => {
      const entriesData = snapshot.val();
      if (entriesData) {
        const entriesList = Object.values(entriesData);
        setEntries(entriesList);
      }
    });

    // Unsubscribe from Firebase listener when component unmounts
    return () => {
      entriesRef.off('value');
    };
  }, []);

  return (
    <div>
      <h2>Audit Entries</h2>
      <ul>
        {entries.map((entry, index) => (
          <li key={index}>{entry.entry}</li>
        ))}
      </ul>
    </div>
  );
};

const TimeDisplay = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Current Time</h2>
      <p>{currentTime.toLocaleTimeString()}</p>
    </div>
  );
};

export { AuditForm, AuditList, TimeDisplay };