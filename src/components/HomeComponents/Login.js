import React from 'react';

const Login = () => {
    return (
        <form className="mb-0 pt-2 pt-md-0">
            <div className="row align-items center">
                <div className="col-md mr-0 mb-3 pr-md-0 mb-md-0">
                    <input name="username" className="form-control form-control-sm input-dark" type="text" autoComplete="off" placeholder="Nazwa użytkownika" />
                </div>
                <div className="col-md mr-0 mb-3 pr-md-0 mb-md-0">
                    <input name="password" className="form-control form-control-sm input-dark " type="password" placeholder="Hasło" />
                </div>
                <div className="col-md-auto">
                    <button className="btn-primary btn-sm btn">Zaloguj</button>
                </div>
            </div>
        </form>
    )
}

export default Login;