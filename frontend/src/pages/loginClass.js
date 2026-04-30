import React, {useState} from "react";
import axios from "axios";


const CreateUser = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:8080/api/users/register", 
                { name, email, password }
            );
            setMessage("User created successfully!");
        } catch (error) {
            setMessage("Error creating user.");
        }
    };

    return (
        <div>
            <div>
                <form>
                    <label>Name:</label>
                    <input>
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    </input>

                    <label>Email:</label>
                    <input>
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    </input>

                    <label>Password:</label>
                    <input>
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    </input>
                </form>
                {message && <p>{message}</p>}
            </div>
        </div>
)};
