import React from 'react';
import { Header } from '../components';
import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";

interface IHeaderContainer {
  bg?: boolean
  showSignInButton?: boolean
  hideOnSmallScreen?: boolean
}

export const HeaderContainer: React.FC<IHeaderContainer> = ({ children, bg, showSignInButton = true, hideOnSmallScreen }) => {

  return (
    <Header bg={bg} hideOnSmallScreen={hideOnSmallScreen}>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
        {showSignInButton && <Header.ButtonLink to={ROUTES.SIGNIN}>Sign In</Header.ButtonLink>}
      </Header.Frame>
      {children}
    </Header>
  ) 
}
