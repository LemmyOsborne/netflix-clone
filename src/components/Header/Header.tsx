import React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { Background, ButtonLink, Container, Logo, Text } from "./Header.styles";

interface HeaderComposition {
    Frame: React.FC<React.HTMLAttributes<HTMLDivElement>> 
    Text?: React.FC<React.HTMLAttributes<HTMLParagraphElement>>
    ButtonLink: React.FC<LinkProps>
    Logo: React.FC<{ to: string, src: string, alt: string }>
}

export const Header: React.FC<{bg?: string}> & HeaderComposition = ({ bg, children, ...restProps }) => {

    return (
        <Background className={bg && "changeBackground"} {...restProps}>
            {children}
        </Background>
    ) 
}


Header.Frame = function HeaderFrame({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Header.Logo = function HeaderLogo({ to, children, ...restProps }) {
    return (
        <Link to={to}>
            <Logo {...restProps} />
        </Link>
    )
}

Header.Text = function HeaderText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>
}

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
    return <ButtonLink {...restProps}>{children}</ButtonLink>
}