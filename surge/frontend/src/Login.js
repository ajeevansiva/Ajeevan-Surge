import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaUserAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./App.css";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [userDetails, setUserDetails] = useState(null);

    const onHandleLoginSubmit = async() => {
        // handle submit

        if (username !== "" || password !== "" || "") {
            console.log(`${username} ${password}`);
            let accountRegObj = {};
            accountRegObj.username = username;
            accountRegObj.password = password;

            const response = await axios.post(
                "http://localhost:3001/login",
                accountRegObj
            );
            console.log(response.data);
            if (!(response.data.message === "Failed")) {
                if (response.data.data) {
                    setUserDetails(response.data.data.username);
                }
            } else {
                setUserDetails(null);
                alert("Username or Password is incorrect");
            }
        } else {
            alert("All fields are Required");
        }
    };

    return (
        <div className="Login">
            <h1>Login</h1>
            <form onSubmit={loginUser}>
                <input 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Email"
                />
                <br />
                <input 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Password"
                />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    )

}
export default Login
