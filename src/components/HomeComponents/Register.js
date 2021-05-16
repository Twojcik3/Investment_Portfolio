import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { AppContext } from '../../AppContext'
import { useHistory } from 'react-router-dom';
import ErrorMessage from './ErrorMessage';
const validator = require('validator');

const Register = () => {
    const [registerUsername, setRegisterUsername] = useState("");
    const [registerPassword, setRegisterPassword] = useState("")
    const [registerEmail, setRegisterEmail] = useState("");
    const [isAuth, setIsAuth] = useContext(AppContext);
    const [users, setUsers] = useState([])

    const [correctUsername, setCorrectUsername] = useState(true);
    const [correctEmail, setCorrectEmail] = useState(true);
    const [correctPassword, setCorrectPassword] = useState(true);
    const [correctUsernameMessage, setUsernameMessage] = useState("");
    const [correctEmailMessage, setEmailMessage] = useState("");
    const [correctPasswordMessage, setPasswordMessage] = useState("");

    const history = useHistory();

    useEffect(() => {
        let mounted = true;
        axios.get('http://localhost:5000/getUsers', {
            header: {
                'Content-Type': 'application/json'
            },
            withCredentials: true
        }).then((response) => {
            if (mounted) {
                const usersTab = response.data;
                setUsers(usersTab)
            }

        }).catch((err) => {
            console.log(err)
        })
        return () => {
            mounted = false;
        }
    }, [])
    const handleUsername = (e) => {
        setRegisterUsername(e.target.value)
        checkUsername(e.target.value)
    }
    const handlePassword = (e) => {
        setRegisterPassword(e.target.value)
        checkPassword(e.target.value)
    }
    const handleEmail = (e) => {
        setRegisterEmail(e.target.value);
        checkEmail(e.target.value)
    }
    const checkUsername = (username) => {
        //length
        if (username.length >= 1 && username.length < 3) {
            setTimeout(() => {
                setCorrectUsername(false);
                setUsernameMessage("Nazwa użytkownika musi zawierać conajmniej 3 znaki")
            }, 500)
        } else if (username.length === 0 || username.length >= 3) {
            setCorrectUsername(true);
        }

        //check if username already exist
        if (username.length >= 3) {
            users.forEach((el) => {
                if (username === el.username) {
                    setCorrectUsername(false);
                    setUsernameMessage("Taki użytkownik już istnieje")
                }
            })
        }

    }
    const checkEmail = (email) => {
        if (email.length > 0 && !validator.isEmail(email)) {
            setTimeout(() => {
                setCorrectEmail(false);
                setEmailMessage("Podaj prawidłowy adres email")
            }, 1000)
        } else {
            setCorrectEmail(true)
        }
        users.forEach((el) => {
            if (el.email === email) {
                setCorrectEmail(false);
                setEmailMessage("Podany email jest już zajęty");
            }
        })
    }
    const checkPassword = (password) => {
        if (password.length === 0) {
            setTimeout(() => {
                setCorrectPassword(false);
                setPasswordMessage("Podaj hasło")
            }, 1000)
        } else if (password.length > 0 && password.length < 5) {
            setTimeout(() => {
                setCorrectPassword(false);
                setPasswordMessage("Hasło musi zawierać conajmniej 5 znaków")
            }, 1000)
        } else {
            setCorrectPassword(true)
        }
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
        <div className="col-lg-5 pl-lg-5 pb-3 py-lg-5 offset-md-1">
            <form className="register-form">
                <div className="form-group">
                    <label htmlFor="register-username" className="mb-1 text-muted"><small>Nazwa użytkownika</small></label>
                    <input name="username" id="register-username" className="form-control" type="text" placeholder="Nazwa użytkownika" autoComplete="off" onChange={handleUsername} />
                    {correctUsername ? <div /> : <ErrorMessage message={correctUsernameMessage} />}
                </div>
                <div className="form-group">
                    <label htmlFor="register-email" className="mb-1 text-muted"><small>Adres e-mail</small></label>
                    <input name="email" id="register-email" className="form-control" type="text" placeholder="Adres e-mail" onChange={handleEmail} />
                    {correctEmail ? <div /> : <ErrorMessage message={correctEmailMessage} />}
                </div>
                <div className="form-group">
                    <label htmlFor="register-password" className="text-muted mb-1"><small>Hasło</small></label>
                    <input name="password" id="register-password" className="form-control" type="password" placeholder="Hasło" onChange={handlePassword} />
                    {correctPassword ? <div /> : <ErrorMessage message={correctPasswordMessage} />}
                </div>
                <button className="py-3 mt-4 btn btn-lg btn-success btn-block" onClick={submitRegister}>Zarejestruj się</button>
            </form>
        </div>

    )
}

export default Register;