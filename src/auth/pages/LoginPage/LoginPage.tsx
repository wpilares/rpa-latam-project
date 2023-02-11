import { type ReactElement } from 'react';
import { Link } from 'react-router-dom';
import './loginPage.scss';

export const LoginPage = (): ReactElement => {
  return (
    <div className="container">
      <div className="wrapper-login">
        <div className="form">
          <form className="form-login" onSubmit={() => {}}>
            <h2 className="title-page">
              Noti<span>Scope</span>
            </h2>
            <div className="form-login__header">
              <h3 className="form-login__title">Log in</h3>
              <p className="form-login__description">
                Welcome back! please enter your details.
              </p>
            </div>
            <div className="form-login__field form-login__field--username">
              <label className="form-login__label" htmlFor="email">
                Email
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
            <div className="form-login__field form-login__field--password">
              <label className="form-login__label" htmlFor="password">
                Password
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
                Sign in
              </button>
            </div>
          </form>

          <p className="prompt__text">
            {' '}
            Don`t have an account?
            <Link className="prompt__link" to="/auth/register">
              Suscribe
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

const facebook = {
  appId: 'Ingresa tu cuenta de Facebook',
  cookie: true,
  xfbml: true,
  version: 'v2.11',
  scope: 'email',
};

export const facebookConfig = facebook;

const google = {
  client_id: 'Ingresa tu cuenta de Google',
  scope: 'https://www.googleapis.com/auth/plus.login',
};

export const googleConfig = google;
