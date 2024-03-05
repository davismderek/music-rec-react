import { Form } from "react-router-dom";
import React, { useState } from "react";

const Contact = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [submittedData, setSubmittedData] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            username: username,
            email: email,
            message: message,
        };
        setSubmittedData(data);
        setUsername("");
        setEmail("");
        setMessage("");
    };

    return (
        <>
            <div>
                <h1>
                    Contact us at ADD SONG<span className="title">+</span>
                </h1>
            </div>
            <div>
                <p>
                    We'd love to hear from you...as long as it's positive and
                    encouraging.
                </p>
            </div>

            <Form onSubmit={handleSubmit}>
                <label>
                    Name
                    <input
                        type="text"
                        required
                        minLength="2"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
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
                <label>
                    Message
                    <input
                        type="text"
                        minLength="2"
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </label>

                <button type="submit">Submit</button>
            </Form>
            {submittedData && (
                <div>
                    <h3>
                        Thanks for your message, our team will review it within
                        48 hours.
                    </h3>
                    <p>Username: {submittedData.username}</p>
                    <p>Email: {submittedData.email}</p>
                    <p>Message: {submittedData.message}</p>
                </div>
            )}
        </>
    );
};

export default Contact;
