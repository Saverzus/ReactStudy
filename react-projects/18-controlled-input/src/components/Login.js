import { useState } from 'react'

function Login() {

    const [data, setData] = useState({ username: '', password: '' })

    function handleFormSubmit(event) {
        event.preventDefault();

        console.log(data)

        alert(JSON.stringify(data))
    }

    function handleInputChange(text, name) {
        return setData({ ...data, [name]: text.target.value })
    }

    return (
        <>
            <h1>Login Form</h1>
            <form onSubmit={handleFormSubmit}>

                <label>Username:
                    <input type="text" value={data.username} onChange={(text) => handleInputChange(text, 'username')} >

                    </input>
                </label>

                <label>Password:
                    <input type="password" value={data.password} onChange={(text) => handleInputChange(text, 'password')} >

                    </input>
                </label>

                <button type="submit">Login</button>

            </form>
        </>
    )
}

export default Login;