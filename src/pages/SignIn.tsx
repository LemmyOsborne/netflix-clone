import React, { FormEvent, SyntheticEvent } from 'react';
import { HeaderContainer } from '../containers/Header';
import { FooterContainer } from '../containers/Footer';
import { useState } from 'react';
import * as ROUTES from "../constants/routes";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { FirebaseError } from 'firebase/app';
import { Form } from '../components';

export const SignIn: React.FC = () => {
  //Using state to animate label tags in inputs
  const [firstPlaceholderToggle, setFirstPlaceholderToggle] = useState(false)
  const [secondPlaceholderToggle, setSecondPlaceholderToggle] = useState(false)

  const [emailAddress, setEmailAddress] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const isInvalid = password === '' || emailAddress === ''

  const navigate = useNavigate()

  const handleFirstInputFocus = () => {
      !emailAddress 
      ? setFirstPlaceholderToggle(!firstPlaceholderToggle)
      : setFirstPlaceholderToggle(firstPlaceholderToggle)
  }

  const handleSecondInputFocus = () => {
      !password
      ? setSecondPlaceholderToggle(!secondPlaceholderToggle)
      : setSecondPlaceholderToggle(secondPlaceholderToggle)
  }

  const auth = getAuth()
  const handleSubmit = (e: FormEvent) => {
      e.preventDefault()
          return signInWithEmailAndPassword(auth, emailAddress, password)
          .then(() => {
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
            <Form.InputWrapper onFocus={handleFirstInputFocus} onBlur={handleFirstInputFocus} >
                <Form.Input
                    value={emailAddress}
                    autoComplete="off"
                    id="emailInput"
                    type="email"
                    onChange={({ target }) => setEmailAddress(target.value)}
                />
                <Form.Label
                    htmlFor="emailInput"
                    placeholderToggle={firstPlaceholderToggle}
                >
                    Email or phone number
                </Form.Label>
            </Form.InputWrapper>
            <Form.InputWrapper onFocus={handleSecondInputFocus} onBlur={handleSecondInputFocus}>
                <Form.Input
                    value={password}
                    id="passwordInput"
                    type="password"
                    onChange={({ target }) => setPassword(target.value)}
                />
                <Form.Label
                    htmlFor="passwordInput"
                    placeholderToggle={secondPlaceholderToggle}
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
            <Form.SignUpLink to={ROUTES.SIGNUP}><span>New to Netflix?</span>Sign up now.</Form.SignUpLink>
            <Form.CaptchaText>This page is protected by Google reCAPTCHA to ensure you're not a bot.<span>Learn more.</span></Form.CaptchaText>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  )
}

