import { type ReactElement } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/register.scss';

export const RegisterPage = (props: {
  onFormSwitch: (arg0: string) => void;
}): ReactElement => {
  return (
    <div className="auth-form-container">
      <h2>Nuevo Registro</h2>
      <form className="register-form" onSubmit={() => {}}>
        <label htmlFor="name">Nombres</label>
        <input type="name" placeholder="Nombres" id="name" name="name" />

        <label htmlFor="lastname">Apellidos</label>
        <input
          type="lastname"
          placeholder="Apellidos"
          id="lastname"
          name="lastname"
        />

        <label htmlFor="nphone">Telefono</label>
        <input type="nphone" placeholder="Telefono" id="nphone" name="nphone" />

        <label htmlFor="nation">Nacionalidad</label>
        <input
          type="nation"
          placeholder="Nacionalidad"
          id="nation"
          name="nation"
        />

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
        <button type="submit">Registrar Cuenta</button>
      </form>

      <label className="letter">
        {' '}
        Ya se encuentra registrado? Haga clic aquí:
        <Link to="/auth/login">
          <button
            className="link-btn"
            onClick={() => {
              props.onFormSwitch('login');
            }}
          >
            Iniciar Sesión
          </button>
        </Link>
      </label>
    </div>
  );
};
