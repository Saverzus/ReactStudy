import { useState } from 'react'

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleFormSubmit(event) {
        event.preventDefault();

        const userData = {
            username: event.target.username.value,
            password: event.target.password.value
        }

        console.log(userData)

        alert(JSON.stringify(userData))
    }

    return (
        <>
            <h1>Login Form</h1>
            <form onSubmit={handleFormSubmit}>

                <label>Username:
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} name="username">

                    </input>
                </label>

                <label>Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} name="password">

                    </input>
                </label>

                <button type="submit">Login</button>

            </form>
        </>
    )
}

export default Login;