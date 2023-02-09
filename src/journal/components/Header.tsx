import { type ReactElement } from 'react';
import { NavBar } from './NavBar';
import { HeaderInfo } from './HeaderInfo';

export const Header = (): ReactElement => {
  return (
    <>
      <HeaderInfo />
      <NavBar />
    </>
  );
};
