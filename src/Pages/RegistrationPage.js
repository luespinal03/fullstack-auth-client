import { useState } from 'react';
import { useAuth } from "../Hooks/Auth";
import { useNavigate } from "react-router-dom";

const RegistrationPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [registerMessage, setRegisterMessage] = useState('');

    const auth = useAuth();
    const navigate = useNavigate();

    const registrationHandler = async () => {
        const registerResult = await auth.register(email, password);
        if (registerResult.success) {
            navigate("/login");
        }
        if (!registerResult.success) {
            setRegisterMessage(registerResult.message);
        }
    }

    return (
        <div>
            <h1>Fullstack Auth Registration Page</h1>
            <label type='text'>Email: </label>
            <input type="text" onChange={(e) => { setEmail(e.target.value) }}></input>
            <br />
            <label type='password'>Password: </label>
            <input type="text" onChange={(e) => { setPassword(e.target.value) }}></input>
            <br />
            <button onClick={registrationHandler}>Sign Up</button>
            <h3>{registerMessage}</h3>

        </div>
    )
}

export default RegistrationPage