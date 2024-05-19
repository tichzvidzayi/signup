import  { useState } from "react";
import {Link} from 'react-router-dom';

function SignIn() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [passwordStrength, setPasswordStrength] = useState("");

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);

        if (!/^\S+@\S+\.\S+$/.test(newEmail)) {
            setEmailError("Please enter a valid email address.");
        } else {
            setEmailError("");
        }
    };

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);

        // Password strength validation
        if (newPassword.length < 8) {
            setPasswordStrength("Weak");
            setPasswordError("Password must be at least 8 characters long.");
        } else {
            setPasswordStrength("Strong");
            setPasswordError("");
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-500 to-purple-500">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">SignIn</h2>
                <form>

                    <div className="mb-6">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className={`form-input px-4 py-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${emailError ? 'border-red-500' : ''}`}
                            value={email}
                            onChange={handleEmailChange}
                        />
                        {emailError && <p className="text-red-500 text-xs mt-1">{emailError}</p>}
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className={`form-input px-4 py-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${passwordError ? 'border-red-500' : ''}`}
                            value={password}
                            onChange={handlePasswordChange}
                        />
                        {passwordError && <p className="text-red-500 text-xs mt-1">{passwordError}</p>}
                        {passwordStrength && <p className={`text-${passwordStrength === 'Strong' ? 'green' : 'yellow'}-500 text-xs mt-1`}>{passwordStrength} Password</p>}
                    </div>
                    <button type="submit" className="bg-blue-500 text-white px-6 py-3 w-full rounded-md hover:bg-blue-600 transition-colors">SignIn</button>
                    <Link to = "/register" className=" text-xs font-bold px-6 py-3" >New user? Register new account </Link>
                </form>
            </div>
        </div>
    );
}

export default SignIn;
