import { type ReactElement } from 'react';

import { HeaderInfo } from './Header/HeaderInfo';
import { NavBar } from './Header/NavBar';

export const Header = (): ReactElement => {
  return (
    <>
      <HeaderInfo />
      <NavBar />
    </>
  );
};
