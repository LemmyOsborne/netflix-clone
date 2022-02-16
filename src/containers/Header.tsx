import React from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from '../components';
import { useWindowSize } from '../components/hooks/useWindowSize';
import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";


export const HeaderContainer: React.FC = ({ children }) => {
  const { width } = useWindowSize()
  const { pathname } = useLocation()

  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
        {(pathname !== ROUTES.SIGNIN && width > 700) && <Header.ButtonLink to={ROUTES.SIGNIN}>Sign In</Header.ButtonLink>}
      </Header.Frame>
      {children}
    </Header>
  )
}
