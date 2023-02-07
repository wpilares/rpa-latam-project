import { Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { HomeRoutes } from '../journal/routes/HomeRoutes';
import { type ReactElement } from 'react';

export const AppRouter = (): ReactElement => {
  return (
    <Routes>
      <Route path="auth/*" element={<AuthRoutes />} />
      <Route path="/*" element={<HomeRoutes />} />
    </Routes>
  );
};
