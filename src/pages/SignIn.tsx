import React from 'react';
import { FormContainer } from '../containers/Form';
import { HeaderContainer } from '../containers/Header';
import { FooterContainer } from '../containers/Footer';


export const SignIn: React.FC = () => {
  return (
    <>
      <HeaderContainer>
        <FormContainer />
      </HeaderContainer>
      <FooterContainer />
    </>
  )
}
