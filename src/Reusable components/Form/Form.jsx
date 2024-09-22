import React, { useState } from 'react';
import './Form.css';
import { FaTimes } from 'react-icons/fa';

const Form = () => {
    const [formData, setFormData] = useState({ name: '', district: '', phone: '' });
    const [entries, setEntries] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, district, phone } = formData;
        
        if (name.trim() && district.trim() && phone.trim()) {
            setEntries([...entries, { id: entries.length + 1, ...formData }]);
            setFormData({ name: '', district: '', phone: '' }); // Reset form after submission
        }
    };

    const handleCancel = () => {
        setFormData({ name: '', district: '', phone: '' }); // Reset form when cancel is clicked
    };

    const handleDelete = (id) => {
        const updatedEntries = entries.filter(entry => entry.id !== id);
        // Reorder the serial numbers
        const reorderedEntries = updatedEntries.map((entry, index) => ({
            ...entry,
            id: index + 1
        }));
        setEntries(reorderedEntries);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className="form-container">
            <h2>Enter Details</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                />
                <input
                    type="text"
                    name="district"
                    value={formData.district}
                    onChange={handleChange}
                    placeholder="District"
                    required
                />
                <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    required
                />
                <div className="button-container">
                    <button type="submit">Submit</button>
                    <button type="button" onClick={handleCancel}>Cancel</button>
                </div>
            </form>

            {entries.length > 0 && (
                <div className="table-container">
                    <h3>Submitted Details</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Sr No.</th>
                                <th>Name</th>
                                <th>District</th>
                                <th>Phone Number</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {entries.map((entry) => (
                                <tr key={entry.id}>
                                    <td>{entry.id}</td>
                                    <td>{entry.name}</td>
                                    <td>{entry.district}</td>
                                    <td>{entry.phone}</td>
                                    <td className="delete-btn">
                                        <FaTimes onClick={() => handleDelete(entry.id)} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default Form;
