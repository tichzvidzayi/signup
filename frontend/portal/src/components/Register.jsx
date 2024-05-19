import { useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailErr, setEmailErr] = useState("");
    const [pwdErr, setPwdErr] = useState("");
    const [pwdStrength, setStrength] = useState("");


    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);

        // Email validation
        if (!/^\S+@\S+\.\S+$/.test(newEmail)) {
            setEmailErr("Please enter a valid email address.");
        } else {
            setEmailErr("");
        }
    };

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);

        if (newPassword.length < 8) {
            setStrength("Weak");
            setPwdErr("Password must be at least 8 characters long.");

        } else {
            setStrength("Strong");
            setPwdErr("");
        }
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8088/register', {name,email,password})
            .then(res => console.log("aaa"))
            .then(err => console.log(err));

    }
    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-500 to-purple-500">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="form-input px-4 py-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={name}
                            onChange={handleNameChange}
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className={`form-input px-4 py-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${emailErr ? 'border-red-500' : ''}`}
                            value={email}
                            onChange={handleEmailChange}
                        />
                        {emailErr && <p className="text-red-500 text-xs mt-1">{emailErr}</p>}
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className={`form-input px-4 py-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${pwdErr ? 'border-red-500' : ''}`}
                            value={password}
                            onChange={handlePasswordChange}
                        />
                        {pwdErr && <p className="text-red-500 text-xs mt-1">{pwdErr}</p>}
                        {pwdStrength && <p className={`text-${pwdStrength === 'Strong' ? 'green' : 'yellow'}-500 text-xs mt-1`}>{pwdStrength} Password</p>}
                    </div>
                    <button type="submit" className="bg-blue-500 text-white px-6 py-3 w-full rounded-md hover:bg-blue-600 transition-colors">Register</button>

                    <Link to="/signin" className=" text-xs font-bold px-6 py-3" > Already have an account? SignIn </Link>
                </form>
            </div>
        </div>
    );
}

export default Register;
