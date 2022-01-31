import React from 'react';
import { Navigate, Routes, useLocation } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';

type Props = {
  children: React.ReactElement[] | null;
};

function Auth({ children }: Props) {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const location = useLocation();
  const { pathname } = location;
  const id = useSelector((state: RootState) => state.checkoutData.id);

  if (!isAuthenticated) {
    loginWithRedirect();
  }

  const routes = children?.some((el) => el.props.path === pathname);
  if (!routes && pathname === `checkout/${id}`) {
    return <Navigate to="/404" />;
  }

  return <Routes>{children}</Routes>;
}

export default Auth;
