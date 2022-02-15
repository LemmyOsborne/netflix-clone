import React, { ReactNode } from "react";
import { Inner, Container, Pane, Image, Title, SubTitle, Item } from "./Jumbotron.styles";


interface JumbotronComposition {
    Container: React.FC<React.HTMLAttributes<HTMLDivElement>>
    Pane: React.FC<React.HTMLAttributes<HTMLDivElement>>
    Title: React.FC<React.HTMLAttributes<HTMLHeadingElement>>
    SubTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>>
    Image: React.FC<React.ImgHTMLAttributes<HTMLImageElement>>
}


export const Jumbotron: React.FC<{direction: string}> & JumbotronComposition = ({ children, direction }) => {
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

Jumbotron.Image = ({ ...restProps }) => {
    return <Image {...restProps} />
}
