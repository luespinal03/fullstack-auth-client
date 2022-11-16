import { useState } from 'react'

const RegistrationPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [registerMessage, setRegisterMessage] = useState('');


    return (
        <div>
            <h1>Fullstack Auth Registration Page</h1>
            <label type='text'>Email: </label>
            <input type="text" onChange={(e) => { setEmail(e.target.value) }}></input>
            <br />
            <label type='password'>Password: </label>
            <input type="text" onChange={(e) => { setPassword(e.target.value) }}></input>
            <h3>{registerMessage}</h3>

        </div>
    )
}

export default RegistrationPage