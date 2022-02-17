import React from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from '../components';
import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";


export const HeaderContainer: React.FC = ({ children }) => {
  const { pathname } = useLocation()

  return pathname !== ROUTES.SIGNIN ? (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
        <Header.ButtonLink to={ROUTES.SIGNIN}>Sign In</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  ) : (
    <Header bg="black">
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
      </Header.Frame>
      {children}
    </Header>
  )
}
