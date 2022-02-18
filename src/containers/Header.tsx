import React from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from '../components';
import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";


export const HeaderContainer: React.FC<{bg?: "true" | "false"}> = ({ bg, children }) => {
  const { pathname } = useLocation()
 
  // If user on sign in or browse pages we need to get rid of sign in button in header

  return pathname !== (ROUTES.SIGNIN && ROUTES.BROWSE) ? (
    <Header bg={bg}>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
        <Header.ButtonLink to={ROUTES.SIGNIN}>Sign In</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  ) : (
    <Header bg={bg}>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
      </Header.Frame>
      {children}
    </Header>
  )
}
