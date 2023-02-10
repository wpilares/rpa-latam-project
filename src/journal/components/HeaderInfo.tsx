import { type ReactElement } from 'react';
import '../../styles/headerInfo.scss';
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
      <div className="title">
        Noti<span className="title__text">Scope</span>
      </div>
    </>
  );
};
