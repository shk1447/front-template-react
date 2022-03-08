import React from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { Login } from '~/components/pages/Login';

export const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Outlet />
          </>
        }
      >
        <Route path="/main" element={<Navigate to="/login" />}></Route>
        <Route
          path="/login"
          element={
            <>
              <Outlet />
            </>
          }
        >
          <Route index element={<Login></Login>} />
        </Route>
      </Route>
    </Routes>
  );
};
