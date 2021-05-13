import React from 'react';

const Register = () => {

    return (
        <div className="col-lg-5 pl-lg-5 pb-3 py-lg-5">
            <form className="register-form">
                <div className="form-group">
                    <label htmlFor="register-username" className="mb-1 text-muted"><small>Nazwa użytkownika</small></label>
                    <input name="username" id="register-username" className="form-control" type="text" placeholder="Nazwa użytkownika" autoComplete="off" />
                </div>
                <div className="form-group">
                    <label htmlFor="register-email" className="mb-1 text-muted"><small>Adres e-mail</small></label>
                    <input name="email" id="register-email" className="form-control" type="text" placeholder="Adres e-mail" />
                </div>
                <div className="form-group">
                    <label htmlFor="register-password" className="text-muted mb-1"><small>Hasło</small></label>
                    <input name="password" id="register-password" className="form-control" type="password" placeholder="Hasło" />
                </div>
                <button className="py-3 mt-4 btn btn-lg btn-success btn-block">Zarejestruj się</button>
            </form>
        </div>

    )
}

export default Register;