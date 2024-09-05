import React, { useState } from 'react';

const LoginRoute = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your login logic here
        console.log('Logging in with', email, password);
    };

    const handleSignUp = () => {
        // Handle signup logic or navigate to the signup page
        console.log('Navigating to SignUp');
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>Email:</label>
                <input type="email" value={email} onChange={handleEmailChange} />

                <label>Password:</label>
                <input type="password" value={password} onChange={handlePasswordChange} />

                <button type="submit">Login</button>
                <button type="submit" >SignUp</button>
            </form>
        </div>
    );
};

export default LoginRoute;
