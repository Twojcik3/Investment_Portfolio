import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AppContext } from '../../AppContext'
import { useHistory } from 'react-router-dom';

const Register = () => {
    const [registerUsername, setRegisterUsername] = useState("");
    const [registerPassword, setRegisterPassword] = useState("")
    const [registerEmail, setRegisterEmail] = useState("");
    const [isAuth, setIsAuth] = useContext(AppContext);
    const history = useHistory();

    const handleUsername = (e) => {
        setRegisterUsername(e.target.value)
    }
    const handlePassword = (e) => {
        setRegisterPassword(e.target.value)
    }
    const handleEmail = (e) => {
        setRegisterEmail(e.target.value);
    }
    const submitRegister = (e) => {
        e.preventDefault();
        const user = {
            username: registerUsername,
            email: registerEmail,
            password: registerPassword
        }
        axios.post('http://localhost:5000/register', user, {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true
        }).then((result) => {
            console.log(result);
            changeAuth(true);
            handlePath();
        }).catch((err) => {
            console.log(err)
        })
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

    return (
        <div className="col-lg-5 pl-lg-5 pb-3 py-lg-5">
            <form className="register-form">
                <div className="form-group">
                    <label htmlFor="register-username" className="mb-1 text-muted"><small>Nazwa użytkownika</small></label>
                    <input name="username" id="register-username" className="form-control" type="text" placeholder="Nazwa użytkownika" autoComplete="off" onChange={handleUsername} />
                </div>
                <div className="form-group">
                    <label htmlFor="register-email" className="mb-1 text-muted"><small>Adres e-mail</small></label>
                    <input name="email" id="register-email" className="form-control" type="text" placeholder="Adres e-mail" onChange={handleEmail} />
                </div>
                <div className="form-group">
                    <label htmlFor="register-password" className="text-muted mb-1"><small>Hasło</small></label>
                    <input name="password" id="register-password" className="form-control" type="password" placeholder="Hasło" onChange={handlePassword} />
                </div>
                <button className="py-3 mt-4 btn btn-lg btn-success btn-block" onClick={submitRegister}>Zarejestruj się</button>
            </form>
        </div>

    )
}

export default Register;