import { useState } from 'react'
import { Link } from 'react-router-dom';
import { useAuth } from '../Hooks/Auth';
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const auth = useAuth();
    const navigate = useNavigate();
    const [logoutMessage, setLogoutMessage] = useState('');

    const logoutHandler = async () => {
        const logoutResult = await auth.logout();
        console.log(logoutResult)
        if (logoutResult.success) {
            navigate("/");
        }
        if (!logoutResult.success) {
            setLogoutMessage(logoutResult.message);
        }
    }
    return (
        <div>
            <h3>{auth.userEmail !== null ? `Current User: ${auth.userEmail}` : 'no email found'}</h3>
            <Link to="/">Home Page</Link>
            <Link to="/registration">Registration Form</Link>
            <Link to="/login">Login Form</Link>
            <br />
            <button onClick={logoutHandler}>Logout</button>
            <h3>{logoutMessage}</h3>
        </div>
    )
}

export default NavBar