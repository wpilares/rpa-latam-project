import { type ReactElement } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/login.scss';

export const LoginPage = (props: {
  onFormSwitch: (arg0: string) => void;
}): ReactElement => {
  return (
    <div className="auth-form-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={() => {}}>
        <label htmlFor="email">email</label>
        <input
          onChange={() => {}}
          type="email"
          placeholder="correo@gmail.com"
          id="email"
          name="email"
        />

        <label htmlFor="password">contraseña</label>
        <input
          onChange={() => {}}
          type="password"
          placeholder="*******"
          id="password"
          name="password"
        />

        <button type="submit">Ingresar Cuenta</button>
      </form>

      <label className="letter">
        {' '}
        Aún no se encuentra registrado? Haga clic aquí:
        <Link to="/auth/register">
          <button
            className="link-btn"
            onClick={() => {
              props.onFormSwitch('register');
            }}
          >
            Nuevo Registro
          </button>
        </Link>
      </label>
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
