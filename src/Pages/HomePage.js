import { useState, useEffect } from 'react';
import { useAuth } from '../Hooks/Auth';

const urlEndPoint = process.env.REACT_APP_URL_ENDPOINT;

const HomePage = () => {
    const [message, setMessage] = useState('');
    const auth = useAuth();

    // When the application is first loading in, react needs to load in the user token from local storage and so we only want to call this fetch function if the user's token is not null. Additionally, when the user is logged out, the token will be null and we want to set the message back to an empty string in this case.
    useEffect(() => {
        const fetchMessage = async () => {
            const response = await fetch(`${urlEndPoint}/users/message`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    [process.env.REACT_APP_TOKEN_HEADER_KEY]: auth.userToken
                },
            });
            const result = await response.json()
            setMessage(result.message)
        }
        if (auth.userToken !== null) {
            fetchMessage()
        }
        if (auth.userToken === null) {
            setMessage("")
        }
    }, [auth.userToken]);

    return (
        <div>
            <h1>Fullstack Auth Home Page</h1>
            <h3>{message}</h3>
        </div>
    )
}

export default HomePage