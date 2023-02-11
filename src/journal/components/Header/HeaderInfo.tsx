import { type ReactElement } from 'react';
import './headerInfo.scss';
import { Link } from 'react-router-dom';

export const HeaderInfo = (): ReactElement => {
  return (
    <>
      <nav className="services">
        <ul className="services__list">
          <Link className="services__item" to="/auth/login">
            Login
          </Link>
          <Link className="services__item" to="/auth/register">
            Subscribe
          </Link>
        </ul>
      </nav>
      <Link className="title" to="/">
        Noti<span className="title__text">Scope</span>
      </Link>
    </>
  );
};
