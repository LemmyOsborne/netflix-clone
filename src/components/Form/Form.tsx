import React, { createContext, useContext, useState } from 'react';
import { LinkProps } from 'react-router-dom';
import { Container, Inner, Checkbox, Title, Base, InputWrapper, Input, Label, Button, RememberMe, FacebookLogin, SignUpLink, CaptchaText, Error } from "./Form.styles";


interface FormComposition {
    Title: React.FC<React.HTMLAttributes<HTMLHeadingElement>>
    Base: React.FC<React.FormHTMLAttributes<HTMLFormElement>>
    InputWrapper: React.FC<React.HTMLAttributes<HTMLDivElement>>
    Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>>
    Label: React.FC<React.LabelHTMLAttributes<HTMLLabelElement>>
    Error: React.FC<React.HTMLAttributes<HTMLDivElement>>
    Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>>
    RememberMe: React.FC<React.HTMLAttributes<HTMLDivElement>>
    Checkbox: React.FC<React.InputHTMLAttributes<HTMLInputElement>>
    FacebookLogin: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>>
    SignUpLink: React.FC<LinkProps>
    CaptchaText: React.FC<React.HTMLAttributes<HTMLDivElement>>
}

interface FormInputContext {
    togglePlaceholder: boolean
    setTogglePlaceholder: React.Dispatch<React.SetStateAction<boolean>>
}

export const ToggleContext = createContext({} as FormInputContext)

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
    //Using state to animate placeholders in inputs, which represent by label tags

    const [togglePlaceholder, setTogglePlaceholder] = useState(false)

    return (
        <ToggleContext.Provider value={{ togglePlaceholder, setTogglePlaceholder }}>
            <InputWrapper {...restProps}>
                {children}
            </InputWrapper>
        </ToggleContext.Provider>
    )
}

Form.Input = function FormInput({ value, ...restProps }) {
    const { togglePlaceholder, setTogglePlaceholder } = useContext(ToggleContext)

    const handleInputFocus = () => {
        !value
            ? setTogglePlaceholder(!togglePlaceholder)
            : setTogglePlaceholder(togglePlaceholder)
    }

    return <Input
        value={value}
        onFocus={handleInputFocus}
        onBlur={handleInputFocus}
        {...restProps}
    />
}

Form.Label = function FormLabel({ children, ...restProps }) {
    const { togglePlaceholder } = useContext(ToggleContext)

    return <Label className={togglePlaceholder ? "isToggle" : ""} {...restProps}>{children}</Label>
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

Form.Checkbox = function FormCheckbox({ ...restProps }) {
    return <Checkbox {...restProps} />
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