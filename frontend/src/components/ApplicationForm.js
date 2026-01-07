import React, { useState } from 'react';
import axios from 'axios';

const ApplicationForm = ({ fetchApplications }) => {
    const [formData, setFormData] = useState({
        company_name: '',
        role: '',
        applied_date: '',
        status: 'Applied'
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${process.env.REACT_APP_API_URL || 'http://localhost:5000'}/add`, formData);
            fetchApplications();
            setFormData({
                company_name: '',
                role: '',
                applied_date: '',
                status: 'Applied'
            });
        } catch (error) {
            console.error('Error adding application:', error);
        }
    };

    return (
        <div className="form-container">
            <h2>Add New Application</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="company_name"
                    placeholder="Company Name"
                    value={formData.company_name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="role"
                    placeholder="Role"
                    value={formData.role}
                    onChange={handleChange}
                    required
                />
                <input
                    type="date"
                    name="applied_date"
                    value={formData.applied_date}
                    onChange={handleChange}
                    required
                />
                <select name="status" value={formData.status} onChange={handleChange}>
                    <option value="Applied">Applied</option>
                    <option value="Interview">Interview</option>
                    <option value="Selected">Selected</option>
                    <option value="Rejected">Rejected</option>
                </select>
                <button type="submit">Add Application</button>
            </form>
        </div>
    );
};

export default ApplicationForm;
