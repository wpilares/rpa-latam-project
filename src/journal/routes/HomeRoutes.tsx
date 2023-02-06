import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage, NewsPage } from '../pages';
import { type ReactElement } from 'react';

export const HomeRoutes = (): ReactElement => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/news" element={<NewsPage />}></Route>
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
