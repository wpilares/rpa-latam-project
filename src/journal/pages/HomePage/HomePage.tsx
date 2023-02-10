import { type ReactElement } from 'react';
import './homePage.scss';
import { Header } from '../../components';
import { Footer } from '../../components/Footer';

export const HomePage = (): ReactElement => {
  return (
    <>
      <Header />
      <Footer />
    </>
  );
};
