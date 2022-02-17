import React, { FormEvent, useCallback } from 'react';
import { HeaderContainer } from '../containers/Header';
import { FooterContainer } from '../containers/Footer';
import { useState } from 'react';
import * as ROUTES from "../constants/routes";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { Form } from '../components';

export const SignUp: React.FC = () => {
  const [firstName, setFirstName] = useState("")
  const [emailAddress, setEmailAddress] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const isInvalid = password === "" || emailAddress === "" || firstName === ""

  const navigate = useNavigate()

  const auth = getAuth()
  const handleSubmit = useCallback(async (e: FormEvent) => {
    e.preventDefault()

    try {
      await createUserWithEmailAndPassword(auth, emailAddress, password)
      const user = auth.currentUser
      user && updateProfile(user, {
        displayName: firstName, photoURL: (Math.floor(Math.random() * 5) + 1).toString(),
      })
      navigate(ROUTES.BROWSE)
    } catch (error: any) {
        setFirstName("")
        setEmailAddress("")
        setPassword("")
        setError(error.message)
      }
  }, [auth, emailAddress, password, firstName, navigate])

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          <Form.Base onSubmit={handleSubmit} >
            <Form.InputWrapper>
              <Form.Input
                value={firstName}
                autoComplete="off"
                id="firstNameInput"
                onChange={({ target }) => setFirstName(target.value)}
              />
              <Form.Label
                htmlFor="firstNameInput"
              >
                First name
              </Form.Label>
              {error && <Form.Error>{error}</Form.Error>}
            </Form.InputWrapper>
            <Form.InputWrapper>
              <Form.Input
                value={emailAddress}
                autoComplete="off"
                id="emailInput"
                type="email"
                onChange={({ target }) => setEmailAddress(target.value)}
              />
              <Form.Label
                htmlFor="emailInput"
              >
                Email or phone number
              </Form.Label>
            </Form.InputWrapper>
            <Form.InputWrapper>
              <Form.Input
                value={password}
                id="passwordInput"
                type="password"
                onChange={({ target }) => setPassword(target.value)}
              />
              <Form.Label
                htmlFor="passwordInput"
              >
                Password
              </Form.Label>
            </Form.InputWrapper>
            <Form.Button disabled={isInvalid} type="submit">Sign In</Form.Button>
            <Form.RememberMe>
              <div>
                <Form.Checkbox type="checkbox" id="checkbox" />
                <label htmlFor="checkbox">Remember Me</label>
              </div>
              <span>Need help?</span>
            </Form.RememberMe>
          </Form.Base>
          <Form.FacebookLogin><img src="/images/icons/facebook.png" alt="Facebook Logo" />Login with Facebook</Form.FacebookLogin>
          <Form.SignUpLink to={ROUTES.SIGNIN}><span>Already a user?</span>Sign in now.</Form.SignUpLink>
          <Form.CaptchaText>This page is protected by Google reCAPTCHA to ensure you're not a bot.<span>Learn more.</span></Form.CaptchaText>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  )
}

