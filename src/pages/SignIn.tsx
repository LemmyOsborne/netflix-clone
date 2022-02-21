import React, { FormEvent, useCallback } from 'react';
import { HeaderContainer } from '../containers/Header';
import { FooterContainer } from '../containers/Footer';
import { useState } from 'react';
import * as ROUTES from "../constants/routes";
import { getAuth, signInWithEmailAndPassword, signInWithRedirect } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { Form } from '../components';
import { FacebookAuthProvider } from "firebase/auth";




export const SignIn: React.FC = () => {
    const [emailAddress, setEmailAddress] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)
    const isInvalid = password === "" || emailAddress === ""

    const navigate = useNavigate()

    const auth = getAuth()
    const handleSubmit = useCallback(async (e: FormEvent) => {
        e.preventDefault()

        try {
            await signInWithEmailAndPassword(auth, emailAddress, password)
            navigate(ROUTES.BROWSE)
        } catch (error: any) {
            setEmailAddress("")
            setPassword("")
            setError(error.message)
        }
    }, [auth, emailAddress, password, navigate])


    const provider = new FacebookAuthProvider()
    // const facebookSignInHandler = async () => {
    //     try {
    //         await 
    //     } catch (error: any) {
    //         setEmailAddress("")
    //         setPassword("")
    //         setError(error.message)
    //     }
        
    // }

    return (
        <>
            <HeaderContainer bg={true} showSignInButton={false} hideOnSmallScreen>
                <Form>
                    <Form.Title>Sign In</Form.Title>
                    <Form.Base onSubmit={handleSubmit} >
                        <Form.InputWrapper >
                            <Form.Input
                                value={emailAddress}
                                autoComplete="off"
                                id="emailInput"
                                type="email"
                                onChange={({ target }) => setEmailAddress(target.value)}
                            />
                            <Form.Placeholder
                                htmlFor="emailInput"
                            >
                                Email or phone number
                            </Form.Placeholder>
                        </Form.InputWrapper>
                        <Form.InputWrapper>
                            <Form.Input
                                value={password}
                                id="passwordInput"
                                type="password"
                                onChange={({ target }) => setPassword(target.value)}
                            />
                            <Form.Placeholder
                                htmlFor="passwordInput"
                            >
                                Password
                            </Form.Placeholder>
                            {error && <Form.Error>{error}</Form.Error>}
                        </Form.InputWrapper>
                        <Form.Button onClick={() => setIsSubmitting(true)} disabled={isInvalid} type="submit">{isSubmitting ? "Submiting..." : "Sign In"}</Form.Button>
                        <Form.RememberMe>
                            <div>
                                <Form.Checkbox type="checkbox" id="checkbox" />
                                <label htmlFor="checkbox">Remember Me</label>
                            </div>
                            <span>Need help?</span>
                        </Form.RememberMe>
                    </Form.Base>
                    <Form.FacebookLogin onClick={() => signInWithRedirect(auth, provider)}><img src="/images/icons/facebook.png" alt="Facebook Logo" />Login with Facebook</Form.FacebookLogin>
                    <Form.SignUpLink to={ROUTES.SIGNUP}><span>New to Netflix?</span>Sign up now.</Form.SignUpLink>
                    <Form.CaptchaText>This page is protected by Google reCAPTCHA to ensure you're not a bot.<span>Learn more.</span></Form.CaptchaText>
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>
    )
}

