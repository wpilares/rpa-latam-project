import { type ReactElement } from 'react';

import { HeaderInfo } from './HeaderInfo';
import { NavBar } from './NavBar';

export const Header = (): ReactElement => {
  return (
    <>
      <HeaderInfo />
      <NavBar />
    </>
  );
};
