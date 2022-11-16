import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <Link to="/">Home Page</Link>
            <Link to="/registration">Registration Form</Link>
            <Link to="/login">Login Form</Link>
        </div>
    )
}

export default NavBar