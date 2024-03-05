import { Form } from "react-router-dom";
import React, { useState } from "react";

const AccountInfo = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [submittedData, setSubmittedData] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            username: username,
            password: password,
            email: email,
        };
        setSubmittedData(data);
        setUsername("");
        setPassword("");
        setEmail("");
    };

    return (
        <>
            <h1>
                Welcome to ADD SONG<span className="title">+</span>
            </h1>
            <p>
                Enjoy finding new artists and songs similar to what you're
                already enjoying!
            </p>
            <p>Sign up for free today.</p>
            <Form onSubmit={handleSubmit}>
                <label>
                    Create Username
                    <input
                        type="text"
                        required
                        minLength="7"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
                <label>
                    Create Password
                    <input
                        type="password"
                        minLength="7"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <label>
                    Enter Your Email Address
                    <input
                        type="email"
                        required
                        placeholder="We won't spam you!"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>

                <button type="submit">Submit</button>
            </Form>
            {submittedData && (
                <div>
                    <h3>Welcome to ADD SONG+ Here is your account info.</h3>
                    <p>Username: {submittedData.username}</p>
                    <p>Password: {submittedData.password}</p>
                    <p>Email Address: {submittedData.email}</p>
                </div>
            )}
        </>
    );
};

export default AccountInfo;
