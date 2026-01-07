import React, { useState } from 'react';
import axios from 'axios';

const ApplicationTable = ({ applications, fetchApplications }) => {
    const [editingId, setEditingId] = useState(null);
    const [editStatus, setEditStatus] = useState('');

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this application?')) {
            try {
                await axios.delete(`${process.env.REACT_APP_API_URL || 'http://localhost:5000'}/delete/${id}`);
                fetchApplications();
            } catch (error) {
                console.error('Error deleting application:', error);
            }
        }
    };

    const startEditing = (app) => {
        setEditingId(app.id);
        setEditStatus(app.status);
    };

    const cancelEditing = () => {
        setEditingId(null);
        setEditStatus('');
    };

    const handleUpdate = async (id) => {
        try {
            await axios.put(`${process.env.REACT_APP_API_URL || 'http://localhost:5000'}/update/${id}`, { status: editStatus });
            setEditingId(null);
            fetchApplications();
        } catch (error) {
            console.error('Error updating application:', error);
        }
    };

    return (
        <div className="table-container">
            <h2>Applications List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Company Name</th>
                        <th>Role</th>
                        <th>Applied Date</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {applications.map((app) => (
                        <tr key={app.id}>
                            <td>{app.company_name}</td>
                            <td>{app.role}</td>
                            <td>{new Date(app.applied_date).toLocaleDateString()}</td>
                            <td>
                                {editingId === app.id ? (
                                    <select
                                        value={editStatus}
                                        onChange={(e) => setEditStatus(e.target.value)}
                                    >
                                        <option value="Applied">Applied</option>
                                        <option value="Interview">Interview</option>
                                        <option value="Selected">Selected</option>
                                        <option value="Rejected">Rejected</option>
                                    </select>
                                ) : (
                                    app.status
                                )}
                            </td>
                            <td>
                                {editingId === app.id ? (
                                    <>
                                        <button onClick={() => handleUpdate(app.id)}>Save</button>
                                        <button onClick={cancelEditing}>Cancel</button>
                                    </>
                                ) : (
                                    <>
                                        <button onClick={() => startEditing(app)}>Edit Status</button>
                                        <button onClick={() => handleDelete(app.id)}>Delete</button>
                                    </>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ApplicationTable;
