import { useState } from 'react';
import './Signup.css';
function Signup() {
    const [name, setUserName] = useState("");
    const [email, setUserEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin = async (e) => {
        e.preventDefault();
        const userData = {
            name,
            email,
            password
        };

        try {
            const response = await fetch("http://localhost:8080/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userData)
            });

            const data = await response.json();
            console.log(data);
        } 
        catch (error) {
            console.error(error);
        }
    };
    return (
        <>
            <div className="signup-page">
                <div className="signup-container">
                    <h1>Signup</h1>
                    <input type="text" placeholder="User Name" onChange={(event) => setUserName(event.target.value)}></input>
                    <input type="email" placeholder="User Email" onChange={(event) => setUserEmail(event.target.value)}></input>
                    <input type="password" placeholder="Enter password" onChange={(event) => setPassword(event.target.value)}></input>
                    <button>Sign Up</button>
                </div>
            </div>
        </>
    );
}
export default Signup;