import { type ReactElement, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/navBar.scss';
import icon from '../../assets/hamburger_icon.svg';

export const NavBar = (): ReactElement => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className={`navbar ${mobileOpen ? 'active' : ''}`}>
      <ul
        className={mobileOpen ? 'navbar__listmobile' : 'navbar__list'}
        onClick={() => {
          setMobileOpen(false);
        }}>
        <Link className="navbar__item" to="/">
          Entertainment
        </Link>
        <Link className="navbar__item" to="/">
          Sports
        </Link>
        <Link className="navbar__item" to="/">
          Technology
        </Link>
        <Link className="navbar__item" to="/">
          Science
        </Link>
        <Link className="navbar__item" to="/">
          Business
        </Link>
        <Link className="navbar__item" to="/">
          Health
        </Link>
      </ul>
      <button
        className="navbar__button"
        onClick={() => {
          setMobileOpen(!mobileOpen);
        }}>
        <img src={icon} alt="15px" />
      </button>
    </nav>
  );
};
