import React, { useState } from 'react';

const Settings = () => {
    const [form, setForm] = useState({
        username: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Implement settings update logic
        alert('Settings updated!');
    };

    return (
        <div className="settings-container">
            <h2>Account Settings</h2>
            <form onSubmit={handleSubmit} className="settings-form">
                <div>
                    <label>Username</label>
                    <input
                        type="text"
                        name="username"
                        value={form.username}
                        onChange={handleChange}
                        placeholder="Enter username"
                    />
                </div>
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Enter email"
                    />
                </div>
                <div>
                    <label>New Password</label>
                    <input
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        placeholder="Enter new password"
                    />
                </div>
                <button type="submit">Update Settings</button>
            </form>
        </div>
    );
};

export default Settings;