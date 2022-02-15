import React from 'react';
import { Container, Row, Column, Link, Title, BottomText } from "./Footer.styles"


interface FooterComposition {
    Row: React.FC<React.HTMLAttributes<HTMLDivElement>>
    Column: React.FC<React.HTMLAttributes<HTMLDivElement>>
    Link: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>>
    Title: React.FC<React.HTMLAttributes<HTMLParagraphElement>>
    BottomText: React.FC<React.HTMLAttributes<HTMLParagraphElement>>
}

export const Footer: React.FC & FooterComposition = ({ children, ...restProps }) => {
  return (
    <Container {...restProps}>{children}</Container>
  )
}

Footer.Row = ({ children, ...restProps }) => {
    return <Row {...restProps}>{children}</Row>
}

Footer.Column = ({ children, ...restProps }) => {
    return <Column {...restProps}>{children}</Column>
}

Footer.Link = ({ children, ...restProps }) => {
    return <Link {...restProps}>{children}</Link>
}

Footer.Title = ({ children, ...restProps }) => {
    return <Title {...restProps}>{children}</Title>
}

Footer.BottomText = ({ children, ...restProps }) => {
    return <BottomText {...restProps}>{children}</BottomText>
}

