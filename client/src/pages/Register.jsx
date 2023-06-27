import React, { useState } from 'react';
import axios from 'axios';


export default function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = {
            username,
            password,
        };
        try {
            const url = "http://localhost:4000/register";
            //do a post request to the url add content type
            const res = await axios.post(url, user, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            
            console.log(res.data);
        } catch (err) {
            console.log(err);  
        }
    };



    return (
        <form action="" className="register" onSubmit={handleSubmit}>
            <h1>Register</h1>
            <input type="text" 
                placeholder="username" 
                value={username}
                onChange={e => setUsername(e.target.value)}
            />    
            <input type="password" 
                placeholder="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />    
            <button type="submit">Register</button>
        </form>
        
    )
}
