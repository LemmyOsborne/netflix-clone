import React, { ReactNode } from "react";
import { Inner, Container, Pane, Image, Title, SubTitle, Item } from "./Jumbotron.styles";

export interface Props {
    direction?: string
    children?: ReactNode
    src?: string
    alt?: string
}

interface JumbotronComposition {
    Container: React.FC<Props>
    Pane: React.FC<Props>
    Title: React.FC<Props>
    SubTitle: React.FC<Props>
    Image: React.FC<Props>
}


export const Jumbotron: React.FC<Props> & JumbotronComposition = ({ children, direction }) => {
    return (
        <Item>
            <Inner direction={direction}>
                {children}
            </Inner>
        </Item>
    )
}


Jumbotron.Container = ({ children, ...restProps }) => {
    return <Container {...restProps}>{children}</Container>
}

Jumbotron.Pane = ({ children, ...restProps }) => {
    return <Pane {...restProps}>{children}</Pane>
}

Jumbotron.Title = ({ children, ...restProps }) => {
    return <Title {...restProps}>{children}</Title>
}

Jumbotron.SubTitle = ({ children, ...restProps }) => {
    return <SubTitle {...restProps}>{children}</SubTitle>
}

Jumbotron.Image = ({ src, alt, ...restProps }) => {
    return <Image src={src} alt={alt} {...restProps} />
}

