import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AppContext } from '../../AppContext'
import { useHistory } from 'react-router-dom';
import ErrorMessage from './ErrorMessage';


const Login = () => {
    const [loginUsername, setLoginUsername] = useState("");
    const [loginPassword, setLoginPassword] = useState("")
    const [username, setUsername] = useContext(AppContext);
    const [isAuth, setIsAuth] = useContext(AppContext);

    const [correctLogin, setCorrectLogin] = useState(true);
    const history = useHistory();

    const handleUsername = (e) => {
        setLoginUsername(e.target.value)
    }
    const handlePassword = (e) => {
        setLoginPassword(e.target.value)
    }
    const handlePath = () => {
        const location = {
            pathname: '/dashboard'
        }
        history.push(location)
    }
    const changeAuth = (type) => {
        setIsAuth(type)
    }
    const changeCorrectLogin = (type) => {
        setCorrectLogin(type)
    }
    const asingUsername = (username) => {
        setUsername(username)
    }
    const submitLogin = (e) => {
        e.preventDefault();
        const user = {
            username: loginUsername,
            password: loginPassword
        }
        validateLogin()
        axios.post('http://localhost:5000/login', user, {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true
        }).then((response) => {
            console.log(response)
            if (response.status !== 200) {
                changeCorrectLogin(false)
            }
            asingUsername(user.username)
            changeAuth(true)
            handlePath()
            changeCorrectLogin(true);
        }).catch((err) => {
            console.log(err)
            changeCorrectLogin(false)
        })
        setTimeout(() => {
            changeCorrectLogin(false)
        }, 2500)
    }
    const validateLogin = () => {
        if (loginUsername === "" || loginPassword === "") {
            setCorrectLogin(false);
        } else if (loginUsername.length < 3 || loginPassword.length < 3) {
            setCorrectLogin(false);
        }
    }
    return (
        <form className="mb-0 pt-2 pt-md-0">
            <div className="row align-items center">
                <div className="col-md mr-0 mb-3 pr-md-0 mb-md-0">
                    <input name="username" className="form-control form-control-sm input-dark" type="text" autoComplete="off" placeholder="Nazwa użytkownika" onChange={handleUsername} />
                </div>
                <div className="col-md mr-0 mb-3 pr-md-0 mb-md-0">
                    <input name="password" className="form-control form-control-sm input-dark " type="password" placeholder="Hasło" onChange={handlePassword} />
                </div>
                <div className="col-md-auto">
                    <button className="btn-primary btn-sm btn" onClick={submitLogin}>Zaloguj</button>
                </div>
            </div>
            {correctLogin ? <div /> : <ErrorMessage message="Niepoprawny login lub hasło" />}
        </form>
    )
}

export default Login;