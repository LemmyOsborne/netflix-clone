import React from "react";
import { Inner, Container, Pane, Image, Title, SubTitle, Item, Video, AnimationContainer, AnimationText } from "./Jumbotron.styles";


interface JumbotronComposition {
    Container: React.FC<React.HTMLAttributes<HTMLDivElement>>
    Pane: React.FC<React.HTMLAttributes<HTMLDivElement>>
    Title: React.FC<React.HTMLAttributes<HTMLHeadingElement>>
    SubTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>>
    Image: React.FC<React.ImgHTMLAttributes<HTMLImageElement>>
    Video: React.FC<React.VideoHTMLAttributes<HTMLVideoElement> & {secondVideo?: "true"}>
    AnimationContainer: React.FC<React.HTMLAttributes<HTMLDivElement>>
    AnimationText: React.FC<React.HTMLAttributes<HTMLDivElement>>
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


Jumbotron.Container = function ({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Jumbotron.Pane = function ({ children, ...restProps }) {
    return <Pane {...restProps}>{children}</Pane>
}

Jumbotron.Title = function ({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

Jumbotron.SubTitle = function ({ children, ...restProps }) {
    return <SubTitle {...restProps}>{children}</SubTitle>
}

Jumbotron.Image = function ({ ...restProps }) {
    return <Image {...restProps} />
}

Jumbotron.Video = function ({ secondVideo,...restProps }) {
    return <Video className={secondVideo && "secondVideo"} {...restProps} />
}

Jumbotron.AnimationContainer = function ({ children, ...restProps }) {
    return <AnimationContainer {...restProps}>{children}</AnimationContainer>
}

Jumbotron.AnimationText = function ({ children, ...restProps }) {
    return <AnimationText {...restProps}>{children}</AnimationText>
}
