import React, { FormEvent, SyntheticEvent } from 'react';
import { HeaderContainer } from '../containers/Header';
import { FooterContainer } from '../containers/Footer';
import { useState } from 'react';
import * as ROUTES from "../constants/routes";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { FirebaseError } from 'firebase/app';
import { Form } from '../components';

export const SignUp: React.FC = () => {
  //Using state to animate label tags in inputs
  const [emailAddressPlaceholderToggle, setEmailAddressPlaceholderToggle] = useState(false)
  const [passwordPlaceholderToggle, setPasswordPlaceholderToggle] = useState(false)
  const [firstNamePlaceholderToggle, setFirstNamePlaceholderToggle] = useState(false)

  const [firstName, setFirstName] = useState("")
  const [emailAddress, setEmailAddress] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const isInvalid = password === '' || emailAddress === ''

  const navigate = useNavigate()

  const handleFirstNameInputFocus = () => {
    !firstName
      ? setFirstNamePlaceholderToggle(!firstNamePlaceholderToggle)
      : setFirstNamePlaceholderToggle(firstNamePlaceholderToggle)
  }

  const handleEmailInputFocus = () => {
    !emailAddress
      ? setEmailAddressPlaceholderToggle(!emailAddressPlaceholderToggle)
      : setEmailAddressPlaceholderToggle(emailAddressPlaceholderToggle)
  }

  const handlePasswordInputFocus = () => {
    !password
      ? setPasswordPlaceholderToggle(!passwordPlaceholderToggle)
      : setPasswordPlaceholderToggle(passwordPlaceholderToggle)
  }

  const auth = getAuth()
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    return createUserWithEmailAndPassword(auth, emailAddress, password)
      .then(() => {
        const user = auth.currentUser
        user && updateProfile(user, {
          displayName: firstName, photoURL: (Math.floor(Math.random() * 5) + 1).toString(),
        })
        navigate(ROUTES.BROWSE)
      })
      .catch((error: FirebaseError) => {
        setEmailAddress("")
        setPassword("")
        setError(error.message)
      })
  }

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          <Form.Base onSubmit={handleSubmit} >
            <Form.InputWrapper onFocus={handleFirstNameInputFocus} onBlur={handleFirstNameInputFocus}>
              <Form.Input
                value={firstName}
                autoComplete="off"
                id="firstNameInput"
                onChange={({ target }) => setFirstName(target.value)}
              />
              <Form.Label
                htmlFor="firstNameInput"
                placeholderToggle={firstNamePlaceholderToggle}
              >
                First name
              </Form.Label>
            </Form.InputWrapper>
            <Form.InputWrapper onFocus={handleEmailInputFocus} onBlur={handleEmailInputFocus}>
              <Form.Input
                value={emailAddress}
                autoComplete="off"
                id="emailInput"
                type="email"
                onChange={({ target }) => setEmailAddress(target.value)}
              />
              <Form.Label
                htmlFor="emailInput"
                placeholderToggle={emailAddressPlaceholderToggle}
              >
                Email or phone number
              </Form.Label>
            </Form.InputWrapper>
            <Form.InputWrapper onFocus={handlePasswordInputFocus} onBlur={handlePasswordInputFocus}>
              <Form.Input
                value={password}
                id="passwordInput"
                type="password"
                onChange={({ target }) => setPassword(target.value)}
              />
              <Form.Label
                htmlFor="passwordInput"
                placeholderToggle={passwordPlaceholderToggle}
              >
                Password
              </Form.Label>
              {error && <Form.Error>User with this email or password doesn't exist.</Form.Error>}
            </Form.InputWrapper>
            <Form.Button disabled={isInvalid} type="submit">Sign In</Form.Button>
            <Form.RememberMe>
              <div>
                <Form.RememberMeCheckbox type="checkbox" id="checkbox" />
                <label htmlFor="checkbox">Remember Me</label>
              </div>
              <span>Need help?</span>
            </Form.RememberMe>
          </Form.Base>
          <Form.FacebookLogin><img src="/images/icons/facebook.png" alt="Facebook Logo" />Login with Facebook</Form.FacebookLogin>
          <Form.SignUpLink to={ROUTES.SIGNIN}><span>New to Netflix?</span>Sign up now.</Form.SignUpLink>
          <Form.CaptchaText>This page is protected by Google reCAPTCHA to ensure you're not a bot.<span>Learn more.</span></Form.CaptchaText>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  )
}

