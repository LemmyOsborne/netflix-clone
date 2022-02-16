import React, { useState, useContext, createContext } from 'react';
import { Container, Inner, Title, Frame, Item, Header, Body } from "./Acccordion.styles";


type AccordionComposition = {
    Title: React.FC<React.HTMLAttributes<HTMLHeadingElement>>
    Frame: React.FC<React.HTMLAttributes<HTMLDivElement>>
    Item: React.FC<React.HTMLAttributes<HTMLDivElement>>
    Header: React.FC<React.HTMLAttributes<HTMLDivElement>>
    Body: React.FC<React.HTMLAttributes<HTMLDivElement>>
}

interface AccordionContext {
    toggleShow: boolean
    setToggleShow: (toggleShow: boolean) => any
}

const ToggleContext = createContext<AccordionContext>({} as AccordionContext)

export const Accordion: React.FC & AccordionComposition = ({ children, ...restProps }) => {
    return (
        <Container {...restProps}>
            <Inner>{children}</Inner>
        </Container>
    )
}

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

Accordion.Frame = function AccordionFrame({ children, ...restProps }) {
    return <Frame {...restProps}>{children}</Frame>
}

Accordion.Item = function AccordionItem({ children, ...restProps }) {
    const [toggleShow, setToggleShow] = useState(false)

    return (
        <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
            <Item {...restProps}>{children}</Item>
        </ToggleContext.Provider>
    )
}

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
    const { toggleShow, setToggleShow } = useContext(ToggleContext)

    return (
        <Header onClick={() => setToggleShow(!toggleShow)} {...restProps}>
            {children}
            {toggleShow
                ? <img src="/images/icons/close-slim.png" alt="Close" />
                : <img src="/images/icons/add.png" alt="Open" />
            }
        </Header>

    )
}

Accordion.Body = function AccordionBody({ children, ...restProps }) {
    const { toggleShow } = useContext(ToggleContext);

    return (
        <Body className={toggleShow ? "open" : "closed"} {...restProps}>
            <span>{children}</span>
        </Body>
    )
}
