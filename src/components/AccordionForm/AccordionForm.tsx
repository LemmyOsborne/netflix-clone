import React from 'react';
import { Container, Input, Button, Text, InputGroup } from "./AccordionForm.styles";


interface AccordionFormComposition {
    Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>>
    Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>>
    Text: React.FC<React.HTMLAttributes<HTMLDivElement>>
    InputGroup: React.FC<React.HTMLAttributes<HTMLDivElement>>
}

export const AccordionForm: React.FC<{direction: string}> & AccordionFormComposition = ({ direction, children, ...restProps }) => {
    return (
        <Container direction={direction} {...restProps}>
            {children}
        </Container>
    )
}

AccordionForm.InputGroup = function AccordionFormInputGroup({ children, ...restProps }) {
    return <InputGroup {...restProps}>{children}</InputGroup>
}

AccordionForm.Input = function AccordionFormInput({ ...restProps }) {
    return <Input {...restProps} />
}

AccordionForm.Button = function AccordionFormButton({ children, ...restProps }) {
    return <Button {...restProps}>
        {children} <img src="/images/icons/chevron-right.png" alt="Try now" />
    </Button>
}

AccordionForm.Text = function AccordionFormInput({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>
}
