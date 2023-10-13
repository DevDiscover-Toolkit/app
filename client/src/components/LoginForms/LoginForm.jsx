import { useContext, useState } from "react";
import axios from "axios";

// need to make UserContext - "import { UserContext } from '../UserContext';" see: const {user, setUser} = useContext(UserContext);


const LoginForm = (props) => {
    const [tempLogin, setTempLogin] = useState({});
    const [loginErrors, setLoginErrors] = useState({});

    //useContext to carry user token between? Might not need for this app - adding it here just in case
    const { user, setUser } = useContext(UserContext);

    const onChangeHandler = (e) => {
        setTempLogin({
            ...tempLogin,
            [e.target.name]: e.target.value
        })
    }

    const handleLogin = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/users/login", tempLogin, {withCredentials: true})
            .then(res => {
                console.log("login response from server", res)
                if (res.data.error) {
                    setLoginErrors(res.data)
                } else {
                    axios.get("http://localhost:8000/api/users/loggedInUser", {withCredentials: true})
                        .then(res => {
                            if (res.data.results) {
                                setUser(res.data.results);
                            }
                        })
                        .catch(err => console.log("Error checking userToken in LoginForm", err))
                }
            })
            .catch(err => console.log("Error getting account info:", err))
    }

    return (
        <div className="formGroup">
            <form onSubmit={handleLogin}>
                <p className="text-danger">{loginErrors?.error}</p>
                <input type="text" name="userEmail" id="userEmail" className="form-control" placeholder="Email: someone@somewhere.com" onChange={ (e) => onChangeHandler(e) } />
                <input type="password" name="userPassword" id="userPassword" className="form-control" placeholder="Password123" onChange={ (e) => onChangeHandler(e) } />

                <button type="submit">Log In</button>
            </form>

            <a href="#">Forgot password?</a> | <a href="#">Register</a>

            <hr />

            <button disabled="disabled">F</button>
            <button disabled="disabled">G</button>
            <button disabled="disabled">LiN</button>
            <button disabled="disabled">GitHub</button>
        </div>
    )

}

export default LoginForm;