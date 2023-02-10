import { type ReactElement } from 'react';
import '../../styles/homePage.scss';
import { Header } from '../components';
import { Footer } from '../components/Footer';

export const HomePage = (): ReactElement => {
  return (
    <>
      <Header />
      <Footer />
    </>
  );
};
