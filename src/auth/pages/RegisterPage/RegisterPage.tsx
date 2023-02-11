import { type ReactElement } from 'react';
import { Link } from 'react-router-dom';
import './registerPage.scss';

export const RegisterPage = (): ReactElement => {
  return (
    <div className="container">
      <div className="wrapper-login">
        <div className="form">
          <form className="form-login" onSubmit={() => {}}>
            <h2 className="title-page">
              Noti<span>Scope</span>
            </h2>
            <div className="form-login__header">
              <h3 className="form-login__title">Sign up</h3>
              <p className="form-login__description">
                Please enter your information.
              </p>
            </div>
            <div className="form-login__field form-login__field--username">
              <label className="form-login__label" htmlFor="name">
                Name*
              </label>
              <input
                className="form-login__input"
                type="name"
                placeholder="Enter your name"
                id="name"
                name="name"
              />
            </div>
            <div className="form-login__field form-login__field--username">
              <label className="form-login__label" htmlFor="email">
                Email*
              </label>
              <input
                className="form-login__input"
                onChange={() => {}}
                type="email"
                placeholder="enter your email"
                id="email"
                name="email"
              />
            </div>
            <div className="form-login__field form-login__field--username">
              <label className="form-login__label" htmlFor="password">
                Password*
              </label>
              <input
                className="form-login__input"
                onChange={() => {}}
                type="password"
                placeholder="*******"
                id="password"
                name="password"
              />
            </div>
            <div className="form-login__field form-login__field--submit">
              <button className="form-login__submit" type="submit">
                Registrar Cuenta
              </button>
            </div>
          </form>

          <p className="prompt__text">
            Already have an accoun
            <Link className="prompt__link" to="/auth/login">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
