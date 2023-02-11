import { type ReactElement, type ReactNode } from 'react';
import { HeaderInfo } from '../journal/components/Header/HeaderInfo';
import { NavBar } from '../journal/components';
import { Footer } from '../journal/components/Footer/Footer';

interface journalLayoutProps {
  children: ReactNode;
}

export const JournalLayout = ({
  children,
}: journalLayoutProps): ReactElement => {
  return (
    <>
      <HeaderInfo />
      <NavBar />
      {children}
      <Footer />
    </>
  );
};
