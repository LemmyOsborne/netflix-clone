import React from 'react';
import { Container, Input, Button, Text, InputGroup } from "./CtaForm.styles";
import * as ROUTES from "../../constants/routes";
import { useNavigate } from "react-router-dom";



interface CtaFormComposition {
    Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>>
    Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>>
    Text: React.FC<React.HTMLAttributes<HTMLDivElement>>
    InputGroup: React.FC<React.HTMLAttributes<HTMLDivElement>>
}

export const CtaForm: React.FC<{ direction: string }> & CtaFormComposition = ({ direction, children, ...restProps }) => {
    return (
        <Container direction={direction} {...restProps}>
            {children}
        </Container>
    )
}

CtaForm.InputGroup = function CtaFormInputGroup({ children, ...restProps }) {
    return <InputGroup {...restProps}>{children}</InputGroup>
}


CtaForm.Input = function CtaFormInput({ value, ...restProps }) {
    return <Input {...restProps}/>
}


CtaForm.Button = function CtaFormButton({ children, ...restProps }) {
    const navigate = useNavigate()

    return (
        <Button onClick={() => navigate(ROUTES.SIGNUP)} {...restProps}>
            {children} <img src="/images/icons/chevron-right.png" alt="Try now" />
        </Button>
    )
}

CtaForm.Text = function CtaFormInput({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>
}
