import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import ApplicationForm from './components/ApplicationForm';
import ApplicationTable from './components/ApplicationTable';

function App() {
  const [applications, setApplications] = useState([]);

  const fetchApplications = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL || 'http://localhost:5000'}/applications`);
      setApplications(response.data);
    } catch (error) {
      console.error('Error fetching applications:', error);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Internship Application Tracker</h1>
      </header>
      <main>
        <ApplicationForm fetchApplications={fetchApplications} />
        <ApplicationTable applications={applications} fetchApplications={fetchApplications} />
      </main>
      <footer className="App-footer">
        <p>Created by Palak</p>
      </footer>
    </div>
  );
}

export default App;
