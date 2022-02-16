import React from 'react';
import { useState } from 'react';
import { Form } from "../components";
import * as ROUTES from "../constants/routes";


export const FormContainer: React.FC = () => {
    //Using state to animate label tags in inputs
    const [firstPlaceholderToggle, setFirstPlaceholderToggle] = useState(false)
    const [secondPlaceholderToggle, setSecondPlaceholderToggle] = useState(false)

    const [emailAddress, setEmailAddress] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const handleFirstInputFocus = () => {
        setFirstPlaceholderToggle(firstPlaceholderToggle => !firstPlaceholderToggle)
    }

    const handleSecondInputFocus = () => {
        setSecondPlaceholderToggle(!secondPlaceholderToggle)
    }

    const handleSubmit = () => {
        
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Title>Sign In</Form.Title>
            <Form.InputWrapper onFocus={handleFirstInputFocus} onBlur={handleFirstInputFocus} >
                <Form.Input value={emailAddress} id="emailInput" type="email" onChange={({ target }) => setEmailAddress(target.value)} />
                <Form.Label htmlFor="emailInput" placeholderToggle={firstPlaceholderToggle}>Email or phone number</Form.Label>
                {error && <Form.Error>{error}</Form.Error>}
            </Form.InputWrapper>
            <Form.InputWrapper onFocus={handleSecondInputFocus} onBlur={handleSecondInputFocus}>
                <Form.Input value={password} id="passwordInput" type="password" onChange={({ target }) => setPassword(target.value)}/>
                <Form.Label htmlFor="passwordInput" placeholderToggle={secondPlaceholderToggle}>Password</Form.Label>
                {error && <Form.Error>{error}</Form.Error>}
            </Form.InputWrapper>
            <Form.Button>Sign In</Form.Button>
            <Form.RememberMe>
                <div>
                    <Form.RememberMeCheckbox type="checkbox" id="checkbox" />
                    <label htmlFor="checkbox">Remember Me</label>
                </div>
                <span>Need help?</span>
            </Form.RememberMe>
            <Form.FacebookLogin><img src="/images/icons/facebook.png" alt="Facebook Logo" />Login with Facebook</Form.FacebookLogin>
            <Form.SignUpLink to={ROUTES.SIGNIN}><span>New to Netflix?</span>Sign up now.</Form.SignUpLink>
            <Form.CaptchaText>This page is protected by Google reCAPTCHA to ensure you're not a bot.<span>Learn more.</span></Form.CaptchaText>
        </Form>
    )
}
