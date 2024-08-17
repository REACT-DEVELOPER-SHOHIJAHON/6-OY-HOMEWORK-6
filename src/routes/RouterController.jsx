import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const Login = lazy(() => import('../routes/login/Login'));
const Register = lazy(() => import('../routes/register/Register'));
const Profile = lazy(() => import('../routes/profile/Profile'));

const Loading = () => (
  <div className="loading">
    <p>Loading...</p>
  </div>
);

const RouterController = () => {
  return (
    <Routes>
      <Route path="/login" element={
        <Suspense fallback={<Loading />}>
          <Login />
        </Suspense>
      } />
      <Route path="/register" element={
        <Suspense fallback={<Loading />}>
          <Register />
        </Suspense>
      } />
      <Route path="/profile" element={
        <Suspense fallback={<Loading />}>
          <Profile />
        </Suspense>
      } />
    </Routes>
  );
};

export default RouterController;


