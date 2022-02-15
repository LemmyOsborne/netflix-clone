import React from 'react';
import { Container, Input, Button, Text } from "./AccordionForm.styles";


interface AccordionFormComposition {
    Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>>
    Button: React.FC
    Text: React.FC
}

export const AccordionForm: React.FC & AccordionFormComposition = ({ children, ...restProps }) => {
  return <Container { ...restProps }>{children}</Container>
}

AccordionForm.Input = function AccordionFormInput({ ...restProps }) {
    return <Input { ...restProps }/>
}

AccordionForm.Button = function AccordionFormButton({ children, ...restProps }) {
    return <Button { ...restProps }>{children}</Button>
}

AccordionForm.Text = function AccordionFormInput({ children, ...restProps }) {
    return <Text { ...restProps }>{children}</Text>
}
