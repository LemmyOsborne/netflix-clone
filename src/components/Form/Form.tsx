import React from 'react';
import { LinkProps } from 'react-router-dom';
import { Container, Inner, RememberMeCheckbox, Title, Base, InputWrapper, Input, Label, Button, RememberMe, FacebookLogin, SignUpLink, CaptchaText, Error } from "./Form.styles";


interface FormComposition {
    Title: React.FC<React.HTMLAttributes<HTMLHeadingElement>>
    Base: React.FC<React.FormHTMLAttributes<HTMLFormElement>>
    InputWrapper: React.FC<React.HTMLAttributes<HTMLDivElement>>
    Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>>
    Label: React.FC<React.LabelHTMLAttributes<HTMLLabelElement> & { placeholderToggle: boolean }>
    Error: React.FC<React.HTMLAttributes<HTMLDivElement>>
    Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>>
    RememberMe: React.FC<React.HTMLAttributes<HTMLDivElement>>
    RememberMeCheckbox: React.FC<React.InputHTMLAttributes<HTMLInputElement>>
    FacebookLogin: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>>
    SignUpLink: React.FC<LinkProps>
    CaptchaText: React.FC<React.HTMLAttributes<HTMLDivElement>>
}

export const Form: React.FC & FormComposition = ({ children, ...restProps }) => {
    return (
        <Container {...restProps}>
            <Inner>
                {children}
            </Inner>
        </Container>
    )
}


Form.Title = function FormTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

Form.Base = function FormBase({ children, ...restProps }) {
    return <Base {...restProps}>{children}</Base>
}

Form.InputWrapper = function FormInputWrapper({ children, ...restProps }) {
    return <InputWrapper {...restProps}>{children}</InputWrapper>
}

Form.Input = function FormInput({ ...restProps }) {
    return <Input {...restProps} />
}

Form.Label = function FormLabel({ placeholderToggle, children, ...restProps }) {
    return <Label className={placeholderToggle ? "isToggle" : ""} {...restProps}>{children}</Label>
}

Form.Error = function FormError({ children, ...restProps }) {
    return <Error {...restProps}>{children}</Error>
}

Form.Button = function FormButton({ children, ...restProps }) {
    return <Button {...restProps}>{children}</Button>
}

Form.RememberMe = function FormRememberMe({ children, ...restProps }) {
    return <RememberMe {...restProps}>{children}</RememberMe>
}

Form.RememberMeCheckbox = function FormRememberMeCheckbox({ ...restProps }) {
    return <RememberMeCheckbox {...restProps} />
}

Form.FacebookLogin = function FormFacebookLogin({ children, ...restProps }) {
    return <FacebookLogin {...restProps}>{children}</FacebookLogin>
}


Form.SignUpLink = function FormSignUpLink({ children, ...restProps }) {
    return <SignUpLink {...restProps}>{children}</SignUpLink>
}

Form.CaptchaText = function FormCaptchaText({ children, ...restProps }) {
    return <CaptchaText {...restProps}>{children}</CaptchaText>
}